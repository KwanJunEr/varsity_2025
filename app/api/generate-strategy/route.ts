import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
  const { category, amount, riskLevel } = await request.json();

  console.log("Received:", { category, amount, riskLevel });

  const API_KEY = process.env.GEMINI_API_KEY;
  console.log("✅ API Key Loaded in API Route:", API_KEY);

  if (!API_KEY) {
    return NextResponse.json({ error: "API Key is missing" }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  // Updated prompt: Instruct Gemini to output a single JSON object
  const prompt = `
Generate a repayment strategy for a microloan.
Category: ${category}
Loan Amount: ${amount}
Risk Level: ${riskLevel}

Please output a valid JSON object with the following structure:
{
  "riskLevel": (string),
  "numberOfPhases": (number),
  "descriptions": (array of strings),
  "dueDays": (array of numbers),
  "amounts": (array of numbers) 
}

Ensure that the sum of the values in "amounts" equals the provided loan amount.
Return ONLY the JSON object with no additional text or formatting.
  `;

  console.log("✅ API Route hit!");

  try {
    const result = await model.generateContent(prompt);
    const apiResponse = await result.response;
    const text = apiResponse.text();

    console.log("🤖 Raw Gemini Output:", text);

    // Remove code fences (```json and ```), if present
    const cleanText = text.replace(/```json|```/g, "").trim();
    console.log("🧹 Cleaned Gemini Output:", cleanText);

    const parsed = JSON.parse(cleanText);

    return NextResponse.json({ strategy: parsed });
  } catch (error) {
    console.error("🔥 Gemini API error:", error);
    return NextResponse.json(
      { error: "Failed to generate strategy", details: String(error) },
      { status: 500 }
    );
  }
}

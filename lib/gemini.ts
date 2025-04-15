// lib/gemini.ts
export async function generateRepaymentStrategies(riskLevel: "Low" | "Medium" | "High") {
  try {
    const response = await fetch("/api/generate-strategy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: "business",
        amount: 10000,
        riskLevel: riskLevel,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unknown error");
    }

    console.log("✅ API response:", data); 
    // data now looks like: { strategy: { riskLevel:..., numberOfPhases:..., ... } }

    return data.strategy; // <-- Instead of data.strategies
  } catch (error) {
    console.error("🔥 Error fetching repayment strategies:", error);
    return null;
  }
}

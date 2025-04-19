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

export async function generateInterestRateAnalysis() {
  try {
    // Fetch Federal Funds Rate
    console.log("🔄 Fetching Federal Funds Rate...");
    const fedRateResponse = await fetch(
      `https://www.alphavantage.co/query?function=FEDERAL_FUNDS_RATE&interval=daily&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`
    );
    const fedRateData = await fedRateResponse.json();
    console.log("📊 Raw Federal Funds Rate Data:", JSON.stringify(fedRateData, null, 2));

    // Fetch Treasury Yield
    console.log("🔄 Fetching Treasury Yield...");
    const treasuryResponse = await fetch(
      `https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=daily&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`
    );
    const treasuryData = await treasuryResponse.json();
    console.log("📊 Raw Treasury Yield Data:", JSON.stringify(treasuryData, null, 2));

    // Format the data for the chart
    const formattedMarketTrends = {
      fedRate: (fedRateData.data || []).slice(0, 6).map((item: any) => ({
        month: new Date(item.date).toLocaleDateString('en-US', { month: 'short' }),
        rate: parseFloat(item.value)
      })).reverse(),
      treasuryYield: (treasuryData.data || []).slice(0, 6).map((item: any) => ({
        month: new Date(item.date).toLocaleDateString('en-US', { month: 'short' }),
        rate: parseFloat(item.value)
      })).reverse()
    };

    console.log("✨ Formatted Market Trends:", JSON.stringify(formattedMarketTrends, null, 2));

    // Call the interest rate API
    const response = await fetch("/api/interest-rate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentRate: 5.25,
        riskLevel: "Medium",
        marketData: formattedMarketTrends
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate interest rate analysis");
    }

    const data = await response.json();
    return {
      ...data.analysis,
      marketTrends: formattedMarketTrends
    };
  } catch (error) {
    console.error("🔥 Error in generateInterestRateAnalysis:", error);
    return null;
  }
}

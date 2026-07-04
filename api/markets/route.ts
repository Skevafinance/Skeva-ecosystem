import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      symbol: "BTC-PERP",
      price: 182350,
      collateralRatio: "100%"
    },
    {
      symbol: "SOL-PERP",
      price: 168,
      collateralRatio: "100%"
    }
  ]);
}

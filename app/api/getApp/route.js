import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json([
    {
      id: 101,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 25.99,
      stock: 120,
    },
    {
      id: 102,
      name: "Gaming Keyboard",
      category: "Electronics",
      price: 55.49,
      stock: 80,
    },
    {
      id: 103,
      name: "Office Chair",
      category: "Furniture",
      price: 120.0,
      stock: 50,
    },
  ]);
}

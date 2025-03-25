"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

interface Product {
  id: string;
  name: string;
  description: string;
  pointPrice: number;
  image: string;
  purchased?: boolean;
}

const initialProducts: Product[] = [
  {
    id: "1",
    name: "LendSync T-Shirt",
    description: "Comfortable cotton t-shirt with LendSync logo",
    pointPrice: 500,
    image: "/merch/shirt.jpeg",
  },
  {
    id: "2",
    name: "LendSync Cap",
    description: "Stylish cap with embroidered LendSync logo",
    pointPrice: 300,
    image: "/merch/hat.jpeg",
  },
  {
    id: "3",
    name: "LendSync Notebook",
    description: "High-quality notebook with LendSync branding",
    pointPrice: 200,
    image: "/merch/notebook.jpeg",
  },
];

export default function Marketplace() {
  const [products, setProducts] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const purchasedItems = JSON.parse(
        localStorage.getItem("purchasedItems") || "[]"
      );
      return initialProducts.map((product) => ({
        ...product,
        purchased: purchasedItems.includes(product.id),
      }));
    }
    return initialProducts;
  });

  const [userPoints, setUserPoints] = useState(() => {
    const points = localStorage.getItem("points");
    return points ? parseInt(points, 10) : 0;
  });

  const [reputation, setReputation] = useState(() => {
    const reputation = localStorage.getItem("reputation");
    return reputation ? parseInt(reputation, 10) : 0;
  });

  useEffect(() => {
    const points = localStorage.getItem("points");
    setUserPoints(points ? parseInt(points, 10) : 0);

    const reputation = localStorage.getItem("reputation");
    setReputation(reputation ? parseInt(reputation, 10) : 0);
  }, []);

  const handlePurchase = (product: Product) => {
    if (userPoints >= product.pointPrice) {
      const newPoints = userPoints - product.pointPrice;
      setUserPoints(newPoints);
      localStorage.setItem("points", newPoints.toString());

      const updatedProducts = products.map((p) =>
        p.id === product.id ? { ...p, purchased: true } : p
      );
      setProducts(updatedProducts);

      const purchasedItems = JSON.parse(
        localStorage.getItem("purchasedItems") || "[]"
      );
      purchasedItems.push(product.id);
      localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));

      alert(`Successfully purchased ${product.name}!`);
    } else {
      alert("Not enough points for this purchase!");
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Merchandise Marketplace</h1>
          <div className="text-lg font-semibold">
            Your Points: {userPoints} | Reputation: {reputation}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">
                    {product.pointPrice} Points
                  </span>
                  {product.purchased ? (
                    <span className="px-4 py-2 bg-green-600 text-white rounded-md">
                      Purchased
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePurchase(product)}
                      disabled={userPoints < product.pointPrice}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Purchase
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

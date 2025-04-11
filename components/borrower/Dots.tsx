"use client"

import { useEffect, useState } from "react"

export default function LoadingDots() {
  const [dots, setDots] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev % 3) + 1)
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center space-x-1">
      <div className="text-2xl font-bold text-blue-600">AI Analyzing</div>
      <div className="flex space-x-1">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full bg-blue-600 transition-opacity duration-300 ${
              i <= dots ? "opacity-100" : "opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}


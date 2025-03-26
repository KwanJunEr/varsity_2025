"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, DollarSign, Percent, Star, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

// Sample equipment items (financial credentials)
const EQUIPMENT_ITEMS = [
  { id: 1, name: "Financial Education Certificate", bonus: 5, image: "/placeholder.svg?height=50&width=50" },
  { id: 2, name: "Savings Account Badge", bonus: 10, image: "/placeholder.svg?height=50&width=50" },
  { id: 3, name: "On-time Payment History", bonus: 8, image: "/placeholder.svg?height=50&width=50" },
  { id: 4, name: "Community Endorsement", bonus: 15, image: "/placeholder.svg?height=50&width=50" },
]

// Cat accessories (visual items)
const CAT_ACCESSORIES = [
  {
    id: 1,
    name: "Bow Tie",
    description: "A fancy bow tie for formal occasions",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=250&h=250&fit=crop",
    position: "neck",
    style: "top-[60%] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px]",
  },
  {
    id: 2,
    name: "Party Hat",
    description: "A colorful party hat for celebrations",
    image: "https://images.unsplash.com/photo-1578730170732-4201e052b85b?w=250&h=250&fit=crop",
    position: "head",
    style: "top-[5%] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px]",
  },
  {
    id: 3,
    name: "Sunglasses",
    description: "Cool shades for a stylish look",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=250&h=250&fit=crop",
    position: "eyes",
    style: "top-[40%] left-1/2 transform -translate-x-1/2 w-[120px] h-[60px]",
  },
  {
    id: 4,
    name: "Scarf",
    description: "A cozy scarf for cold days",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=250&h=250&fit=crop",
    position: "neck",
    style: "top-[70%] left-1/2 transform -translate-x-1/2 w-[150px] h-[80px]",
  },
  {
    id: 5,
    name: "Gold Chain",
    description: "A flashy gold chain to show off wealth",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=250&h=250&fit=crop",
    position: "neck",
    style: "top-[65%] left-1/2 transform -translate-x-1/2 w-[120px] h-[60px]",
  },
  {
    id: 6,
    name: "Flower Crown",
    description: "A beautiful flower crown for a natural look",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=250&h=250&fit=crop",
    position: "head",
    style: "top-[10%] left-1/2 transform -translate-x-1/2 w-[140px] h-[70px]",
  },
]

// Microloan perks by level
const LEVEL_PERKS = [
  { level: 1, perk: "Basic Loan Access", interestRate: "12%", maxAmount: "$10000" },
  { level: 2, perk: "Reduced Interest Rate", interestRate: "10%", maxAmount: "$25000" },
  { level: 3, perk: "Increased Loan Amount", interestRate: "8%", maxAmount: "$27000" },
  { level: 4, perk: "Priority Processing", interestRate: "7%", maxAmount: "$29000" },
  { level: 5, perk: "Premium Loan Terms", interestRate: "5%", maxAmount: "$30000" },
]

export default function PetPage() {
  // Preset to Level 2 with some progress (150 reputation points)
  const [reputation, setReputation] = useState(150)
  const [level, setLevel] = useState(2)
  const [progress, setProgress] = useState(50)
  const [equippedItems, setEquippedItems] = useState<number[]>([1])
  const [equipmentBonus, setEquipmentBonus] = useState(5)
  const [equippedAccessories, setEquippedAccessories] = useState<number[]>([])

  useEffect(() => {
    // Load saved data from localStorage or use preset values
    const storedReputation = localStorage.getItem("reputation")
    const initialReputation = storedReputation ? Number.parseInt(storedReputation, 10) : 150 // Default to 150 (Level 2 with 50% progress)

    const storedEquippedItems = localStorage.getItem("equippedItems")
    const initialEquippedItems = storedEquippedItems ? JSON.parse(storedEquippedItems) : [1] // Default to having the first item equipped

    const storedAccessories = localStorage.getItem("equippedAccessories")
    const initialAccessories = storedAccessories ? JSON.parse(storedAccessories) : [] // Default to no accessories

    setReputation(initialReputation)
    setEquippedItems(initialEquippedItems)
    setEquippedAccessories(initialAccessories)
    updateLevel(initialReputation)
    calculateEquipmentBonus(initialEquippedItems)
  }, [])

  const updateLevel = (rep: number) => {
    const newLevel = Math.floor(rep / 100) + 1
    setLevel(newLevel)

    // Calculate progress to next level (0-100%)
    const progressToNextLevel = rep % 100
    setProgress(progressToNextLevel)
  }

  const toggleEquipItem = (itemId: number) => {
    let newEquippedItems

    if (equippedItems.includes(itemId)) {
      // Unequip item
      newEquippedItems = equippedItems.filter((id) => id !== itemId)
    } else {
      // Equip item (limit to 2 items at a time)
      if (equippedItems.length >= 2) {
        newEquippedItems = [...equippedItems.slice(1), itemId]
      } else {
        newEquippedItems = [...equippedItems, itemId]
      }
    }

    setEquippedItems(newEquippedItems)
    localStorage.setItem("equippedItems", JSON.stringify(newEquippedItems))
    calculateEquipmentBonus(newEquippedItems)
  }

  const toggleAccessory = (accessoryId: number) => {
    let newEquippedAccessories
    const accessory = CAT_ACCESSORIES.find((a) => a.id === accessoryId)

    if (!accessory) return

    if (equippedAccessories.includes(accessoryId)) {
      // Unequip accessory
      newEquippedAccessories = equippedAccessories.filter((id) => id !== accessoryId)
    } else {
      // Check if there's already an accessory in the same position
      const samePositionAccessories = equippedAccessories.filter((id) => {
        const equippedAccessory = CAT_ACCESSORIES.find((a) => a.id === id)
        return equippedAccessory && equippedAccessory.position === accessory.position
      })

      // Remove accessories in the same position
      const filteredAccessories = equippedAccessories.filter((id) => {
        const equippedAccessory = CAT_ACCESSORIES.find((a) => a.id === id)
        return equippedAccessory && equippedAccessory.position !== accessory.position
      })

      // Add the new accessory
      newEquippedAccessories = [...filteredAccessories, accessoryId]
    }

    setEquippedAccessories(newEquippedAccessories)
    localStorage.setItem("equippedAccessories", JSON.stringify(newEquippedAccessories))
  }

  const calculateEquipmentBonus = (items: number[]) => {
    const bonus = items.reduce((total, itemId) => {
      const item = EQUIPMENT_ITEMS.find((eq) => eq.id === itemId)
      return total + (item?.bonus || 0)
    }, 0)

    setEquipmentBonus(bonus)
  }

  const getReputationAnalysis = () => {
    if (reputation < 100) {
      return "Your cat is building its financial reputation. Limited loan options available."
    } else if (reputation < 200) {
      return "Your cat has established basic creditworthiness. Eligible for standard microloans."
    } else if (reputation < 400) {
      return "Your cat has a strong financial reputation. Preferred interest rates and higher loan amounts available."
    } else {
      return "Your cat has an exceptional financial reputation! Maximum loan amounts and minimum interest rates."
    }
  }

  const getCurrentPerks = () => {
    return LEVEL_PERKS.filter((perk) => perk.level <= level)
  }

  const getNextPerk = () => {
    return LEVEL_PERKS.find((perk) => perk.level === level + 1)
  }

  const getCurrentLoanTerms = () => {
    const currentPerk = LEVEL_PERKS.find((perk) => perk.level === level)
    return currentPerk || LEVEL_PERKS[0]
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">


      <main className="flex-1 container mx-auto px-4 py-8 mt-10">
        <h1 className="text-3xl font-bold mb-2 text-center">Pet Cat Level Tracker</h1>
        <h2 className="text-xl text-center text-muted-foreground mb-6">(Reputation Score NFT)</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cat Profile Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Your Financial Companion</CardTitle>
              <CardDescription>NFT Reputation Score: {reputation + equipmentBonus}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative">
                {/* Main cat image - using Unsplash */}
                <Image
                  src="/cat.jpeg"
                  alt="Cat"
                  width={300}
                  height={300}
                  className="rounded-md mb-4"
                />

                {/* Display equipped accessories */}
                <div className="absolute top-0 left-0 w-full h-full">
                  {equippedAccessories.map((accessoryId) => {
                    const accessory = CAT_ACCESSORIES.find((a) => a.id === accessoryId)
                    if (!accessory) return null

                    return (
                      <div key={accessoryId} className={`absolute ${accessory.style}`}>
                        <Image
                          src={accessory.image || "/placeholder.svg"}
                          alt={accessory.name}
                          width={100}
                          height={100}
                          className="object-contain"
                        />
                      </div>
                    )
                  })}
                </div>

                {/* Display equipped financial items (small badges in corner) */}
                <div className="absolute bottom-4 right-4 flex gap-1">
                  {equippedItems.map((itemId) => {
                    const item = EQUIPMENT_ITEMS.find((eq) => eq.id === itemId)
                    if (!item) return null

                    return (
                      <div key={itemId} className="bg-white rounded-full p-1 shadow-md" title={item.name}>
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} width={24} height={24} />
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="w-full space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                    Level {level}
                  </span>
                  <Badge variant="outline" className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {equipmentBonus > 0 ? `+${equipmentBonus} Bonus` : "No Bonus"}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Level {level + 1}</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply for Microloan</Button>
            </CardFooter>
          </Card>

          {/* Details Section */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Financial Profile</CardTitle>
              <CardDescription>Your cat's reputation directly impacts microloan eligibility and terms</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="accessories">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="accessories">Accessories</TabsTrigger>
                  <TabsTrigger value="loan-terms">Loan Terms</TabsTrigger>
                  <TabsTrigger value="credentials">Credentials</TabsTrigger>
                  <TabsTrigger value="analysis">Analysis</TabsTrigger>
                </TabsList>

                {/* Accessories Tab */}
                <TabsContent value="accessories">
                  <div className="mb-4 p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-1">Cat Accessories</h4>
                    <p className="text-sm text-muted-foreground">
                      Customize your cat with accessories you've earned or purchased. You can equip one accessory per
                      position (head, eyes, neck).
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {CAT_ACCESSORIES.map((accessory) => (
                      <div
                        key={accessory.id}
                        onClick={() => toggleAccessory(accessory.id)}
                        className={`border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                          equippedAccessories.includes(accessory.id) ? "ring-2 ring-primary" : ""
                        }`}
                      >
                        <div className="relative h-32">
                          <Image
                            src={accessory.image || "/placeholder.svg"}
                            alt={accessory.name}
                            fill
                            className="object-cover"
                          />
                          {equippedAccessories.includes(accessory.id) && (
                            <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                              <Check className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                        <div className="p-3">
                          <p className="font-medium">{accessory.name}</p>
                          <p className="text-xs text-muted-foreground">{accessory.description}</p>
                          <Badge variant="outline" className="mt-2">
                            {accessory.position}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Loan Terms Tab */}
                <TabsContent value="loan-terms" className="space-y-4">
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <h3 className="text-lg font-medium mb-3">Current Loan Eligibility</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                        <DollarSign className="h-8 w-8 text-green-500 mb-2" />
                        <span className="text-sm text-muted-foreground">Max Amount</span>
                        <span className="text-xl font-bold">{getCurrentLoanTerms().maxAmount}</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                        <Percent className="h-8 w-8 text-blue-500 mb-2" />
                        <span className="text-sm text-muted-foreground">Interest Rate</span>
                        <span className="text-xl font-bold">{getCurrentLoanTerms().interestRate}</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                        <CreditCard className="h-8 w-8 text-purple-500 mb-2" />
                        <span className="text-sm text-muted-foreground">Special Perk</span>
                        <span className="text-lg font-medium text-center">{getCurrentLoanTerms().perk}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Microloan Benefits By Level</h3>
                    <div className="space-y-3">
                      {LEVEL_PERKS.map((perk) => (
                        <div
                          key={perk.level}
                          className={`p-3 rounded-lg border flex items-center ${
                            perk.level <= level ? "bg-primary/5 border-primary/20" : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex-shrink-0 mr-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                perk.level <= level ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-500"
                              }`}
                            >
                              {perk.level}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{perk.perk}</p>
                            <div className="flex text-sm text-muted-foreground gap-4">
                              <span>Interest: {perk.interestRate}</span>
                              <span>Max: {perk.maxAmount}</span>
                            </div>
                          </div>
                          {perk.level <= level && <Check className="w-5 h-5 text-green-500" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {getNextPerk() && (
                    <div className="mt-4">
                      <p className="text-sm">
                        <span className="font-medium">Next upgrade:</span> Need {100 - progress} more reputation points
                        to unlock Level {level + 1} benefits
                      </p>
                    </div>
                  )}
                </TabsContent>

                {/* Credentials Tab */}
                <TabsContent value="credentials">
                  <div className="grid grid-cols-2 gap-4">
                    {EQUIPMENT_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => toggleEquipItem(item.id)}
                        className={`p-3 border rounded-lg flex items-center cursor-pointer transition-colors ${
                          equippedItems.includes(item.id) ? "border-primary bg-primary/10" : "hover:bg-gray-50"
                        }`}
                      >
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">+{item.bonus} reputation</p>
                        </div>
                        {equippedItems.includes(item.id) && <Check className="w-5 h-5 text-primary" />}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-1">How Credentials Work</h4>
                    <p className="text-sm text-muted-foreground">
                      Equip up to 2 financial credentials to boost your cat's reputation score. Higher reputation leads
                      to better loan terms and increased borrowing limits.
                    </p>
                  </div>
                </TabsContent>

                {/* Analysis Tab */}
                <TabsContent value="analysis">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Reputation Analysis</h3>
                      <p>{getReputationAnalysis()}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-1">Base Reputation</h4>
                        <p className="text-2xl font-bold">{reputation}</p>
                        <p className="text-sm text-muted-foreground mt-1">Earned through financial activities</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-1">Credential Bonus</h4>
                        <p className="text-2xl font-bold">+{equipmentBonus}</p>
                        <p className="text-sm text-muted-foreground mt-1">From equipped financial credentials</p>
                      </div>
                      <div className="p-4 border rounded-lg col-span-2">
                        <h4 className="font-medium mb-1">Total Reputation Score</h4>
                        <p className="text-3xl font-bold text-primary">{reputation + equipmentBonus}</p>
                        <div className="mt-2 text-sm">
                          <p className="font-medium">Why This Matters:</p>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-1">
                            <li>Determines your microloan interest rate</li>
                            <li>Affects maximum borrowing amount</li>
                            <li>Influences approval speed and requirements</li>
                            <li>Unlocks special financial perks and opportunities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}


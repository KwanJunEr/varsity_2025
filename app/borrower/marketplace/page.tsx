"use client";

import { useState } from "react";
import Navbar from "@/components/borrower/BorrowerHeader";
import { Coins, Check, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState("swags");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokens, setTokens] = useState(1250);

  const handlePurchase = () => {
    if (selectedProduct && tokens >= selectedProduct.price) {
      setTokens(tokens - selectedProduct.price);
      setIsModalOpen(false);
    } else {
    }
  };

  const openPurchaseModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-7 py-8 mt-10">
      <Navbar />
      <TokenDisplay tokens={tokens} />

      <Tabs defaultValue="swags" className="mt-8" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="swags">Swags</TabsTrigger>
          <TabsTrigger value="pet-decorations">Pet Decorations</TabsTrigger>
        </TabsList>
        <TabsContent value="swags" className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Swags</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swagItems.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onPurchase={openPurchaseModal}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="pet-decorations" className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Pet Decorations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {petDecorationItems.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onPurchase={openPurchaseModal}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <PurchaseModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPurchase={handlePurchase}
        userTokens={tokens}
      />
    </div>
  );
}

function TokenDisplay({ tokens }: { tokens: number }) {
  return (
    <div className="bg-primary/10 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-primary rounded-full p-2">
          <Coins className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-lg font-medium">Your Contribution Tokens</h2>
          <p className="text-muted-foreground">
            Use tokens to redeem marketplace items
          </p>
        </div>
      </div>
      <div className="text-3xl font-bold">{tokens}</div>
    </div>
  );
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

function ProductCard({
  product,
  onPurchase,
}: {
  product: Product;
  onPurchase: (product: Product) => void;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-1">
          <Coins className="h-4 w-4 text-primary" />
          <span className="font-medium">{product.price}</span>
        </div>
        <Button onClick={() => onPurchase(product)}>Redeem</Button>
      </CardFooter>
    </Card>
  );
}

function PurchaseModal({
  product,
  isOpen,
  onClose,
  onPurchase,
  userTokens,
}: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => void;
  userTokens: number;
}) {
  if (!product) return null;

  const canPurchase = userTokens >= product.price;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Purchase</DialogTitle>
          <DialogDescription>
            You are about to redeem the following item with your contribution
            tokens.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-md overflow-hidden bg-muted">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Coins className="h-4 w-4 text-primary" />
                <span>{product.price} tokens</span>
              </div>
            </div>
          </div>

          <div className="bg-muted p-3 rounded-md">
            <div className="flex justify-between items-center">
              <span>Your tokens:</span>
              <span>{userTokens}</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span>Cost:</span>
              <span>-{product.price}</span>
            </div>
            <div className="border-t border-border mt-2 pt-2 flex justify-between items-center font-medium">
              <span>Remaining:</span>
              <span className={!canPurchase ? "text-destructive" : ""}>
                {userTokens - product.price}
              </span>
            </div>
          </div>

          {!canPurchase && (
            <div className="flex items-center gap-2 text-destructive">
              <X className="h-4 w-4" />
              <span>You don't have enough tokens for this item</span>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={onPurchase}
            disabled={!canPurchase}
            className="gap-2"
          >
            <Check className="h-4 w-4" />
            Confirm Purchase
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Sample data
const swagItems: Product[] = [
  {
    id: 1,
    name: "Company T-Shirt",
    description: "Comfortable cotton t-shirt with company logo",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Branded Hoodie",
    description: "Stay warm with our premium quality hoodie",
    price: 500,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Coffee Mug",
    description: "Ceramic mug with company logo",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Notebook Set",
    description: "Set of 3 premium notebooks with company branding",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Water Bottle",
    description: "Stainless steel water bottle with company logo",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Laptop Stickers",
    description: "Set of 10 vinyl stickers for your laptop",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=500&auto=format&fit=crop&q=60",
  },
];

const petDecorationItems: Product[] = [
  {
    id: 7,
    name: "Pet Bandana",
    description: "Stylish bandana for your furry friend",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    name: "Pet Bow Tie",
    description: "Elegant bow tie collar attachment",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1605897472359-85e4b94c6a04?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    name: "Pet Costume",
    description: "Cute costume for special occasions",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1535979863199-3c77338429a0?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 10,
    name: "Pet Collar Charm",
    description: "Decorative charm for pet collars",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 11,
    name: "Pet Hat",
    description: "Adorable hat for your pet",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1576473086800-c0f9e1eb5a10?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 12,
    name: "Pet Sweater",
    description: "Warm and stylish sweater for cold days",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=500&auto=format&fit=crop&q=60",
  },
];

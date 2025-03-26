import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Smartphone,
  Car,
  Home,
  Clock,
  ExternalLink,
  ThumbsUp,
} from "lucide-react"

export default function EarningOpportunities() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Income Opportunities</CardTitle>
          <CardDescription>Tools and resources to help you increase your income</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="gig-economy">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="gig-economy">
                <Smartphone className="mr-2 h-4 w-4" />
                Gig Economy
              </TabsTrigger>
              <TabsTrigger value="skills">
                <GraduationCap className="mr-2 h-4 w-4" />
                Skills Development
              </TabsTrigger>
              <TabsTrigger value="part-time">
                <Clock className="mr-2 h-4 w-4" />
                Part-Time Work
              </TabsTrigger>
              <TabsTrigger value="entrepreneurship">
                <Briefcase className="mr-2 h-4 w-4" />
                Entrepreneurship
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gig-economy" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Ride Sharing</CardTitle>
                      <Car className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Flexible hours, use your own vehicle</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$15-25/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time commitment:</span>
                        <span className="font-medium">Flexible</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Requirements:</span>
                        <span className="font-medium">Car, license, insurance</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Food Delivery</CardTitle>
                      <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Deliver meals in your local area</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$12-20/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time commitment:</span>
                        <span className="font-medium">Flexible</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Requirements:</span>
                        <span className="font-medium">Vehicle or bike</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Freelance Tasks</CardTitle>
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Complete small tasks in your area</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$10-30/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time commitment:</span>
                        <span className="font-medium">Task-based</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Requirements:</span>
                        <span className="font-medium">Smartphone, basic tools</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Digital Skills</CardTitle>
                      <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Learn in-demand tech skills</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$20-50/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time to proficiency:</span>
                        <span className="font-medium">3-6 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment:</span>
                        <span className="font-medium">$0-500</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Free Courses
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Trade Skills</CardTitle>
                      <Home className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Learn practical trade skills</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$25-40/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time to proficiency:</span>
                        <span className="font-medium">6-12 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment:</span>
                        <span className="font-medium">$200-1000</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Training Programs
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Language Skills</CardTitle>
                      <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Translation and teaching opportunities</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$15-30/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time to proficiency:</span>
                        <span className="font-medium">6-18 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investment:</span>
                        <span className="font-medium">$0-300</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Language Resources
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="part-time" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Weekend Retail</CardTitle>
                      <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Part-time retail positions</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$12-15/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time commitment:</span>
                        <span className="font-medium">10-20 hours/week</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Benefits:</span>
                        <span className="font-medium">Employee discounts</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Find Openings
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Virtual Assistant</CardTitle>
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Remote administrative support</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$15-25/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time commitment:</span>
                        <span className="font-medium">Flexible, 5-20 hours/week</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Requirements:</span>
                        <span className="font-medium">Computer, internet</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Find Opportunities
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Tutoring</CardTitle>
                      <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Share your knowledge</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$20-40/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time commitment:</span>
                        <span className="font-medium">5-15 hours/week</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Requirements:</span>
                        <span className="font-medium">Subject expertise</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Tutoring Platforms
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="entrepreneurship" className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Online Store</CardTitle>
                      <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Sell products online</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$500-5000/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time to profitability:</span>
                        <span className="font-medium">3-12 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Initial investment:</span>
                        <span className="font-medium">$200-2000</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      E-commerce Guide
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Content Creation</CardTitle>
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Monetize your expertise</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$100-10000/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time to profitability:</span>
                        <span className="font-medium">6-18 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Initial investment:</span>
                        <span className="font-medium">$100-1000</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Creator Resources
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Service Business</CardTitle>
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <CardDescription>Offer services in your community</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Potential earnings:</span>
                        <span className="font-medium">$1000-5000/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time to profitability:</span>
                        <span className="font-medium">1-6 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Initial investment:</span>
                        <span className="font-medium">$100-2000</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Business Startup Guide
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Success Stories</CardTitle>
          <CardDescription>Real examples of people who improved their financial situation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Maria's Story</CardTitle>
                <CardDescription>Paid off $12,000 in 18 months</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  "I started a weekend food delivery service that brought in an extra $600/month. This allowed me to
                  make larger loan payments and build an emergency fund at the same time."
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
                <Button variant="outline" size="sm">
                  Read Full Story
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">David's Journey</CardTitle>
                <CardDescription>From debt to financial freedom</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  "I learned web development through free online courses and started freelancing on the side. Within a
                  year, I was making more from my side hustle than my day job."
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
                <Button variant="outline" size="sm">
                  Read Full Story
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Sarah's Success</CardTitle>
                <CardDescription>Small business owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  "I started selling handmade products online with just $200 in supplies. Now I run a successful
                  business that allowed me to pay off my loan and buy a house."
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful
                </Button>
                <Button variant="outline" size="sm">
                  Read Full Story
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


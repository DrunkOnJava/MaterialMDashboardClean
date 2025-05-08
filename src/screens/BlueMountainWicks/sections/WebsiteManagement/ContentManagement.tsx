import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";
import { Switch } from "../../../../components/ui/switch";
import { Label } from "../../../../components/ui/label";

const ContentManagement = () => {
  return (
    <Card className="shadow-light-theme-shadow-medium">
      <CardHeader className="border-b border-[#111c2d1a] pb-2">
        <CardTitle className="text-lg font-normal">Website Content Management</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="home">
          <TabsList className="mb-6">
            <TabsTrigger value="home" className="px-4">Home Page</TabsTrigger>
            <TabsTrigger value="products" className="px-4">Products</TabsTrigger>
            <TabsTrigger value="about" className="px-4">About Page</TabsTrigger>
            <TabsTrigger value="settings" className="px-4">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-4">Hero Section</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="hero-title">Hero Title</Label>
                      <Input id="hero-title" defaultValue="Handcrafted Luxury Candles" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="hero-description">Hero Description</Label>
                      <Textarea 
                        id="hero-description" 
                        rows={3}
                        defaultValue="Transform your space with our premium soy wax candles, carefully crafted with natural essential oils and sustainable materials."
                        className="mt-1" 
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="hero-active" defaultChecked />
                      <Label htmlFor="hero-active">Display Hero Section</Label>
                    </div>
                  </div>
                  <div>
                    <Label>Hero Image</Label>
                    <div className="mt-1 border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center bg-surfaceslightgray-10">
                      <div className="h-48 w-full bg-gray-200 rounded-md mb-4 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1603006939302-231f5b8b671d?auto=format&fit=crop&q=80&w=800"
                          alt="Hero Preview"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <Button variant="outline" size="sm">Change Image</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-4">Featured Products Section</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="featured-title">Section Title</Label>
                    <Input id="featured-title" defaultValue="Bestselling Candles" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="featured-description">Section Description</Label>
                    <Textarea 
                      id="featured-description" 
                      rows={2}
                      defaultValue="Our customers' favorites, made with premium soy wax and natural essential oils for a clean, long-lasting burn."
                      className="mt-1" 
                    />
                  </div>
                  <div>
                    <Label>Featured Products</Label>
                    <div className="mt-2 border rounded-md divide-y">
                      {[1, 2, 3, 4].map((id) => (
                        <div key={id} className="p-3 flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 bg-gray-200 rounded-md overflow-hidden">
                              <img 
                                src={`https://images.unsplash.com/photo-16030069393${30+id}2-231f5b8b671d?auto=format&fit=crop&q=80&w=100`}
                                alt="Product"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">Mountain Pine Candle</div>
                              <div className="text-sm text-blackblack-60">$24.99</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Button variant="ghost" size="sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-actionwarning">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Button variant="outline" size="sm">Add Product</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="products">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-medium">Featured Collections</h3>
                <Button variant="outline" size="sm">Add Collection</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Signature Collection', 'Seasonal Collection', 'Gift Sets'].map((name, index) => (
                  <div key={index} className="border rounded-md overflow-hidden">
                    <div className="h-48 bg-gray-200 relative">
                      <img 
                        src={`https://images.unsplash.com/photo-${1607602878511 + index * 100}-7cd38b48e99e?auto=format&fit=crop&q=80&w=600`}
                        alt={name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blackblack-100/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-0 w-full text-center text-white">
                        <h3 className="text-xl font-bold">{name}</h3>
                      </div>
                    </div>
                    <div className="p-3 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Switch id={`collection-${index}`} defaultChecked />
                        <Label htmlFor={`collection-${index}`}>Active</Label>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="about">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-4">About Page Content</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="about-title">Page Title</Label>
                    <Input id="about-title" defaultValue="Our Story" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="about-intro">Introduction</Label>
                    <Textarea 
                      id="about-intro" 
                      rows={4}
                      defaultValue="Blue Mountain Wicks was founded in 2020 with a passion for creating handcrafted candles that transform spaces and enhance well-being. Our journey began in a small mountain cabin, where our founder experimented with different wax blends, fragrances, and wicks to create the perfect candle."
                      className="mt-1" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="about-mission">Our Mission</Label>
                    <Textarea 
                      id="about-mission" 
                      rows={4}
                      defaultValue="At Blue Mountain Wicks, our mission is to create high-quality, sustainable candles that bring comfort and joy to your home. We believe in the power of scent to transform spaces and elevate moods. Each candle is carefully crafted by hand in small batches, ensuring quality and attention to detail."
                      className="mt-1" 
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-4">Sustainability Section</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="sustainability-title">Section Title</Label>
                    <Input id="sustainability-title" defaultValue="Our Commitment to Sustainability" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="sustainability-content">Content</Label>
                    <Textarea 
                      id="sustainability-content" 
                      rows={4}
                      defaultValue="We are committed to sustainable practices and minimizing our environmental impact. We use 100% soy wax, which is renewable, biodegradable, and burns cleaner than paraffin wax. All our packaging is made from recycled materials and is fully recyclable or reusable."
                      className="mt-1" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-medium mb-4">Website Settings</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="site-title">Website Title</Label>
                      <Input id="site-title" defaultValue="Blue Mountain Wicks | Handcrafted Luxury Candles" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="site-description">Meta Description</Label>
                      <Input id="site-description" defaultValue="Discover handcrafted luxury candles from Blue Mountain Wicks. Premium soy wax candles made with natural essential oils." className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Analytics & Tracking</Label>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <div className="font-medium">Google Analytics</div>
                        <div className="text-sm text-blackblack-60">Track website traffic and user behavior</div>
                      </div>
                      <Switch id="ga-tracking" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <div className="font-medium">Facebook Pixel</div>
                        <div className="text-sm text-blackblack-60">Track conversions from Facebook ads</div>
                      </div>
                      <Switch id="fb-pixel" defaultChecked />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>SEO Settings</Label>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <div className="font-medium">Generate Sitemap</div>
                        <div className="text-sm text-blackblack-60">Automatically create and update sitemap.xml</div>
                      </div>
                      <Switch id="sitemap" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <div className="font-medium">Schema Markup</div>
                        <div className="text-sm text-blackblack-60">Add structured data for better search results</div>
                      </div>
                      <Switch id="schema" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Settings</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ContentManagement;
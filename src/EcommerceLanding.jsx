import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ShoppingCart,
  Heart,
  Search,
  ArrowRight,
  Star,
  Mail
} from 'lucide-react';

const EcommerceLanding = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      rating: 4.8,
      image: "/api/placeholder/400/400"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$199",
      rating: 4.6,
      image: "/api/placeholder/400/400"
    },
    {
      id: 3,
      name: "Portable Speaker",
      price: "$149",
      rating: 4.7,
      image: "/api/placeholder/400/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">TechStore</h1>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg flex-1">
              <Search className="w-5 h-5 text-gray-500" />
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="border-0 bg-transparent focus:outline-none"
              />
            </div>
            <Button variant="ghost">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">New Collection</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the Latest Tech Innovations
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Explore our curated selection of premium gadgets and accessories.
            </p>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <Mail className="w-12 h-12 mx-auto mb-4 text-gray-600" />
            <h3 className="text-2xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Stay updated with our latest products and exclusive offers.
            </p>
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">TechStore</h4>
              <p className="text-sm">Your one-stop shop for premium tech products.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Shop</h5>
              <ul className="space-y-2 text-sm">
                <li>All Products</li>
                <li>Featured</li>
                <li>New Arrivals</li>
                <li>Deals</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Shipping Info</li>
                <li>Returns</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-sm">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceLanding;
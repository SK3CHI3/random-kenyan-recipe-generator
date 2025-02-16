import React from 'react'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">African Recipe Generator</h3>
            <p className="text-sm">Discover and share authentic African recipes from across the continent.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Home</a></li>
              <li><a href="#" className="text-sm hover:underline">About Us</a></li>
              <li><a href="#" className="text-sm hover:underline">All Recipes</a></li>
              <li><a href="#" className="text-sm hover:underline">Submit a Recipe</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-200"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-200"><Twitter size={20} /></a>
              <a href="#" className="hover:text-orange-200"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-200"><Mail size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-2">Stay updated with our latest recipes!</p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none bg-white text-gray-800"
              />
              <Button type="submit" className="rounded-l-none bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-orange-400 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} African Recipe Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}



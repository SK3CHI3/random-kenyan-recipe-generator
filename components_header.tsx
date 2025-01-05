"use client"

import * as React from "react"
import { Moon, Sun, Search } from 'lucide-react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"

export function Header({ onSearch }: { onSearch: (query: string) => void }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isSearchFocused, setIsSearchFocused] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-2 flex justify-center">
          <div className="flex items-center justify-between w-full max-w-4xl">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-black dark:text-white">Kenyan Recipe Generator</h1>
              <p className="text-sm text-black/70 dark:text-white/70">Discover delicious Kenyan cuisine</p>
            </div>
            <div className="flex items-center space-x-4">
              <motion.form 
                onSubmit={handleSearch}
                initial={{ width: "32px" }}
                animate={{ width: isSearchFocused ? "200px" : "32px" }}
                transition={{ duration: 0.3 }}
              >
                <Input
                  type="search"
                  placeholder={isSearchFocused ? "Search recipes..." : ""}
                  className="w-full bg-transparent border-none focus:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </motion.form>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-black dark:text-white"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}


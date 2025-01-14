"use client"

import * as React from "react"
import { Moon, Sun, Search } from 'lucide-react'
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { Logo } from "./Logo"

export function Header({ onSearch }: { onSearch: (query: string) => void }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const { scrollY } = useScroll()
  const headerHeight = useTransform(scrollY, [0, 100], [80, 60])
  const headerPadding = useTransform(scrollY, [0, 100], [20, 10])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <motion.header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-2xl bg-earthy/80 backdrop-blur-lg border border-spice/20 shadow-lg"
      style={{ height: headerHeight, padding: headerPadding }}
    >
      <div className="container mx-auto h-full flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <motion.h1 
            className="text-2xl font-bold text-spice"
            style={{ fontSize: useTransform(scrollY, [0, 100], [24, 20]) }}
          >
            African Recipe Generator
          </motion.h1>
        </div>

        <div className="flex items-center space-x-2">
          <motion.form 
            onSubmit={handleSearch}
            animate={{ width: isSearchOpen ? 200 : 32 }}
            transition={{ duration: 0.3 }}
          >
            <Input
              type="search"
              placeholder={isSearchOpen ? "Search recipes..." : ""}
              className="w-full bg-transparent border-none focus:ring-0 placeholder-muted-foreground"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => !searchQuery && setIsSearchOpen(false)}
            />
          </motion.form>
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
          </Button>
          {mounted && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  )
}


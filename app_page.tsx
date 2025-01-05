"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/header'
import { RecipeCard } from '@/components/RecipeCard'
import { Button } from "@/components/ui/button"

// Mock data for demonstration
const mockRecipes = [
  {
    id: 1,
    name: "Nyama Choma",
    image: "/placeholder.svg?height=300&width=400",
    prepTime: 45,
    difficulty: 'Medium' as const,
    ingredients: ["2 lbs goat meat", "2 tbsp vegetable oil", "Salt to taste", "2 lemons"],
    instructions: [
      "Cut the meat into bite-sized pieces",
      "Marinate with oil, salt, and lemon juice for 30 minutes",
      "Grill over high heat until cooked through",
      "Serve hot with ugali and kachumbari"
    ],
  },
  {
    id: 2,
    name: "Ugali",
    image: "/placeholder.svg?height=300&width=400",
    prepTime: 20,
    difficulty: 'Easy' as const,
    ingredients: ["2 cups maize flour", "2 cups water", "Salt to taste"],
    instructions: [
      "Boil water in a pot",
      "Gradually add maize flour while stirring",
      "Keep stirring until it forms a thick paste",
      "Cook for 5 minutes, then serve"
    ],
  },
  {
    id: 3,
    name: "Sukuma Wiki",
    image: "/placeholder.svg?height=300&width=400",
    prepTime: 30,
    difficulty: 'Easy' as const,
    ingredients: ["1 bunch collard greens", "1 onion", "2 tomatoes", "2 tbsp oil", "Salt to taste"],
    instructions: [
      "Chop collard greens, onion, and tomatoes",
      "Heat oil in a pan and sauté onions",
      "Add tomatoes and cook until soft",
      "Add collard greens and cook until tender",
      "Season with salt and serve"
    ],
  },
]

export default function Home() {
  const [recipes, setRecipes] = useState(mockRecipes)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleRecipeClick = (id: number) => {
    const recipe = recipes.find(r => r.id === id)
    setSelectedRecipe(recipe)
  }

  const handleSearch = (query: string) => {
    const filteredRecipes = mockRecipes.filter(recipe => 
      recipe.name.toLowerCase().includes(query.toLowerCase())
    )
    setRecipes(filteredRecipes)
  }

  const handleGenerateRecipe = () => {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]
    setSelectedRecipe(randomRecipe)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 dark:from-green-900 dark:to-yellow-900">
      <Header onSearch={handleSearch} />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Button onClick={handleGenerateRecipe} size="lg">
            Generate Random Recipe
          </Button>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedRecipe ? (
            <motion.div
              key={selectedRecipe.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">Selected Recipe</h2>
              <RecipeCard
                name={selectedRecipe.name}
                image={selectedRecipe.image}
                prepTime={selectedRecipe.prepTime}
                difficulty={selectedRecipe.difficulty}
                onClick={() => {}}
              />
              <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-300">Ingredients</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-300">Instructions</h3>
                <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-300">Featured Recipes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                    prepTime={recipe.prepTime}
                    difficulty={recipe.difficulty}
                    onClick={() => handleRecipeClick(recipe.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <motion.footer
        className="bg-green-800 dark:bg-green-950 text-white p-4 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="container mx-auto text-center">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-green-800 dark:hover:bg-green-300 dark:hover:text-green-950">
            Add Your Recipe
          </Button>
        </div>
      </motion.footer>
    </div>
  )
}


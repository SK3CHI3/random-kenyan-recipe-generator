"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/Footer'
import { RecipeCard } from '@/components/RecipeCard'
import { Button } from "@/components/ui/button"
import { recipes, Recipe } from '@/data/recipes'
import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [featuredRecipeIndex, setFeaturedRecipeIndex] = useState(0)
  const featuredRecipeRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setLoading(false), 1000) // Simulate loading
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const scrollFeaturedRecipe = async () => {
      if (filteredRecipes.length > 0) {
        await controls.start({ opacity: 0, y: -50, transition: { duration: 1 } })
        setFeaturedRecipeIndex((prevIndex) => (prevIndex + 1) % filteredRecipes.length)
        await controls.start({ opacity: 1, y: 0, transition: { duration: 1 } })
      }
    }

    const interval = setInterval(scrollFeaturedRecipe, 7000) // Change featured recipe every 7 seconds
    return () => clearInterval(interval)
  }, [controls, filteredRecipes])

  const handleRecipeClick = (id: number) => {
    const recipe = recipes.find(r => r.id === id) as Recipe
    setSelectedRecipe(recipe)
  }

  const handleSearch = (query: string) => {
    const filtered = recipes.filter(recipe => 
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase())) ||
      recipe.instructions.some(instruction => instruction.toLowerCase().includes(query.toLowerCase()))
    )
    setFilteredRecipes(filtered)
    if (filtered.length === 0) {
      setFeaturedRecipeIndex(0) // Reset featured recipe index if no results
    }
  }

  const handleGenerateRecipe = () => {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]
    setSelectedRecipe(randomRecipe)
  }

  const handleBackToList = () => {
    setSelectedRecipe(null)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header onSearch={handleSearch} />
      <main className="container mx-auto px-4 pt-32 pb-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-spice">
            
          </h2>
          <Button onClick={handleGenerateRecipe} size="lg" className="bg-earthy text-white hover:bg-earthy/80">
            Generate Random Recipe
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {selectedRecipe ? (
            <motion.div
              key={selectedRecipe.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 90 }}
              className="mb-8"
            >
              <Button onClick={handleBackToList} className="mb-4 bg-spice text-white hover:bg-spice/80">
                Back to Recipes
              </Button>
              <h2 className="text-2xl font-semibold mb-4 text-spice">Selected Recipe</h2>
              <RecipeCard
                name={selectedRecipe.name}
                image={selectedRecipe.image}
                prepTime={selectedRecipe.prepTime}
                difficulty={selectedRecipe.difficulty}
                description={selectedRecipe.description}
                rating={selectedRecipe.rating}
                ratingCount={selectedRecipe.ratingCount}
                onClick={() => {}}
              />
              <div className="mt-4 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2 text-spice">Ingredients</h3>
                <ul className="list-disc list-inside mb-4 text-foreground">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2 text-spice">Instructions</h3>
                <ol className="list-decimal list-inside text-foreground">
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
              transition={{ duration: 50, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-spice">Featured Recipe</h2>
              {loading ? (
                <Skeleton className="w-full h-64 rounded-lg" />
              ) : filteredRecipes.length > 0 ? (
                <motion.div 
                  ref={featuredRecipeRef}
                  animate={controls}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                >
                  <RecipeCard
                    key={filteredRecipes[featuredRecipeIndex].id}
                    name={filteredRecipes[featuredRecipeIndex].name}
                    image={filteredRecipes[featuredRecipeIndex].image}
                    prepTime={filteredRecipes[featuredRecipeIndex].prepTime}
                    difficulty={filteredRecipes[featuredRecipeIndex].difficulty}
                    description={filteredRecipes[featuredRecipeIndex].description}
                    rating={filteredRecipes[featuredRecipeIndex].rating}
                    ratingCount={filteredRecipes[featuredRecipeIndex].ratingCount}
                    onClick={() => handleRecipeClick(filteredRecipes[featuredRecipeIndex].id)}
                  />
                  <div className="flex items-center">
                    <p className="text-lg text-foreground">{filteredRecipes[featuredRecipeIndex].description}</p>
                  </div>
                </motion.div>
              ) : (
                <p className="text-lg text-foreground">No recipes found. Try a different search term.</p>
              )}
              <h2 className="text-2xl font-semibold mb-4 text-spice">All Recipes</h2>
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, index) => (
                    <Skeleton key={index} className="w-full h-64 rounded-lg" />
                  ))}
                </div>
              ) : filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRecipes.map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      name={recipe.name}
                      image={recipe.image}
                      prepTime={recipe.prepTime}
                      difficulty={recipe.difficulty}
                      description={recipe.description}
                      rating={recipe.rating}
                      ratingCount={recipe.ratingCount}
                      onClick={() => handleRecipeClick(recipe.id)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-lg text-foreground">No recipes found. Try a different search term.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>Note: The images used in this application are placeholders. In a real-world scenario, proper licensing and attribution would be required for recipe images and content.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}


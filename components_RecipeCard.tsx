"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Utensils } from 'lucide-react'

interface RecipeCardProps {
  name: string
  image: string
  prepTime: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  onClick: () => void
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  name,
  image,
  prepTime,
  difficulty,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="w-full max-w-sm mx-auto overflow-hidden cursor-pointer bg-white dark:bg-gray-800" onClick={onClick}>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-1"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Utensils } from 'lucide-react'

interface RecipeCardProps {
  name: string
  image: string
  prepTime: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  onClick: () => void
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  name,
  image,
  prepTime,
  difficulty,
  description,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="w-full max-w-sm mx-auto overflow-hidden cursor-pointer bg-white dark:bg-gray-800" onClick={onClick}>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-green-800 dark:text-green-300">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Clock className="w-4 h-4 mr-1" />
              <span>{prepTime} mins</span>
            </div>
            <Badge variant={difficulty === 'Easy' ? 'secondary' : difficulty === 'Medium' ? 'default' : 'destructive'}>
              {difficulty}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full text-green-800 dark:text-green-300">
            <Utensils className="w-4 h-4 mr-2" />
            View Recipe
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

10"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-green-800 dark:text-green-300">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Clock className="w-4 h-4 mr-1" />
              <span>{prepTime} mins</span>
            </div>
            <Badge variant={difficulty === 'Easy' ? 'secondary' : difficulty === 'Medium' ? 'default' : 'destructive'}>
              {difficulty}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full text-green-800 dark:text-green-300">
            <Utensils className="w-4 h-4 mr-2" />
            View Recipe
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


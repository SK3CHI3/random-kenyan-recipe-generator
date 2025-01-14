"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Utensils } from 'lucide-react'
import { StarRating } from './StarRating'

interface RecipeCardProps {
  name: string
  image: string
  prepTime: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  rating: number
  ratingCount: number
  onClick: () => void
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  name,
  image,
  prepTime,
  difficulty,
  description,
  rating,
  ratingCount,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="w-full max-w-sm mx-auto overflow-hidden cursor-pointer bg-white text-gray-800 border border-spice/20 shadow-md" onClick={onClick}>
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
          <CardTitle className="text-xl font-bold text-spice">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <StarRating rating={rating} ratingCount={ratingCount} />
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              <span>{prepTime} mins</span>
            </div>
            <Badge variant={difficulty === 'Easy' ? 'secondary' : difficulty === 'Medium' ? 'default' : 'destructive'}>
              {difficulty}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full text-spice hover:bg-spice hover:text-white border-spice">
            <Utensils className="w-4 h-4 mr-2" />
            View Recipe
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


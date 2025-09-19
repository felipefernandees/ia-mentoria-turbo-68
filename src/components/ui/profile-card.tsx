"use client";

import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  youtubeUrl?: string;
  className?: string;
}

export function ProfileCard({ 
  name, 
  title, 
  description, 
  imageUrl, 
  youtubeUrl,
  className 
}: ProfileCardProps) {
  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Avatar */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-card flex-shrink-0 shadow-glow'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className='w-full h-full'
          >
            <img
              src={imageUrl}
              alt={name}
              className='w-full h-full object-cover'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='470' height='470' viewBox='0 0 470 470'%3E%3Crect width='470' height='470' fill='%23374151'/%3E%3Ccircle cx='235' cy='180' r='60' fill='%23fff'/%3E%3Cpath d='M235 280c-60 0-120 30-120 60v30h240v-30c0-30-60-60-120-60z' fill='%23fff'/%3E%3C/svg%3E";
              }}
            />
          </motion.div>
        </div>

        {/* Card */}
        <div className='bg-background/95 backdrop-blur-sm border border-border rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className='mb-6'>
              <h2 className='text-2xl font-bold text-foreground mb-2'>
                {name}
              </h2>

              <p className='text-sm font-medium text-muted-foreground'>
                {title}
              </p>
            </div>

            <p className='text-foreground text-base leading-relaxed mb-8'>
              {description}
            </p>

            {youtubeUrl && (
              <div className='flex justify-start'>
                <a
                  href={youtubeUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg'
                  aria-label="YouTube"
                >
                  <Youtube className='w-5 h-5 text-white' />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent'>
        {/* Avatar */}
        <div className='w-full aspect-square bg-card rounded-3xl overflow-hidden mb-6 shadow-glow'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className='w-full h-full'
          >
            <img
              src={imageUrl}
              alt={name}
              className='w-full h-full object-cover'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23374151'/%3E%3Ccircle cx='200' cy='150' r='50' fill='%23fff'/%3E%3Cpath d='M200 250c-50 0-100 25-100 50v25h200v-25c0-25-50-50-100-50z' fill='%23fff'/%3E%3C/svg%3E";
              }}
            />
          </motion.div>
        </div>

        {/* Card content */}
        <div className='px-4'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h2 className='text-xl font-bold text-foreground mb-2'>
              {name}
            </h2>
            
            <p className='text-sm font-medium text-muted-foreground mb-4'>
              {title}
            </p>
            
            <p className='text-foreground text-sm leading-relaxed mb-6'>
              {description}
            </p>
            
            {youtubeUrl && (
              <div className='flex justify-center'>
                <a
                  href={youtubeUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg'
                  aria-label="YouTube"
                >
                  <Youtube className='w-5 h-5 text-white' />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
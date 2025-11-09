"use client"

import { motion } from 'framer-motion'
import { TrendingUp, Phone, Target } from 'lucide-react'

interface FloatingStatsProps {
  stats: {
    calls: string
    revenue: string
    satisfaction: string
  }
}

const statCards = [
  {
    key: 'calls',
    icon: Phone,
    color: 'from-blue-500 to-cyan-500',
    delay: 0
  },
  {
    key: 'revenue',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
    delay: 0.2
  },
  {
    key: 'satisfaction',
    icon: Target,
    color: 'from-emerald-500 to-teal-500',
    delay: 0.4
  }
]

const floatingVariant = (delay: number) => ({
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      delay
    }
  }
})

export function FloatingStats({ stats }: FloatingStatsProps) {
  const statValues = [stats.calls, stats.revenue, stats.satisfaction]

  return (
    <div className="grid grid-cols-1 gap-4 mt-8">
      {statCards.map((card, idx) => {
        const Icon = card.icon
        const value = statValues[idx]
        
        return (
          <motion.div
            key={card.key}
            className="relative"
            variants={floatingVariant(card.delay)}
            animate="animate"
          >
            {/* Glow effect */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${card.color} rounded-xl filter blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} aria-hidden="true" />
            
            {/* Card */}
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/30 rounded-xl p-3 group hover:border-slate-600/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    {value}
                  </p>
                  <p className="text-xs text-slate-400 capitalize">
                    {card.key === 'calls' && 'Active Today'}
                    {card.key === 'revenue' && 'This Month'}
                    {card.key === 'satisfaction' && 'Rating'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

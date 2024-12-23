import { useEffect, useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'

interface ScrollCarouselProps {
  terms: string[]
  baseVelocity: number
}

export function ScrollCarousel({ terms, baseVelocity = 3 }: ScrollCarouselProps) {
  const baseX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000)
    
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const currentX = baseX.get()
      
      if (currentX <= -containerWidth / 2) {
        baseX.set(0)
      }
      
      baseX.set(currentX - moveBy)
    }
  })

  return (
    <div className="overflow-hidden whitespace-nowrap" ref={containerRef}>
      <motion.div
        style={{ x: baseX }}
        className="inline-flex gap-4"
      >
        {[...terms, ...terms].map((term, i) => (
          <span 
            key={i} 
            className="inline-block text-sm font-light opacity-75"
          >
            {term}
          </span>
        ))}
      </motion.div>
    </div>
  )
}


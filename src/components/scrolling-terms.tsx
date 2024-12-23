import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

interface ScrollingTermsProps {
  terms: string[];
}

export function ScrollingTerms({ terms }: ScrollingTermsProps) {
  const baseVelocity = -1;
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    const moveBy = baseVelocity * (delta / 1000);

    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const currentX = baseX.get();

      if (currentX <= -containerWidth) {
        baseX.set(0);
      } else {
        baseX.set(currentX + moveBy);
      }
    }
  });

  return (
    <div
      className="overflow-hidden whitespace-nowrap mask-gradient"
      ref={containerRef}
    >
      <motion.div style={{ x: baseX }} className="inline-flex gap-4">
        {terms.map((term, i) => (
          <span
            key={i}
            className="text-sm py-1 px-3 bg-gray-100 rounded-full whitespace-nowrap"
          >
            {term}
          </span>
        ))}
        {/* Duplicate terms for seamless loop */}
        {terms.map((term, i) => (
          <span
            key={`duplicate-${i}`}
            className="text-sm py-1 px-3 bg-gray-100 rounded-full whitespace-nowrap"
          >
            {term}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

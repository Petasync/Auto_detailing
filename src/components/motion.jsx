import { motion, useReducedMotion } from 'framer-motion'

export const fadeUp = (reduce) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 24 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
})

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
}

export function MotionSection({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.section>
  )
}

export function Rise({ children, className = '', as = 'div', ...rest }) {
  const reduce = useReducedMotion()
  const Comp = motion[as] || motion.div
  return (
    <Comp variants={fadeUp(reduce)} className={className} {...rest}>
      {children}
    </Comp>
  )
}

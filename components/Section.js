import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function Section({ children, setW, me }) {
  const { ref, inView } = useInView({
    threshold: 0.2
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'string',
          duration: 1,
          bounce: 0.3
        }
      })
      setW(me)
    }
    if (!inView) {
      animation.start({ x: '-100vw', duration: 0.1, bounce: 0 })
    }
  }, [inView, animation, setW, me])

  return (
    <div className="section-container">
      <motion.div ref={ref}>
        <motion.div animate={animation}>{children}</motion.div>
      </motion.div>
    </div>
  )
}

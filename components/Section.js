import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import styled from '@emotion/styled'

const Sec = styled.section`
  height: 100vh;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  margin: 0 auto;
`

export default function Section({ children }) {
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
    }
    if (!inView) {
      animation.start({ x: '-100vw', duration: 0.1, bounce: 0 })
    }
  }, [inView, animation])

  return (
    <Sec>
      <motion.div ref={ref}>
        <motion.div
          animate={animation}
          style={{
            display: 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'center',
            'align-items': 'center'
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Sec>
  )
}

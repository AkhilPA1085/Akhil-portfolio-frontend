'use client';
import {motion,AnimatePresence, useAnimation} from "framer-motion"
import { useEffect } from "react";

const MotionAnimation = ({children,type,animate}) => {
    const controls = useAnimation();

    useEffect(()=>{
        controls.start({
            opacity:1,
            transition:{duration:1}
        })
    },[])

  return (
    <AnimatePresence>
        {animate ? (<motion.div
      style={{ opacity: 0 }}
      animate={controls}
    >{children}</motion.div>):(
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileInView={{
            y: 50,
            rotate: 0,
            opacity: 1,
            transition: {
              type: type,
              damping: 30,
              stiffness: 100,
              duration: 0.8,
            },
          }}
          viewport={{ once: true, threshold: 0.8 }}
        >{children}</motion.div>
    )}
    </AnimatePresence>
  )
}

export default MotionAnimation
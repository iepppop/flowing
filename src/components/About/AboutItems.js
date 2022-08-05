import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styled from 'styled-components';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};


const AboutItems = ({ id }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
      <Container>
          <motion.h1>
            {id}
          </motion.h1>
      </Container>
  )
}
export default AboutItems;

const Container = styled(motion.div)`
  height: 100vh;
  width:100%;
  position:relative;

  h1{
    position:sticky;
    top: 220px;
    right:0; 
  }
`
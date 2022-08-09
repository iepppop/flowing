import styled from 'styled-components';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import AboutTitle from './AboutTitle'

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Container>
      <AboutTitle />
    </Container>
  )
}
export default About;

const Container = styled.div`
    display:flex;
    width:calc(100vw - 20vw);
    margin:0 auto;
    position:relative;
`


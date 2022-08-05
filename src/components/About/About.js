import styled from 'styled-components';
import AboutItems from './AboutItems';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Container>
      <HeaderLine/>
      <Wrap>
        <TitleWrap>
          <h1>about</h1>
          <Line />
        </TitleWrap>     
        <StickyWrap>
          <AboutItems id="super human"/>
          <AboutItems id="7th senses"/>
        </StickyWrap>
        </Wrap>   
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

const HeaderLine = styled.div`
  height:10vh;
  background:#eee;
`

const Wrap = styled.div`
  width:100%;
`

const TitleWrap = styled.div`
  display:flex;
  position:fixed;
  top:200px;
  width:80vw;
  align-items:center;
  overflow:hidden;

  h1{
    width:20%;
    font-size:100px;
    font-weight:500;
    margin:0 20px 0 0;
  }

  h2{
    margin:0 0 0 40px;
    font-size:100px;
    font-weight:400;
  }
`
const Line = styled.div`
  width:50%;
  height:2px;
  background:black;
`

const StickyWrap = styled.div`
  width:100%;
`

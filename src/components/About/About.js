import styled from 'styled-components';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

const About = () => {
  return (
    <Container>
      <ImgWrap>
      </ImgWrap>
      <TextWrap>
        <ul>
          <li>I like natural traces.</li>
          <li>Clothes,</li>
          <li>furniture,</li>
          <li>and lighting The time,</li>
          <li>design.</li>
        </ul>
      </TextWrap>
    </Container>
  )
}
export default About;

const Container = styled.div`
  display:flex;
  width:calc(100vw - 20vw);
  margin:0 auto;
  position:relative;
  height:100vh;
  align-items: center;
`
const ImgWrap = styled.div`
  width:50%;
  height:100%;
`

const TextWrap = styled.div`
  width:50%;
  height:100%;
  position:relative;

  ul{
    position:sticky;
    top:50%;
    transform:translate(0,-50%);
  }

  li{
    font-size: clamp(15px, 10vw, 4rem);
    line-height:140%;
    font-weight:500;
  }
`



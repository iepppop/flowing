import Concept from "./Concept";
import { datas } from './data';
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { throttle } from "throttle-debounce-ts";
import {
  motion,
  MotionProps,
  useTransform,
  useScroll
} from 'framer-motion';
import Decorating from "./Decorating";

const useElementViewportPosition = (ref) => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}

const copyMotion = {
  hidden: {
    y: -120,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.6
    }
  }
};

const slideAnimation = {
  variants: {
    full: { backgroundColor: "#663399" },
    partial: { backgroundColor: "#808080" }
  },
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: true }
};

const Square = () => {
  const ref = useRef(null);
  const carouselRef = useRef(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const yValue = useTransform(scrollYProgress, [0, 1], [0, 100 * 5]);
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          ref.current.offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Contain>
      <Concept />
      {/* <Oriented /> */}
      <ScrollBox ref={ref}>
   
        <ScrollContainer>
          <StickyWrapper>
          <Title>
          <span />
          <motion.h1
            variants={copyMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}>
            we are oriented ,
          </motion.h1>
        </Title>
        <FlowBox>
          <FlowWrap>
            <Flow>
              <span>Light procedure</span>
              <span>Super Normal</span>
              <span>Tactical Luxury</span>
              <span>We make Sure</span>
              <span>Audience Editor</span>
              <span>Light procedure</span>
              <span>Super Normal</span>
              <span>Tactical Luxury</span>
              <span>We make Sure</span>
              <span>Audience Editor</span>
            </Flow>
          </FlowWrap>
        </FlowBox>
            <ScrollWrap ref={carouselRef} style={{ x }}>
              {datas.map((data, i) => {
                return (
                  <ImageBox
                    key={i}
                    {...slideAnimation}>
                    <img src={data.img} alt={i} />
                  </ImageBox>
                )
              })}
            </ScrollWrap>
          </StickyWrapper>
        </ScrollContainer>
      </ScrollBox>
      <Decorating />
    </Contain>
  )
}
export default Square;

const Contain = styled.div`
    margin:0 auto;
    background:#fff;
    border-radius:100px;
`

const ScrollBox = styled.div`
  width: calc(100vw - 20vw); 
  margin:120px auto 0 auto;
  position:relative;
`

const ScrollContainer = styled.div`
  width:100%;
  height: 400vh;
`

const ScrollWrap = styled(motion.div)`
    display: flex;
    gap:18px;
`

const ImageBox = styled(motion.div)`
    width:480px;
    img{
        width:100%;
        vertical-align:bottom;
    }
`

const StickyWrapper = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const Title = styled.div`
    display:flex;
    width:100%; 
    align-items: center;

    span{ 
        width:60%;
        height:2px;
        background:#151515;
    }

    h1{
        width:40%;
        text-align:right;
        font-size: clamp(15px, 10vw, 3.4vw);
    }
`
const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`

const FlowBox = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    overflow: hidden;
    margin:0 0 40px 0;
`

const FlowWrap = styled.div`
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    white-space: nowrap;
`


const Flow = styled.div`
    font-size: clamp(15px, 10vw, 3.4vw);
    animation: ${flowing} 30s linear infinite;
    span{
        display:inline-block;
        font-weight:600;
        background:#eee;
        padding:0 20px;
    }
`

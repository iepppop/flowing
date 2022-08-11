import styled, { keyframes } from 'styled-components';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimation
} from "framer-motion";
import AboutFlow from './AboutFlow';

const opacityMotion = {
  hidden: {
    x: -400,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5
    }
  }
};

const About = () => {
  const transition = { duration: 1.0, ease: [0.6, 0.01, 0.3, 0.9] };
  const imgAnimation = useAnimation();

  const handleMouseMove = e => {
    const { clientX, clientY } = e
    const moveX = clientX - window.innerWidth / 2
    const moveY = clientY - window.innerHeight / 2
    const offsetFactor = 15
    imgAnimation.start({
        x: moveX / offsetFactor,
        y: moveY / offsetFactor
    })
    imgAnimation.stop({
      x: 0,
      y: 0
  })
}

  return (
    <>
      <Container>
        <ImgWrap>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}
            >
              <motion.img
               animate={imgAnimation}
               onMouseMove={e => handleMouseMove(e)}
              src="https://f-l-o-w-i-n-g.com/web/product/big/201905/db57b93257acc4815b6703202a5499a7.jpg" alt="s" />
              <h1>natural traces</h1>
            </motion.li>
            <motion.li
              variants={opacityMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              <img src="https://f-l-o-w-i-n-g.com/web/upload/NNEditor/20190501/12_shop1_195929.jpg" alt="s" />
              <h1>clothes</h1>
            </motion.li>
            <motion.li
              variants={opacityMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              <img src="https://f-l-o-w-i-n-g.com/web/upload/NNEditor/20191201/924f16a03826af2719d50ced51a4a01c2_shop1_002939.jpg" alt="s" />
              <h1>furniture</h1>
            </motion.li>
            <motion.li
              variants={opacityMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              <img src="https://f-l-o-w-i-n-g.com/web/upload/NNEditor/20190503/321699L501005_L501005_3_shop1_124909.jpg" alt="s" />
              <h1>design</h1>
            </motion.li>
          </ul>
        </ImgWrap>
        <TextWrap>
          <TextContain>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}>
              <li>I like
                <div> <OneSpan
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ ...transition, delay: 0.4 }} />natural traces
                </div>
              </li>
              <li>
                <TwoSpan
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ ...transition, delay: 0.6 }} />
                Clothes,
              </li><p />
              <li>
                <TwoSpan
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ ...transition, delay: 0.8 }} />furniture,</li>
              <li>and
              <div> 
                <OneSpan
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ ...transition, delay: 1.0 }} />
                lighting The time,
                </div> 
                </li>
              <li><TwoSpan
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ ...transition, delay: 1.2 }} />design.</li>
            </motion.ul>
          </TextContain>
        </TextWrap>
      </Container>
      <AboutFlow />
    </>
  )
}
export default About;

const Container = styled.div`
  display:flex;
  width:calc(100vw - 20vw);
  margin:0 auto;

  @media (max-width: 1200px){
    display:block;
  }
`
const ImgWrap = styled.div`
  width:45%;
  padding:70px 130px 0 0;
  border-right:1px solid #000;

  @media (max-width: 1200px){
    display:none;
  }

  ul{
    padding:130px 0 0 0;
  }

  li{
    img{
      width:100%;
    }
  }

  h1{
    padding:20px 0 40px 0;
    font-size:13px;
  }
`

const TextWrap = styled.div`
  width:55%;
  position:relative;
  @media (max-width: 1200px){
    width:100%;
  }
`

const highlighter = keyframes`
  0%{
    width:0;
  }
  100%{
  }
`

const OneSpan = styled(motion.span)`
  height:50%;
  background:#7be800;
  position:absolute;
  top:25px;
  left:0;
  z-index:-1;
  opacity:0.3; 
  transform:skew(1deg,1deg);
  display:inline-block;
`

const TwoSpan = styled(motion.span)`
  height:50%;
  background:#aaf25a;
  position:absolute;
  top:25px;
  left:0px;
  z-index:-1;
  opacity:0.5; 
  transform:skew(-1deg,-1deg);
`

const TextContain = styled.div`
  position:sticky;
  padding:0 0 0 120px;
  width:100%;
  top:50%;
  transform:translate(0,-50%);

  
  @media (max-width: 1200px){
    padding:0;
    height:80vh;
    position:relative;
    display:flex;
    align-items: center;
    transform:translate(0,0);
  }

  li{
    position:relative;
    font-size: clamp(15px, 3vw, 4rem);
    line-height:140%;
    font-weight:500;
    display:inline-block;

    @media (max-width: 1200px){
      font-size: clamp(1rem, 7vw, 5rem);
    }

    div{
      margin:0 0 0 15px;
      display:inline-block;
      position:relative;
    }

    &:hover ${OneSpan} {
      animation: ${highlighter} 1s forwards;
    }

    &:hover ${TwoSpan} {
      animation: ${highlighter} 1s forwards;
    }
  }
`



import styled, { keyframes } from 'styled-components';
import Balls from "./Balls";
import { motion } from 'framer-motion';
import AboutFlow from './AboutFlow';

const data = [
    {
        img: "https://f-l-o-w-i-n-g.com/web/product/big/201905/db57b93257acc4815b6703202a5499a7.jpg",
        name: "natural traces"
    },
    {
        img: "https://f-l-o-w-i-n-g.com/web/upload/NNEditor/20190501/12_shop1_195929.jpg",
        name: "clothes"
    },
    {
        img: "https://f-l-o-w-i-n-g.com/web/upload/NNEditor/20191201/924f16a03826af2719d50ced51a4a01c2_shop1_002939.jpg",
        name: "clothes"
    },
    {
        img: "https://f-l-o-w-i-n-g.com/web/upload/NNEditor/20190503/321699L501005_L501005_3_shop1_124909.jpg",
        name: "clothes"
    },
]

const Abouts = () => {
    const transition = { duration: 1.0, ease: [0.6, 0.01, 0.3, 0.9] };

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
    return (
        <>
        <Container>
            <ImgContain>
               {data.map((item)=>{
                return (
                    <motion.span
                    variants={opacityMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    <img src={item.img} alt={item.name} />
                    <h1>{item.name}</h1>
                    </motion.span>
                )
               })}

            </ImgContain>
            <TextContain>
                <BallWrap>
                    <Balls />
                </BallWrap>
                <TextWrap>
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
                        <li>
                            <TwoSpan
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ ...transition, delay: 1.2 }} />design.</li>
                    </motion.ul>
                </TextWrap>
            </TextContain>
        </Container>
        <AboutFlow />
        </>
    )
}
export default Abouts;

const Container = styled.div`
    width:100%;
    display:flex;
`

const ImgContain = styled.div`
    height:378vh;
    position:relative;
    display:flex;
    width:40%;
    margin-left:10vw;
    margin-top:20vh;
    flex-direction:column;

    h1{
        font-size:15px;
        margin:30px 0 40px 0;
    }

    img{
        width:100%;
        object-fit: cover;
        padding:0 120px 0 0;
    }

    @media (max-width: 1200px){
        display:none;
      }
`

const ImgWrap = styled.ul`
    height:90vh;
    margin-left:10vw;
    position:relative;
    width:100%;
`

const ImgBox = styled.div`
    padding:80px 100px 0 0;
    width:100%;
    h1{
        font-size:15px;
        margin:20px 0 30px 0;
    }
    img{
        width:100%;
        vertical-align:bottom;
    }
`

const TextContain = styled.div`
    width:50%;
    position:sticky;
    left:50%;
    top:0;
    height:100vh;
    border-left:1px solid #020202;

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

const TextWrap = styled.div`
    position:absolute;
    z-index:99;
    top:0;
    left:0;
    height:100vh;
    display:flex;
    align-items:center;
    width:80%;
    padding:0 0 0 100px;
    
    ul{
        width:100%;
        
        @media (max-width: 1200px){
          width:80vw;
          margin:100px auto 0 auto;
        }
      }
    
      li{
        position:relative;
        font-size: clamp(15px, 3vw, 5rem);
        line-height:160%;
        font-weight:500;
        display:inline-block;
    
        @media (max-width: 1200px){
          font-size: clamp(1rem, 7vw, 4.6rem);
        }

        @media (max-width: 500px){
            font-size: 30px;
          }
    
        div{
          margin:0 0 0 15px;
          display:inline-block;
          position:relative;

          @media (max-width: 1300px){
            margin:0;
          }
        }

        &:hover ${OneSpan} {
            animation: ${highlighter} 1s forwards;
          }
      
          &:hover ${TwoSpan} {
            animation: ${highlighter} 1s forwards;
          }
`

const BallWrap = styled.div`
    width:100%;
    height:100%;
`


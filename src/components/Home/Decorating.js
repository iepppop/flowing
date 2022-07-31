import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const copyMotion = {
    hidden: {
        x: -200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 1.1
        }
    }
};

const borderMotion = {
    hidden: {
        x: "100%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 0.6,
        }
    }
}

const opacityMotion = {
    hidden: {
        opacity: 0.1,
    },
    visible: {
        opacity: 0.7,
        transition: {
            ease: "easeInOut",
            duration: 1.6,
        }
    }
}

const titleMotion = {
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

const Decorating = () => {
    return (
        <Wrap>
            <TitleWrap>
                <motion.h1
                    variants={copyMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >I'm Decorating</motion.h1>
                <motion.span
                    variants={borderMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                />
            </TitleWrap>
            <Sub>
                <motion.h2>
                    Please inquire about all
                    the spaces inside and outside.
                </motion.h2>
            </Sub>
            <BackImg>
            </BackImg>
            <ContactWrap>
                <ContactBox>
                    <CBox>
                        <motion.h1
                        variants={copyMotion}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}>
                            Contact,
                        </motion.h1>
                        <FlowBox>
                            <Flow>
                                <FlowWrap>
                                    <h2>
                                        Design Reguest
                                    </h2>
                                    <h2>
                                        Design Reguest
                                    </h2>
                                    <h2>
                                        Design Reguest
                                    </h2>
                                    <h2>
                                        Design Reguest
                                    </h2>
                                </FlowWrap>
                            </Flow>
                        </FlowBox>
                    </CBox>
                    <ContactExplain>
                        <li>On-Line Register</li>
                        <li>E-mail</li>
                        <li>Address</li>
                    </ContactExplain>
                </ContactBox>
                <SubExplain>
                    <li>2016-Jung-gu, Daegu-0441</li>
                    <Line />
                    <li>scent___@naver.com</li>
                    <Line />
                    <li>700847 1F 120 Dongduk-ro 30-gil, Jung-gu</li>
                    <Line />
                </SubExplain>
            </ContactWrap>
        </Wrap>
    )
}
export default Decorating;

const Wrap = styled.div`
    position:relative;
`

const TitleWrap = styled.div`
    width: calc(100vw - 20vw); 
    margin: 120px auto 0 auto;
    display:flex;
    align-items: center;

    h1{
        width:40%;
        font-size: clamp(15px, 10vw, 3.4vw);
        @media (max-width: 900px) {
            font-size: 8vw;
            width:100%;
           }
    }

    span{
        width:60%;
        height:2px;
        background:#151515;
        @media (max-width: 900px) {
            width:20%;
           }
    }
`

const Sub = styled.div`
    width: calc(100vw - 20vw); 
    margin: 0 auto 120px auto;

    h2{
        padding:30px 0;
        width:800px;
        font-size: clamp(12px, 10vw, 2.4vw);
        opacity:0.4;

        @media (max-width: 900px) {
            font-size: 7vw;
            width:100%;
           }
    }
`

const BackImg = styled.div`
    background:url('https://blog.kakaocdn.net/dn/uQRZJ/btrIxBjXuf6/wpfW8xKwZu5zi6hD17SZg0/img.jpg');
    background-position:center center;
    width:100%;
    height:600px;
    background-attachment: fixed;
`

const ContactWrap = styled.div`
    width: calc(100vw - 20vw); 
    margin: 120px auto 0 auto;
    display:flex;

    @media (max-width: 900px) {
       flex-direction:column;
      }
`

const ContactBox = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    height:580px;

    @media (max-width: 900px) {
        height:auto;
       }
`

const CBox = styled.div`

    h1{
        font-size: clamp(30px, 10vw, 3.6vw);

        @media (max-width: 900px) {
            font-size: 8vw;
           }
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
    max-width: 320px;
    height: 70px;
    overflow: hidden;
    margin:0 0 40px 0;
    background:#eee;
`

const Flow = styled.div`
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    position:absolute;
`

const FlowWrap = styled.div`
    font-size: clamp(15px, 10vw, 3.4vw);
    animation: ${flowing} 10s linear infinite;
    display:flex;
    align-items: center;

    h2{
        font-size: clamp(40px, 10vw, 2.6vw);
        display:inline-block;
        padding:0 20px;
    }
`

const ContactExplain = styled.ul`
    width:50%;

    @media (max-width: 900px) {
       padding:0 0 50px 0;
       width:100%;
       }

    li{
        font-size: clamp(2vw, 10vw, 1.2vw);
        font-weight:700;
        opacity:0.4;

        @media (max-width: 900px) {
            font-size: 4vw;
           }
    }
`

const SubExplain = styled.ul`
    font-size: clamp(30px, 10vw, 2.6vw);
    font-weight:700;
    width:50%;
    display:flex;
    flex-direction:column;

    @media (max-width: 900px) {
        width:100%;
        padding:0 0 120px 0;
       }


    li{
        display:flex;
        align-items: stretch;
    }
`

const Line = styled.div`
    height:8px;
    width:100%;
    background:#151515;
    margin:20px 0;
`
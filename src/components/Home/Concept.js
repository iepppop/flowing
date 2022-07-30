import { useTransform, useScroll, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from 'framer-motion';

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

const twoMotion = {
    hidden: {
        y: -120,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 1.1
        }
    }
};

const fadeVariant = {
    fading: { opacity: 0 },
    faded: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

const Concept = () => {
    const { scrollYProgress } = useScroll();
    const [ffLayer, setFfLayer] = useState(0)
    const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, 1400]);
    const items = ["S", "I", "N", "C", "E", "", 2, 0, 1, 6, "", "~", "", "S", "I", "N", "C", "E", "", 2, 0, 1, 6, "", "~", "",];
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

    return (
        <Contain>
            <motion.h1
                variants={copyMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}>
                Concept shop flowing company.
                <motion.p
                    variants={twoMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}>A quiet stillness prevails.</motion.p>
            </motion.h1>
            <ImgWrap>
                <Img>
                    <Box>
                        <motion.img
                            style={{ scale: scale }}
                            src="https://blog.kakaocdn.net/dn/cRwqWG/btrIuY7p5xK/iFinUgZdIbz5KDSS2n8tv0/img.jpg" alt="about" />
                    </Box>
                    <Circle>
                        {items.map((item, i) => {
                            return (
                                <CircleText key={i}
                                    style={{
                                        transform: `rotate(${i * 14}deg)`,
                                        transformOrigin: "0 100px",
                                    }}
                                >
                                    {item}
                                </CircleText>
                            )
                        })}
                    </Circle>
                </Img>
                <motion.span
                    style={{
                        y: yPosAnim,
                    }}>
                    Flowing is you, me and me who feel the most ideal form is natural,
                    not form, as we talk about the naturalness of my life, or the motion that I
                    live in, as if it were more of a fresher goal in November 2016
                </motion.span>
            </ImgWrap>
        </Contain>
    )
}
export default Concept;

const Contain = styled.div`
    width: calc(100vw - 20vw); 
    margin: 100px auto 0 auto;
    
    h1{
        padding:140px 0;
        font-size: clamp(15px, 10vw, 3.4vw);
    }

    p{

    }
`

const ImgWrap = styled.div`
    width:100%;
    height:700px;
    position:relative;

    span{
        position:absolute;
        top:-140px;
        left:65%;
        width:30%;
    }
`

const Img = styled.div`
    width:60%;
    height:100%;
    position:relative;


`

const Box = styled.div`
    width:100%;
    height:100%;
    overflow: hidden;
    img{ 
    width:100%;
    object-fit:cover;
    height:100%;
    }
`

const rotateText = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`


const Circle = styled.div`
    width:200px;
    height:200px;
    position:absolute;
    z-index:99;
    right:-100px;
    bottom:-100px;
    display:flex;
    aling-items:center;
    animation: ${rotateText} 20s linear infinite;
`


const CircleText = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    left:100px;
`
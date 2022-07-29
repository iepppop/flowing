import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from 'framer-motion';

const Oriented = () => {
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
    return (
        <Contain>
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
        </Contain>
    )
}
export default Oriented;

const Contain = styled.div`
    width: calc(100vw - 20vw); 
    margin: 200px auto 0 auto;
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



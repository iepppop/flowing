import { useEffect } from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { datas } from './data.js'
import { useScroll, motion, useTransform } from 'framer-motion';
import HorizontalScroll from 'react-scroll-horizontal';

const parent = { width: `100%`, height: `900px` }
const words = ["i", "n", "t", "e", "r", "e", "s", "t", "i", "n", "g", ","," ", "s", "t", "o", "r", "y", "f", "u", "l", ","];
const twowords = ["W", "e", " ", "m", "a", "k", "e"," ", "t", "h", "i", "s"," ", "a", "n", "d"," ", "t", "h", "a", "t"];
const gridAnimation = {
    show: {
        transition: { staggerChildren: 0.1 }
    },
    hide: {
        transition: { staggerChildren: 0.1 }
    },
}

const wordAnimation = {
    show: {
        y: [100, 0],
        opacity: [0, 1],
        scale: [0.95, 1],
    },
    hide: {
        y: [0, 100],
        opacity: [1, 0],
        scale: [1, 0.95],
    },
}

const Production = () => {
    return (
        <>
            <WordsWrap 
            variants={gridAnimation}
            animate="show"
            exit="hide"
            >
                {words.map((word) => {
                    return (
                        <motion.span
                        variants={wordAnimation}
                            >
                            {word}
                        </motion.span>
                    )
                })}<p style={{marginBottom:"-25px"}}/>
                      {twowords.map((word) => {
                    return (
                        <motion.span
                        variants={wordAnimation}
                            >
                            {word}
                        </motion.span>
                    )
                })}
            </WordsWrap>
            <Container>
                <StickyWrapper>
                    <HorizontalScroll reverseScroll={true} config={{ damping: 15 }} style={parent}>
                        {datas.map((data, i) => {
                            return (
                                <SlideWrap>
                                    <Slide
                                        key={i}>
                                        <img src={data.img} />
                                    </Slide>
                                    <Nametag>
                                        <h1>
                                            {data.name}
                                        </h1>
                                        <h2>
                                            {data.price} krw
                                        </h2>
                                    </Nametag>
                                </SlideWrap>
                            )
                        })}
                    </HorizontalScroll>
                </StickyWrapper>
            </Container>
        </>
    )
}
export default Production;

const Container = styled.div`
    width:100vw;
    margin:0 auto;
    height:90vh;
    display:flex;
    align-items:center;
    position:relative;
`

const WordsWrap = styled(motion.div)`
    position:absolute;
    display:inline-block;
    top:120px;
    width:calc(100vw - 20vw);
    left:50%;
    transform:translate(-50%,0);
    z-index:1;
    display:flex;
    height:auto;

    span{
        font-size:clamp(12px,10vw,4rem);
        font-weight:600;
        display:flex;
    }
`

const StickyWrapper = styled.ul`
    width:100%;
    height: 560px;
`

const SlideWrap = styled.li`
    padding:0 20px;
    width:100%;
    height: 100%;
    
    &:first-child{
    padding:0 20px 0 0;
    }

    &:last-child { 
        padding:0 0 0 20px;
  }

`

const Slide = styled(motion.div)`
    width: 450px;
    height: 550px;
    display: flex;
    align-items:center;
    cursor:pointer;
    overflow: hidden;

    
    :hover img{
        transform:scale(1.1);
    }

    img{
        transition: 0.3s ease;
        width:100%;
        height:100%;
        object-fit: cover;
    }

`

const Nametag = styled.div`
    padding:30px;
    h1{
        font-size:12px;
        font-weight:400;
    }

    h2{
        font-size:12px;
        font-weight:600;
    }
`
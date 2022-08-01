import { useEffect } from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { datas } from './data.js'
import { useScroll, motion, useTransform } from 'framer-motion';
import HorizontalScroll from 'react-scroll-horizontal';

const parent  = { width: `100%`, height: `900px`}

const Production = () => {
    return (
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
    )
}
export default Production;

const Container = styled.div`
    width:100vw;
    margin:0 auto;
    height:calc(100vh - 50vh);
    position:relative;
`

const StickyWrapper = styled.ul`
    width:100%;
    height: 100%;
`

const SlideWrap = styled.li`
    padding:0 20px;
    &:first-child{
    padding:0 20px 0 0;
}

    &:last-child { 
        padding:0 0 0 20px;
  }

`

const Slide = styled(motion.div)`
    width: 500px;
    height: 700px;
    display: flex;
    align-items:center;
    overflow: hidden;
    img{
        width:100%;
        object-fit: cover;
    }
`

const Nametag = styled.div`
    padding:0px 30px;
    h1{
        font-size:12px;
        font-weight:400;
    }

    h2{
        font-size:12px;
        font-weight:600;
    }
`
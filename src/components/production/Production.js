import styled from 'styled-components';
import { datas } from './data.js'
import { useScroll, motion, useTransform, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import HorizontalScroll from 'react-scroll-horizontal';
import { Link } from 'react-router-dom';
import { useMousePosition } from '../useMousePosition';

const parent = { height: `100%` }
const words = ["i", "n", "t", "e", "r", "e", "s", "t", "i", "n", "g", ",", <h2 />, "s", "t", "o", "r", "y", "f", "u", "l", ","];
const twowords = ["W", "e", <h2 />, "m", "a", "k", "e", <h2 />, "t", "h", "i", "s", <h2 />, "a", "n", "d", <h2 />, "t", "h", "a", "t", "."];
const gridAnimation = {
    show: {
        transition: { staggerChildren: 0.02 }
    },
    hide: {
        transition: { staggerChildren: 0.02 }
    },
}

const gridimgAnimation = {
    show: {
        transition: { staggerChildren: 0.1 }
    },
    hide: {
        transition: { staggerChildren: 0.1, staggerDirection: -1 }
    },
}


const wordAnimation = {
    show: {

        opacity: [0.3, 1],
    },
    // hide: {

    //     opacity: [1, 0.3],
    // },
}

const imgAnimation = {
    show: {
        y: [900, 0],
        opacity: [0, 1],

    },
    hide: {
        x: [0, 900],
        opacity: [1, 0],
    },
}

const transition = { duration: 1.0, ease: [0.6, 0.01, 0.3, 0.9] };

const Production = () => {
    const { textEnter, textLeave } = useMousePosition();

    return (
        <>
            <WordsWrap
                variants={gridAnimation}
                animate="show"
                exit="hide"
            >
                {words.map((word, i) => {
                    return (
                        <Firstword
                            key={"words" + i}
                            variants={wordAnimation}
                        >
                            {word}
                        </Firstword>
                    )
                })}<p style={{ marginBottom: "-25px" }} />
                {twowords.map((word, i) => {
                    return (
                        <motion.span
                            key={"word" + i}
                            variants={wordAnimation}
                        >
                            {word}
                        </motion.span>
                    )
                })}
            </WordsWrap>
            <Container>
                <StickyWrapper
                    variants={gridAnimation}
                    animate="show"
                    exit="hide">
                    <HorizontalScroll reverseScroll={true} config={{ damping: 15 }} style={parent}>
                        {datas.map((data, i) => {
                            return (
                                <SlideWrap 
                                key={data.name + i}
                                >
                                    <Link to={`/production/${data.id}`}>
                                        <Slide
                                            variants={imgAnimation}
                                        >
                                            <motion.img src={data.img[0]}
                                                transition={transition} 
                                                onMouseEnter={textEnter}
                                                onMouseLeave={textLeave}/>
                                        </Slide>
                                        <Tag>
                                            <Nametag
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2, ease: [0.6, 0.01, 0.3, 0.9] }}>
                                                <h1>
                                                    Flowing Furniture, {data.name}
                                                </h1>
                                                <h2>
                                                    {data.price} krw
                                                </h2>
                                            </Nametag>
                                        </Tag>
                                    </Link>
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

const WordsWrap = styled(motion.div)`
    position:absolute;
    top:120px;
    width:calc(100vw - 20vw);
    left:50%;
    transform:translate(-50%,0);
    z-index:1;
    height:auto;

    h2{
        padding:0 10px;
    }

    span{
        font-size:clamp(20px,5vw,4rem);
        font-weight:600;
        display:inline-block;

           @media (max-width: 900px) {
        font-size: 5vw;       
    }
    }
`

const Firstword = styled(motion.div)`
    font-size:clamp(20px,5vw,4rem);
    font-weight:600;
    display:inline-block;

    @media (max-width: 900px) {
        font-size: 5vw;
        margin-bottom:15px;       
    }
`

const Container = styled.div`
    width:100vw;
    margin:0 auto;
    height:90vh;
    position:relative;
`

const StickyWrapper = styled(motion.ul)`
    width:100%;
    height:100%;
    padding: 245px 0 0 0;
`

const SlideWrap = styled(motion.li)`
    padding:0 20px;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;


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

    @media (max-width:900px){
        width:300px;
        height: 400px;
    }

    
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

const Tag = styled.div`
    width:100%;
`

const Nametag = styled(motion.div)`
    padding:30px 30px 0 30px;
    h1{
        font-size:12px;
        font-weight:600;
    }

    h2{
        font-size:12px;
        font-weight:600;
    }
`

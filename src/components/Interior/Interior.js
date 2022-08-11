import styled from "styled-components";
import { datas } from './data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Title from "./Title";
import { useMousePosition } from "../useMousePosition";

const gridAnimation = {
    show: {
        transition: { staggerChildren: 0.1 }
    },
    hide: {
        transition: { staggerChildren: 0.1, staggerDirection: -1 }
    },
}

const imgAnimation = {
    show: {
        y: [200, 0],
        opacity: [0, 1],
        scale: [0.95, 1]
    },
    hide: {
        y: [0, 200],
        opacity: [1, 0],
        scale: [1, 0.95]
    },
}

const Interior = () => {
    const { textEnter, textLeave } = useMousePosition();
    return (
        <Container>
            <Contain>
                <Title />
            </Contain>
            <ListWrap
                variants={gridAnimation}
                animate="show"
                exit="hide">
                {datas.map((data, i) => {
                    return (
                        <motion.li
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        >
                            <motion.img
                                variants={imgAnimation}
                                src={data.img} alt={data.name} 
                                />
                            <h4>{data.name}</h4>
                            <h5>(Select Shop) Interior construction.</h5>
                            <span>2022.08.05</span>
                        </motion.li>
                    )
                })}
            </ListWrap>
        </Container>
    )
}
export default Interior;

const Container = styled.div`
    width:100%;
`

const Contain = styled.div`
    width:80vw;
    margin:0 auto;
    position:relative;
    height:500px;

    h1{
        font-weight:500;
        font-size: clamp(15px, 10vw, 5rem);
    }
    @media (max-width: 1200px){
        height:200px;
    }
`

const ListWrap = styled(motion.ul)`
    width:100%;
    margin:100px 0 0 0;
    display:flex;
    flex-wrap: wrap;
    border-bottom:1px solid #000;
    cursor:pointer;

    li{
        width:33.33%;
        padding:30px;
        border-right:1px solid #000;
        border-top:1px solid #000;

        @media (max-width: 1200px){
            width: 50%;
        }

        @media (max-width: 900px){
            width: 100%;
        }

        img{
            width:100%;
            vertical-align:bottom;
        }

        h4{
            font-weight:600;
            margin:30px 0 0 0;
        }

        h5{
            margin:5px 0 0 0;
            opacity:0.8;
            font-weight:600;
        }

        span{
            margin:20px 0 0 0;
            display:inline-block;
            font-size:12px;
            font-weight:500;
        }
    }
`
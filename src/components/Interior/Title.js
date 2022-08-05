import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const Title = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    return (
        <Contain
            >
                <Area style={{ opacity }}>
            <h1>Interior</h1>
            <span></span>
            </Area>
            </Contain>
    )
}
export default Title;

const Contain = styled(motion.div)`
    width:100%;
    height:100%;
`

const Area = styled(motion.div)`
    display:flex;
    height:300px;
    align-items:center;    
    position:sticky;

    h1{
        width:40%;
    }

    span{
        position:sticky;
        right:0;
        width:60%;
        height:2px;
        background:#000;
        display:block;
    }
`
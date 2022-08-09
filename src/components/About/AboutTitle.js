import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

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

const titleMotion = {
    hidden: {
        x: "-100%",
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

const textMotion = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: 2.2,
        }
    }
}

const Title = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
    const yValue = useTransform(scrollYProgress, [0, 1], [0, 900]);
    return (
        <Contain>
            <Area>
                <motion.h1
                    variants={titleMotion}
                    initial="hidden"
                    animate="visible"
                    style={{ opacity }}>about</motion.h1>
                <motion.span
                    variants={borderMotion}
                    initial="hidden"
                    animate="visible"
                    style={{ opacity: opacity2 }}
                />
            </Area>
            <Subdep
                variants={textMotion}
                initial="hidden"
                animate="visible"
                style={{ y: yValue }}
            >
                Please inquire about all the spaces inside and outside.
                Private Interior, Office Interior, Commercial Interior, Public Interior.
            </Subdep>
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
    width:80vw;
    position:fixed;

    h1{
        width:40%;
    }

    span{
        height:2px;
        background:#000;
        width:90%;
        margin:5px 0 0 0;
    }
`

const Subdep = styled(motion.div)`
    padding:240px 0 0 0;
    font-weight:500;
    font-size:40px;
`
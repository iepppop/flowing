import styled from "styled-components";
import { motion } from 'framer-motion';
import { useMousePosition } from "./useMousePosition";

const CustomCurosr = () => {
    const { hoverNav, variants, small } = useMousePosition();
    console.log(hoverNav);
    return (
        <div>
            <CursorContain
                animate={hoverNav}
                transition={{ ease: "linear", duration: 0.15 }}
                variants={variants}
            />
            <CursorSmall
                animate={hoverNav}
                transition={{ ease: "linear", duration: 0.1 }}
                variants={small}>
                {hoverNav == "text" && 'click'}
            </CursorSmall>
        </div>
    )
}
export default CustomCurosr;

const CursorContain = styled(motion.div)`
    position:fixed;  
    left:0;
    top:0;
    width:15px;  
    height:15px;
    padding: 1.5vw;
    border-radius:100% 100%;
    border:1px solid #000;
    z-index:20;
    pointer-events:none;
    opacity:0.9;
`

const CursorSmall = styled(motion.div)`
    position:fixed;  
    left:0;
    top:0;
    display:flex;
    align-items:center;
    justify-content:center;
    width:4px;  
    height:4px;
    border-radius:100% 100%;
    background:#000;
    z-index:20;
    pointer-events:none;
    opacity:0.9;
`
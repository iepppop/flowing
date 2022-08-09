import styled from "styled-components";
import { motion } from 'framer-motion';
import { useMousePosition } from "./useMousePosition";
import { openState } from "./Menu/MenuState";
import { useRecoilState } from "recoil";

const CustomCurosr = () => {
    const { hoverNav, variants, small, menuVariants, smallVariants } = useMousePosition();
    const [open, setOpen] = useRecoilState(openState);

    return (
        <>
         {open ? (
              <>
              <CursorMenu
              animate={hoverNav}
              transition={{ ease: "linear", duration: 0.15 }}
              variants={menuVariants}
          />
          <CursorMenuSmall
              animate={hoverNav}
              transition={{ ease: "linear", duration: 0.1 }}
              variants={smallVariants}>
          </CursorMenuSmall>
          </>
         ) : (
            <>
               <CursorContain
               animate={hoverNav}
               transition={{ ease: "linear", duration: 0.15 }}
               variants={variants}
           />
           <CursorSmall
               animate={hoverNav}
               transition={{ ease: "linear", duration: 0.1 }}
               variants={small}>
               {/* {hoverNav == "text" && 'click'} */}
           </CursorSmall>
           </>
         )}
        </>
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

const CursorMenu = styled(motion.div)`
    position:fixed;  
    left:0;
    top:0;
    width:15px;  
    height:15px;
    padding: 1.5vw;
    border-radius:100% 100%;
    border:1px solid #fff;
    z-index:20;
    pointer-events:none;
    opacity:0.9;
`

const CursorMenuSmall = styled(motion.div)`
    position:fixed;  
    left:0;
    top:0;
    display:flex;
    align-items:center;
    justify-content:center;
    width:4px;  
    height:4px;
    border-radius:100% 100%;
    background:#fff;
    z-index:20;
    pointer-events:none;
    opacity:0.9;
`
import { useRecoilState } from "recoil";
import styled from "styled-components";
import MenuContent from "./MenuContent";
import { openState } from "./MenuState";
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "../useMousePosition";

const Header = () => {
    const [open, setOpen] = useRecoilState(openState);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState();
    const { textEnter, textLeave } = useMousePosition();

    const update = () => {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);
        }
    }

    useEffect(() => {
        return scrollY.onChange(() => update());
    });

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    };


    return (
        <>
            <Container
                variants={variants}
                animate={hidden ? "hidden" : "visible"}
                transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.1 }}>
                <Link to={`/`}><motion.h1
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}>flowing.</motion.h1></Link>
                <MenuButtonWrap open={open}>
                    <MenuBtn
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        onClick={() => setOpen(!open)}>
                        <SpanBtn open={open} 
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave}/>
                    </MenuBtn>
                </MenuButtonWrap>
            </Container>
        </>
    )
}
export default Header;

const Container = styled(motion.div)`
    width: calc(100vw - 20vw);
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    position:fixed;
    top:0;
    left:50%;
    transform:translate(-49.5%, 0);
    z-index:998;

    h1{
      font-size: clamp(20px, 50%, 1rem);
    }
`

const MenuButtonWrap = styled.div`
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform : ${props => (props.open ? 'translateY(0px)' : 'translateX(0)')};
    transition-delay: 0.2s;
    position:absolute;
    right:0;
    top:40%;
    transform:translate(0,-50%);
`

const MenuButtonWrapClick = styled.div`
    z-index: 11;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.2s;
`


const MenuBtn = styled(motion.button)`
    cursor: pointer;
    width: 30px;
    height: 20px;
    border: none;
    background: 0 0;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
`

const SpanBtn = styled.span`
    &:after,
    &:before {
    content: "";
    width: 30px;
    height: 2px;
    position: absolute;
    right:0;
    will-change: transform;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index:999;
    background-color: ${props => (props.open ? '#fff' : '#111')};
    }

    &:before {
        transform: ${props => (props.open ? 'translateY(50px) rotate(135deg) scaleX(2.0)' : 'translate(0, -50%) scaleY(0.7) rotate(180deg)')};
    }

    &:after {
      margin:8px 0 0 0;
      transform: ${props => (props.open ? 'translateY(42px) rotate(45deg) scaleX(2.0)' : 'translate(0, -50%) scaleY(0.7) rotate(0);')};
    }
`


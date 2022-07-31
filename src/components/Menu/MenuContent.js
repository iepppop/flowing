import styled, { keyframes } from "styled-components";
import { openState } from './MenuState';
import { useRecoilState } from "recoil";
import { motion } from 'framer-motion';

const internalLinks = [
    {
        url: "#1",
        component: <span>Home</span>,
        img:
            "https://f-l-o-w-i-n-g.com/web/upload/category/editor/2019/12/25/1a213b80b4c0fefcff9c1dac622953f8.jpg",
    },
    {
        url: "#2",
        component: <span>Production</span>,
        img:
            "https://f-l-o-w-i-n-g.com/web/product/big/20191229/5f065f7501fb5d9942e1d463878caee4.jpg",
    },
    {
        url: "#3",
        component: <span>Interior</span>,
        img:
            "https://f-l-o-w-i-n-g.com/web/product/big/202102/1d3d81f7c0b1fdd515f1f0c0c7690a49.jpg",
    },
    {
        url: "#4",
        component: <span>About</span>,
        img:
            "https://f-l-o-w-i-n-g.com/web/upload/about.jpg",
    },
];

const gridAnimation = {
    show: {
        transition: { staggerChildren: 1.2, delayChildren: 4.2 }
    },
    hide: {
        transition: { staggerChildren: 1.2, staggerDirection: -1 }
    },
}

const imgAnimation = {
    show: {
        x: [-100, 0],
        opacity: [0, 1],
        scale: [0.95, 1],
    },
    hide: {
        x: [0, -100],
        opacity: [1, 0],
        scale: [1, 0.95],
    },
}

const titleMotion = {
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

const MenuContent = () => {
    const [open, setOpen] = useRecoilState(openState);
    return (
        <MenuInside open={open} style={{ top: `${open ? "0px" : "-100vh"}`, }}>
            {open && (
                <MenuNavContainer>
                    <InternalNavLink
                        open={open}
                        variants={gridAnimation}
                        animate="show"
                        exit="hide"
                        key={open}
                    >
                        {internalLinks.map((link,i) => (
                            <>
                                <motion.li
                                    key={link.url}
                                    variants={titleMotion}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hide">
                                    <a href={link.url}>{link.component}
                                    <NumberStamp>
                                        0{i+1}
                                    </NumberStamp></a>
                                    <img src={link.img} />
                                </motion.li>
                                <Line />
                            </>
                        ))}
                    </InternalNavLink>
                </MenuNavContainer>
            )}
        </MenuInside>
    )
}
export default MenuContent;

const MenuInside = styled.div`
    position: fixed;
    width:100vw;
    height:100vh;
    transition: top 1s cubic-bezier(1, 0, 0, 1);
    background-color: #151515;
    color: white;
    z-index: 10;
    display:flex;
    align-items:center;
`

const MenuNavContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: calc(100vw - 20vw);
    margin:0 auto;
    display:flex;
`

const InternalNavLink = styled.ul`
   width:50%;
   height:100%;
   display:flex;
   flex-direction:column;

    li{ 
    width:100%;
    padding:30px 0;
    transition: 0.5s ease-in-out;
    cursor:pointer;

    :hover{
        background:linear-gradient(transparent 30%, rgba(181,181,181,0.1));
        img{
            opacity: 1;
            transform: translateY(-50%) translateX(30px);
        }
    }
}

a{
      font-size: clamp(32px, 10vw, 5rem);
      text-decoration: none;
      color:#fff;
      position:relative;
}

img{
    pointer-events: none;
    display: block;
    width:40%;
    height:80%;
    position: absolute;
    top:50%;
    right: 5%;
    opacity:0;
    transform: translatey(-50%) translateX(-30px);
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
    filter: brightness(1.3) grayscale(0.54) contrast(0.8) saturate(1.2) sepia(0.21);
}
`

const Line = styled.div`
    width:100%;
    height:1px;
    background:white;
`

const NumberStamp = styled.div`
    position:absolute;
    top:20px;
    right:-40px;
    font-size:clamp(10px, 10vw, 1rem);
`
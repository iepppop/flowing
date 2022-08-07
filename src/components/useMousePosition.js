import { createContext, useContext, useEffect, useRef, useState } from 'react';

const MousePosition = createContext();
export const useMousePosition = () => useContext(MousePosition);

export const MouseContextProvider = ({ children }) => {
    const [mousePosition, setMousePosition] = useState({x:0, y:0});
    const [hoverNav, setHoverNav] = useState("default");
    const [hoverText, setHoverText] = useState("default");

    const variants = {
        default: {        
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%"
        },
        text:{
            border:"none",
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
        }
    }

    const small = {
        default: {        
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
        },
        text:{
            background:"rgba(0,0,0,0.8)",
            width:"100px",
            height:"100px",
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
            fontSize:"15px",
            color:"#fff"
        }
    }

    const textEnter = () => {setHoverNav("text")};
    const textLeave = () => {setHoverNav("default")};

    const hoverEnter = () => hoverText("text");
    const hoverLeave = () => hoverText("default");

    useEffect(()=> {
        const handlePosition = (e) => {
            setMousePosition({ x:e.clientX, y:e.clientY});

        };
        window.addEventListener('mousemove', handlePosition);

        return () => window.removeEventListener('mousemove', handlePosition);
    },[]);
    
    const value = {
    	variants,
        textEnter, 
        textLeave, 
        hoverNav,
        small,
        hoverEnter, 
        hoverLeave
    }

    return <MousePosition.Provider value={value}> { children } </MousePosition.Provider >
}
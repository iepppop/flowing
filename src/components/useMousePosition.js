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
            border:"1px solid #000",
            background:"none",
            width:"100px",
            height:"100px",
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
            fontSize:"12px",
            fontWeight:"600",
            color:"#000"
        }
    }

    const small = {
        default: {        
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
            background:"#000",
        },
        text:{
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
            background:"none"
        }
    }

    const menuVariants = {
        default: {        
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
            border:"1px solid #fff",
        },
        text:{
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
            border:"none",
        }
    }

    
    const smallVariants = {
        default: {        
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
            background:"none",
        },
        text:{
            border:"1px solid #fff",
            background:"none",
            width:"100px",
            height:"100px",
            top: mousePosition.y,
            left: mousePosition.x,
            x:"-50%", 
            y:"-50%",
            fontSize:"12px",
            fontWeight:"600",
        }
    }


    const textEnter = () => setHoverNav("text");
    const textLeave = () => setHoverNav("default");

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
        setHoverNav,
        small,
        menuVariants,
        smallVariants
    }

    return <MousePosition.Provider value={value}> { children } </MousePosition.Provider >
}
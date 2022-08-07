import styled, { keyframes } from "styled-components";
import { useGLTF, OrbitControls, useAnimations } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from "../useMousePosition";
import CustomCurosr from "../CustomCurosr";

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  useFrame(() => (group.current.rotation.y += 0.001))
  return (
    <group ref={group} {...props} dispose={null} scale={0.058}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[Math.PI / 30, -400, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.chrom} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.plastik} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.oregon_1} />
      </group>
    </group>
  )
}

const transition = {
  duration: 1.2,
  ease: [0.6, -0.05, 0.01, 0.9],
}

const textReveal = {
  initial: {
    y: "200%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
  },
};

const Main = () => {
  const { textEnter, textLeave } = useMousePosition();
  return (
    <>
      <Container>
        <TextWrap>
          <FirstWrap>
            <motion.h1
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={transition}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}> A Comfortable</motion.h1>
            <Line
              initial={{ x: "200%", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ ...transition, delay: 0.8 }} />
            <FlowText
              initial={{ y: "-200%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ ...transition, delay: 1.2 }}>
              <span>
                <h1>flowing</h1>
                <h1>flowing</h1>
                <h1>flowing</h1>
                <h1>flowing</h1>
              </span>
            </FlowText>
          </FirstWrap>
          <FirstWrap>
            <motion.h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
              variants={textReveal}
              initial="initial"
              animate="animate"
              transition={{ ...transition, delay: 0.4 }}
            >place flowing</motion.h1>
          </FirstWrap>
        
          <SecondWrap>
            <motion.h2
              initial={{ x: "-200%", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ ...transition, delay: 0.8 }}>Songchi chair</motion.h2>
            <Line style={{ width: "38%" }}
              initial={{ x: "-200%", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ ...transition, delay: 0.8 }} />
          </SecondWrap>
          <ThirdWrap
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ ...transition, delay: 1.0 }}
          >
            <p>
              we
            </p>
            <p>
              make
            </p>
            <p>
              art
            </p>
          </ThirdWrap>
          <FourthText>
            we are holding a 24-hour consultation through Open Kakao Talk.
            We will ask about your inquiries and proceed with prompt resolution.
          </FourthText>
        </TextWrap>
      </Container>
      <Threed>
        <Canvas camera={{ position: [0, 25, 40], fov: 80 }}>
          <Suspense fallback={null}>
            <directionalLight intensity={1} />
            <ambientLight intensity={1.2} />
            <spotLight intensity={0.1} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <Model />
            <OrbitControls enablePan={true} enableZoom={false} enableRotate={false} />
          </Suspense>
        </Canvas>
      </Threed>
    </>
  )
}
export default Main;


const Container = styled.div`
    width: calc(100vw - 20vw); 
    margin: 70px auto 0 auto;
    height:89vh;
    position:relative;
`

const Threed = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
`

const TextWrap = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  z-index:1;
  padding:50px 0 0 0;
`

const FirstWrap = styled.div`
  width:100%;
  height:30px;
  display:flex;
  align-items: center;
  padding:60px 0 30px 0;

  @media screen and (max-width: 900px) {
    padding:60px 0 0 0;
  }

  @media screen and (max-width: 500px) {     
  padding:40px 0 0 0;
  }

h1{
  font-size: clamp(25px, 15vw, 4.5vw);
  width:50%;

  @media (max-width: 900px) {
    font-size: 7vw;
    width:100%;
   }
}
`

const SecondWrap = styled.div`
  position:absolute;
  top:60%;
  width:40%;
  left:160px;
  transform:translate(0,-50%);
  display:flex;
  align-items: center;

  h2{ 
    margin:0 40px 0 0;
  }

  @media screen and (max-width: 1500px) {     
    display:none;
  }
`

const ThirdWrap = styled(motion.div)`
  position:absolute;
  right:0;
  text-align:right;
  font-size: clamp(15px, 10vw, 2vw);
  font-weight:800;
  top:50%;
  transform:translate(0,-50%);

  p{
    padding:15px 0;

    @media (max-width: 900px) {
      font-size: 6vw;
     }
  }
`

const FourthText = styled.div`
  position:absolute;
  bottom:0;
  font-size:10px;
  width:350px;
`

const Line = styled(motion.div)`
  width:50%;
  height:2px;
  background:#151515;

  @media (max-width: 900px) {
    width:40%;
   }
`

const FlowWrap = styled.div`
  width:100%;
  display:flex;
  justify-content: end;
`


const Flow = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

const FlowText = styled(motion.div)`
  position:absolute;
  right:0;
  top:60px;
  width:130px;
  background:#fff;
  height:35px;
  overflow:hidden;
  margin:0 0 10px 0;
  display:flex;
  align-items: center;

  @media screen and (max-width: 500px) { 
    top:30px;
  }

  span{
    display:flex;
    white-space: nowrap;
    will-change: transform;
    animation: ${Flow} 6s linear infinite;
    font-weight:600;
  }

  h1{
    font-size: clamp(20px, 15vw, 25px);
    padding:0 10px;
  }
`

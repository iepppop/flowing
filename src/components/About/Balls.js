import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { SpotLight, useDepthBuffer, Html, useGLTF } from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from 'react';
import { Vector3 } from 'three';
import * as THREE from 'three';
import { Physics, usePlane, useSphere } from "@react-three/cannon";


const InstancedSpheres = ({ count = 150 }) => {
  const { viewport } = useThree();
  const [ref] = useSphere((index) => ({ mass: 100, position: [4 - Math.random() * 8, viewport.height, 0, 0], args: [1.2] }))
  return (
    <instancedMesh ref={ref} castShadow receiveShadow args={[null, null, count]}>
      <sphereBufferGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial color="#b4f170" roughness={0}/>
    </instancedMesh>
  )
}

const Borders = () => {
  const { viewport } = useThree();
  return(
    <>
     <Plane position={[0, -viewport.height / 2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Plane position={[-viewport.width / 2 - 1, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Plane position={[viewport.width / 2 + 1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Plane position={[0, 0, 1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  )
}

const Plane = ({ color, ...props }) => {
  usePlane(() => ({ ...props }))
  return null
}

function Mouse() {
  const { viewport } = useThree()
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [2] }))
  return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 7))
}


const Balls = () => {
  return (
    <Canvas shadows gl={{ stencil: false, antialias: false }} camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}>
      <fog attach="fog" args={["#a2f14a", 25, 35]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <directionalLight
        castShadow
        intensity={6}
        position={[50, 50, 25]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Suspense fallback={null}>
        <Physics gravity={[0, -10, 0]} defaultContactMaterial={{ restitution: 0.5 }}>
          <group position={[0, 0, -10]}>
            <InstancedSpheres/>
            <Borders />
            <Mouse />
          </group>
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default Balls;
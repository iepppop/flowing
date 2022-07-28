import styled from "styled-components";
import { useGLTF, OrbitControls, useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

function Model({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF('/scene.gltf');
    return (
      <group ref={group} {...props} dispose={null} scale={3.0}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Egg_Chair__2" position={[-0.02, 0, 0]}>
                  <group name="BB_025_003_0" position={[0, -0.52, 0.03]} rotation={[0, Math.PI / 4, 0]} scale={2.11}>
                    <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.BB_025_007} />
                    <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.BB_025_006} />
                  </group>
                  <group name="BB_025_004_1" position={[-0.17, -0.41, -0.03]} scale={0.9}>
                    <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.BB_025_007} />
                  </group>
                  <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Leather} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }

const Main = () => {
    return (
        <Container>
            <Canvas>
                <Suspense fallback={null}>
                    <directionalLight intensity={2} />
                    <ambientLight intensity={1.2} />
                    <spotLight intensity={0.5} angle={0.9} penumbra={1} position={[10, 15, 10]} castShadow />
                    <Model />
                    <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
                </Suspense>
            </Canvas>
        </Container>
    )
}
export default Main;

const Container = styled.div`
    width: calc(100vw - 126px); 
    margin: 0 auto;
    height:100vh;
`
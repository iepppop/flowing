import styled from "styled-components";
import * as THREE from 'three';
import { Canvas, useLoader, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from "@react-three/drei";
import { Suspense, useRef } from 'react';
import glsl from "babel-plugin-glsl/macro";

const WaveShaderMaterial = shaderMaterial(
    {
      uTime: 0,
      uColor: new THREE.Color(0.0, 0.0, 0.0),
      uTexture: new THREE.Texture(),
    },
  
    glsl`
    precision mediump float;
    varying vec2 vUv;
    varying float vWave;
  
    uniform float uTime;
  
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);
  
    void main(){
      vUv = uv;
  
      vec3 pos = position;
      float noiseFreq = 1.0;
      float noiseAmp = 0.13;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;
  
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
    `,
    glsl`
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
  
    varying vec2 vUv;
    varying float vWave;
    
    void main(){
      float wave = vWave * 0.1;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0);
    }`
  )
  
extend({ WaveShaderMaterial })

const Wave = ({img}) => {
    const ref = useRef();
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  
    const [image] = useLoader(THREE.TextureLoader, [
      `${img}`
    ]);
  
    return (
  
      <mesh>
        <planeBufferGeometry args={[0.59, 0.6, 16, 16]} />
        <waveShaderMaterial ref={ref} uTexture={image} />
      </mesh>
  
    )
  }
  

const MenuImage = ({ img }) => {
    return (
        <Contain>
            <Canvas camera={{ fov: 8, position: [0, 0, 5] }}>
                <Suspense fallback={null}>
                    <Wave img={img}/>
                </Suspense>
            </Canvas>
        </Contain>
    )
}
export default MenuImage;

const Contain = styled.div`
    width:100%;
    height:100%;
    img{
        width:100%;
        height:100%;
    }
`
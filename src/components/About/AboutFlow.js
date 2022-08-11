import styled, { keyframes } from "styled-components";
import { motion } from 'framer-motion';

const AboutFlow = () => {
    return (
        <Container>
         <FlowBox>
          <FlowWrap>
            <Flow>
              <span>Light procedure</span>
              <span>Super Normal</span>
              <span>Tactical Luxury</span>
              <span>We make Sure</span>
              <span>Audience Editor</span>
              <span>Light procedure</span>
              <span>Super Normal</span>
              <span>Tactical Luxury</span>
              <span>We make Sure</span>
              <span>Audience Editor</span>
            </Flow>
          </FlowWrap>
        </FlowBox>
        </Container>
    )
}
export default AboutFlow;

const Container = styled.div`
    border-top:1px solid #000;

    @media (max-width: 1200px){
      height: 20vh;
      display: flex;
      align-items: center;
    }
    
`
const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`

const FlowBox = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;

    @media (max-width: 1200px){
      height: auto;
      display:flex;
      align-items: center;
    }
`

const FlowWrap = styled.div`
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    width: 100%;
    height: 100%;
    white-space: nowrap;
`


const Flow = styled.div`
    font-size: clamp(15px, 10vw, 8rem);
    animation: ${flowing} 30s linear infinite;
    span{
        display:inline-block;
        font-weight:600;
        padding:0 20px;

        @media (max-width: 1200px){
          font-size: 5rem;
        }
    }
`

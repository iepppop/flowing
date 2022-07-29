import styled from "styled-components";
import Concept from "./Concept";
import Oriented from "./Oriented";

const Square = () => {
  return (
    <Contain>
        <Concept />
        <Oriented />
    </Contain>
  )
}
export default Square;

const Contain = styled.div`
    margin:0 auto;
    background:#fff;
    border-radius:100px;
`
import styled from "styled-components";

const Footer = () => {
  return (
    <Contain>
        <h1>
            Flowing
        </h1>
    </Contain>
  )
}
export default Footer;


const Contain = styled.div`
    width: calc(100vw - 20vw);
    margin: 0 auto;

    h1{
        margin:120px 0;
    }
`


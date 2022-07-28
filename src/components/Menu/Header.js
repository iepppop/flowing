import { useRecoilState } from "recoil";
import styled from "styled-components";
import { openState } from "./MenuState";

const Header = () => {
  const [open, setOpen] = useRecoilState(openState);

  return (
    <Container>
        <h1>flowing.</h1>
        <MenuButtonWrap open={open}>
            <MenuBtn onClick={() => setOpen(!open)}>
                <SpanBtn open={open} />
            </MenuBtn>
        </MenuButtonWrap>
    </Container>
  )
}
export default Header;

const Container = styled.div`
    width: calc(100vw - 15vw); 
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:30px 0;
    position:relative;

    h1{
      font-size: clamp(1rem, 2.5vw, 2rem);
    }
`

const MenuButtonWrap = styled.div`
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform : ${props => (props.open ? 'translateY(0px)' : 'translateX(0)')};
    transition-delay: 0.2s;
    position:absolute;
    right:0;
    top:40%;
    transform:translate(0,-50%);
`

const MenuButtonWrapClick = styled.div`
    z-index: 11;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.2s;
`


const MenuBtn = styled.button`
    cursor: pointer;
    width: 30px;
    height: 20px;
    border: none;
    background: 0 0;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
`

const SpanBtn = styled.span`
    &:after,
    &:before {
    content: "";
    width: 30px;
    height: 2px;
    position: absolute;
    right:0;
    will-change: transform;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index:999;
    background-color: ${props => (props.open ? '#fff' : '#111')};
    }

    &:before {
        transform: ${props => (props.open ? 'translateY(-2px) rotate(130deg)' : 'translate(0, -50%) scaleY(0.7) rotate(180deg)')};
    }

    &:after {
      margin:8px 0 0 0;
      transform: ${props => (props.open ? 'translateY(-10px) rotate(50deg)' : 'translate(0, -50%) scaleY(0.7) rotate(0);')};
    }
`


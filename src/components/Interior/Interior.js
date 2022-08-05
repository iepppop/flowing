import styled from "styled-components";
import { datas } from './data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Title from "./Title";

const Interior = () => {
    return (
        <Container>
            <Contain>
                <Title />
            </Contain>
            <ListWrap>
                {datas.map((data, i) => {
                    return (
                        <li>
                            <img src={data.img} alt={data.name} />
                            <h4>{data.name}</h4>
                            <h5>(Select Shop) Interior construction.</h5>
                            <span>2022.08.05</span>
                        </li>
                    )
                })}
            </ListWrap>
        </Container>
    )
}
export default Interior;

const Container = styled.div`
    background:#fff;
    width:100%;
`

const Contain = styled.div`
    width:80vw;
    margin:0 auto;
    position:relative;
    height:500px;

    h1{
        font-weight:500;
        font-size: clamp(15px, 10vw, 5rem);
        position:fixed;
    }
`

const ListWrap = styled.ul`
    width:100%;
    margin:100px 0 0 0;
    display:flex;
    flex-wrap: wrap;
    border-top:1px solid #000;

    li{
        width:33.33%;
        padding:30px;
        border-right:1px solid #000;
        border-bottom:1px solid #000;

        img{
            width:100%;
            vertical-align:bottom;
        }

        h4{
            font-weight:600;
            margin:30px 0 0 0;
        }

        h5{
            margin:5px 0 0 0;
            opacity:0.8;
            font-weight:600;
        }

        span{
            margin:20px 0 0 0;
            display:inline-block;
            font-size:12px;
            font-weight:500;
        }
    }
`
import styled, { keyframes } from "styled-components";
import { motion, useScroll, useTransform } from 'framer-motion';
import { datas } from './data';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


const transition = { duration: 1.0, ease: [0.6, 0.01, 0.3, 0.9] };

const imgAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
}

const Product = () => {
    const { id } = useParams();
    const datalist = datas.filter(list => list.id == id);
    const datalistimg = datalist.map((item) => {
        return item.img[0];
    })

    const [currentItem, setCurrentItem] = useState(datalistimg);
    const [start, setStart] = useState(false);

    function handleAnimation() {
        setStart(true);
        setTimeout(() => {
            setStart(false);
        }, 300);
    }
    
    return (
        <Container>
            {datalist.map((data, i) => {
                const imglist = [`${data.img}`];
                return (
                    <ListWrap>
                        <ImgWrap className={`${start && "fade"}`}>
                            <motion.img
                                src={currentItem}
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                transition={transition} />
                        </ImgWrap>
                        <TextWrap>
                            <TextContainer>
                                <motion.h2
                                    variants={imgAnimation}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ ...transition, delay: 0.5 }}>Flowing Furniture, </motion.h2>
                                <motion.h1
                                    variants={imgAnimation}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ ...transition, delay: 0.5 }}>{data.name}</motion.h1>
                                <motion.h3
                                    variants={imgAnimation}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ ...transition, delay: 0.5 }}>{data.price}</motion.h3>
                                <motion.span
                                    variants={imgAnimation}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ ...transition, delay: 0.5 }}>Le TricoteurBranding category in
                                    Flowing only deals with 100% regular
                                    products and actual photographed products.</motion.span>
                                {imglist.map((x) => {
                                    const img = x.split(',', 5);
                                    return (
                                        <DataImgWrap>
                                            <motion.li
                                                variants={imgAnimation}
                                                initial="initial"
                                                animate="animate"
                                                transition={{ ...transition, delay: 0.7 }}>
                                                <img onClick={() => { setCurrentItem(img[0]); handleAnimation(); }} src={img[0]} /></motion.li>
                                            <motion.li
                                                variants={imgAnimation}
                                                initial="initial"
                                                animate="animate"
                                                transition={{ ...transition, delay: 0.8 }}>
                                                <img onClick={() => { setCurrentItem(img[1]);  handleAnimation(); }} src={img[1]} /></motion.li>
                                            <motion.li
                                                variants={imgAnimation}
                                                initial="initial"
                                                animate="animate"
                                                transition={{ ...transition, delay: 0.9 }}>
                                                <img onClick={() => { setCurrentItem(img[2]);  handleAnimation(); }} src={img[2]} /></motion.li>
                                        </DataImgWrap>
                                    )
                                })}
                            </TextContainer>
                        </TextWrap>
                    </ListWrap>
                )
            })}
        </Container>
    )
}
export default Product;

const DataImgWrap = styled.ul`
    width:80%;
    display:flex;
    margin:80px 0 0 0;

    li{
        width: 33.33%;
        max-height:180px;
        margin:0 30px 0 0;
        cursor:pointer;
        transition:0.3 ease;

        :last-child{
            margin: 0;
        }
    }

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
`

const Container = styled.div`
    width:100%;
    height:100vh;
`

const ListWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
`


const ImgWrap = styled(motion.div)`
    width:50%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    img{ 
        width:100%;
        height:100%;
        object-fit: cover;
        vertical-align:bottom;
    }
`

const TextWrap = styled.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`

const TextContainer = styled.div`
    width:80%;

    span{
        width:50%;
        margin:80px 0 30px 0;
        display:inline-block;
    }

    h2{
        font-weight:500;
    }

    h1{
        font-weight:500;
        font-size:50px;
    }

    h3{
        font-weight:500;
        margin:30px 0 0 0;
    }
`

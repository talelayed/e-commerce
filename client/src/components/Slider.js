import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftOutLined from '@mui/icons-material/ArrowLeft';
import ArrowRightOutLined from '@mui/icons-material/ArrowRight';
import {sliderItems} from './../data'
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })};
    `
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin:auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition : all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props=>props.bg}
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    text-align: start;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color:#27357A
    };
    box-shadow: 3px 3px;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else{
            setSlideIndex(slideIndex <2 ? slideIndex +1 : 0);
        }
    }
    return <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutLined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item,key)=>(
                            <Slide bg={item.bg} key={key}>
                            <ImageContainer style={{margin:"0px 0px -50px 70px"}} >
                                <Image src={item.img}/>
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                                <Button>SHOW NOW</Button>
                            </InfoContainer>
                            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutLined/>
        </Arrow>
    </Container>;
}

export default Slider;
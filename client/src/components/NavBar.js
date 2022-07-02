import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./../App.css"
import {mobile} from "../responsive"
const Container = styled.div`
   height: 60px;
   width: 100%;
   z-index: 20;
   position: fixed;
   ${mobile({ height: "50px" })}
    `
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   aligh-items: center;
   justify-content: space-between;
   ${mobile({ padding: "10px 0px" })};
`

const Left = styled.div`
flex: 1;
display: flex;
aligh-items: center;
`
const Center = styled.div`
flex: 1
`
const Right = styled.div`
flex: 1;
display: flex;
aligh-items: center;
justify-content: flex-end;
margin-top:auto;
margin-bottom:auto;
${mobile({ flex: 2, justifyContent: "center" })};
`

const Language = styled.div`
font-size: 14px;
cursor: pointer;
margin-top:auto;
margin-bottom:auto;
${mobile({ display: "none" })};
`

const SearchContainer = styled.div`
border: 1px solid gray;
border-radius: 4px;
display: flex;
aligh-items: center;
margin-left: 25px;
padding: 5px;
height:50%
`

const Input = styled.input`
border: none;
background-color: transparent;
${mobile({ width: "50px" })};
`

const Logo = styled.h1`
font-weight:bold;
text-align:center;
${mobile({ fontSize: "24px" })};
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })};
`

const NavBar = () => {
    const [navbar, setNavbar] = useState(false)
    const changeBackgroundColor = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 15) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }}

        useEffect(() => {
            changeBackgroundColor()
            // adding the event when scroll change background
            window.addEventListener("scroll", changeBackgroundColor)
          })

    return <Container className={navbar ? "active" : ""}>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer style={{marginTop:'auto',marginBottom:'auto'}}>
                    <Input placeholder="SEARCH"/>
                    <SearchIcon style={{color:'gray', fontSize:'16', marginTop:'auto',marginBottom:'auto'}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>CHI5.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>     
    </Container>;
}

export default NavBar;
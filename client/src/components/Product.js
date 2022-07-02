import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCart";
import SearchOutlined from "@mui/icons-material/Search";
import styled from "styled-components";
  
  
const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
  `
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `

  const Flex = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 15px;
    font-weight: 400;
    `
  
  const Product = ({ item }) => {
    return (
      <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
        <Flex>
            <span>{item.title}</span>
            <span>{item.price}dt</span>
        </Flex>
      </Container>
    );
  };
  
  export default Product;
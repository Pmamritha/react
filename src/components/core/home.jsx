
import React from "react";
import { connect } from "react-redux";
import Carousel from 'react-bootstrap/Carousel'
import lib from "../images/lib.jpg"
import a from "../images/a.jpg"
import boook from "../images/boook.jpg"
class home extends React.Component{
    render(){
        return(
<Carousel>
<Carousel.Item>
    <img
      className="d-block w-100"
      src={boook}
      alt="First slide"
      height='400px'
    
    />
    <Carousel.Caption>
      <h4>WELCOME TO THE WORLD OF BOOKS </h4>
      <h3>Books are a uniquely portable magic.</h3>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lib}
      alt="Second slide"
      height='400px'
    
    />
    
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={a}
      alt="Third slide"
      height='400px'
    
/>

    
  </Carousel.Item>
  
</Carousel>
        )
    }
}
export default home
    
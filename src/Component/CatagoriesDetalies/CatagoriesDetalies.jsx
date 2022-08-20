import React from "react";
import { Button, Container } from "react-bootstrap";

import "./CatagoriesDetalies.css";
const CatagoriesDetalies = (props) => {
  console.log(props.product);
  const { email, picture, about,company } = props.product;

  return (
    <Container>
      <div className="cardItem">
        <div className="CardStyle">
            <div>
                
            <img  src={picture} alt=""/>
            <p></p>
            <h4><b className="text-success">Company : </b>{company} </h4>
            <p><b>About: </b>{about}</p>
            <Button variant="warning">Buy Here</Button>
        </div>
            </div>
            
      </div>
    </Container>
  );
};

export default CatagoriesDetalies;

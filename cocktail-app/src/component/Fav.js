import React, { Component } from 'react';
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class Fav extends Component {

    state={
       favDrink:[],
       err:'',

    }


componentDidMount(){
    const url = `${process.env.REAREACT_APP_SERVER}/getFavData`;

    axios.get(url)
    .then((response)=>{
        this.setState({favDrink:response.dat})
    })
    .catch((err)=>{
        this.setState({err:err.message})
    })
}

deleteFav =(i)=>{
    let strDrink = this.status.favDrink[i].strDrink;

    const url = `${process.env.REAREACT_APP_SERVER}/deleteFavData`;

    axios.get(url)
    .then((response)=>{
        this.setState({favDrink:response.data})
    })
    .catch((err)=>{
        this.setState({err:err.message})
    })
}


render() {
    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <div>
            {this.state.favDrink.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Add to favorite list</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}


export default Fav


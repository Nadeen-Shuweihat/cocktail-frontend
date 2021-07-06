import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class Home extends Component {
  state = {
    allData: [],
    err: "",
  };

  componentDidMount = () => {
    const url = `${process.env.REAREACT_APP_SERVER}/allData`;

    axios
      .get(url)
      .then((response) => {
        this.setState({ allData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  addFav = (i) => {
    let targetData = this.state.allData[i];

    let dataBody = {
      name: targetData.strDrink,
      url: targetData.strDrinkThumb,
    };

    const url = `${process.env.REAREACT_APP_SERVER}/addFav`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        this.setState({ errerr: err.message });
      });
  };

  render() {
    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <div>
            {this.state.allData.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={()=>this.addFav(i)}>Add to favorite list</Button>
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

export default Home;

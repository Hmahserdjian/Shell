import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";
import Input from "./components/Input";
import Button from "./components/Buttons";
import { Container, Row, Col, Footer } from "./components/Grid";
import "./App.css";


class App extends Component {
  render() {
    return (
    <div>
      <Jumbotron/>
        
          <Container>
            <Input/>
          <Row>
            <Col size="lg6">
              <form>
                        <h2>
                            Search for Articles
                        </h2>
                           <Button
                        onClick={this.handleFormSubmit}
                        type="primary"
                        className="input-md"
                      >
                        Search
                      </Button>
                      </form>
                    </Col>
                  </Row>
            </Container>
            <Container>      
              <Footer>
                    <p> NTY Scrapper </p>
              </Footer>
            </Container>
            
    </div>
    );
  }
}

export default App;

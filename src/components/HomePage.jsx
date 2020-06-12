import React from "react"
import {Container, Row, Col, Footer} from "react-bootstrap"



const HomePage = () => (
      <Container fluid>
        <Row>

          <Col xs={2} className="sidebar">
            <div>
              <img className="mt-4" id="logo"/>
            </div>



          <Row className="mt-4 nav-style">
            <Col>

              <div>
                <i className="fa fa-home"></i>
                <a className="ml-2">Home</a>
              </div>

              <div className="mt-3">
                <i className="fas fa-search"></i>
                <a className="ml-2">Search</a>
              </div>

              <div className="mt-3">
                <i className="fas fa-book-open"></i>
                <a  className="ml-2">Library</a>
              </div>
            </Col>
          </Row>




        <div className="fixed-bottom signin d-flex flex-column">
          <a style={{color: "black", backgroundColor: "white"}}>SIGN UP</a>
          <a style={{color: "lightgray", border: "1px solid lightgray"}}>LOGIN</a>
          <div className="ml-4">

            <a style={{fontSize: "10px", paddingRight: "1em", color: "lightgray"}}>Cookie Policy</a>
            <a style={{borderLeft: "1px solid lightgray", color: "lightgray", paddingLeft: "1em", fontSize: "10px"}}
              className="mb-4">Privacy</a>
          </div>
        </div>



      </Col>

      <Col xs={10} className="content">

        <div className="d-flex justify-content-center pt-4">
          <nav className="nav">
            <a className="nav-link active " >TRENDING</a>
            <a className="nav-link" >PODCAST</a>
            <a className="nav-link" >MOODS AND GENRES</a>
            <a className="nav-link" >NEW RELEASES</a>
            <a className="nav-link" >DISCOVER</a>
          </nav>
        </div>

        <Container>

          <h3 className="mt-5 mx-4 pl-3 mb-4">EMINEM</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 mt-3 mx-4 row-check"
            id="Eminem">
            
            


          </div>
          
        </Container>
        

        <Container>

          <h3 className="mt-5 mx-4 pl-3 mb-4">METALLICA</h3>
          <div className="row row-cols-6 mt-3 mx-4 row-check" id="Metallica">

          </div>
         
        </Container>

        <Container>

          <h3 className="mt-5 mx-4 pl-3 mb-4">BEHEMOTH</h3>
          <div className="row row-cols-6 mt-3 mx-4 row-check" id="Behemoth">

          </div>
          
        </Container>

        <Container>

          <h3 className="mt-5 mx-4 pl-3 mb-4">BEYONCEE</h3>
          <div className="row row-cols-6 mt-3 mx-4 row-check" id="Beyoncee">

          </div>
          
        </Container>



      </Col>

    </Row>
  </Container>
 
  
)


export default HomePage

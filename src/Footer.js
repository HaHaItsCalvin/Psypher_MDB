import React from "react";
  import { Col, Container, Row, Footer,NavLink } from "mdbreact";

const FooterLinks=[
  {
    Header:'About',
    Link:'/About',
  },
  {
    Header:'Partners',
    Link:'/Partners',
  },
  {
    Header:'Workshops',
    Link:'/Workshops',
  },
  {
    Header:'Resources',
    Link:'/Resources',
  },
]

  class FooterPagePro extends React.Component {
    render() {
    return (
  <Footer color="teal" className="font-small darken-3 pt-0">
  <Container fluid className="text-center text-md-left">
         <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
            {FooterLinks.map(item => (
            <Col md="2" className="b-3">
              <h6 className="title font-weight-bold">
                <NavLink to={item.Link}>{item.Header}</NavLink>
              </h6>
            </Col>
            ))}
            <Col md="2" className='b-3'>
              <h6 className="title font-weight-bold" style={{paddingTop:'9px'}}>
                <a href="/Home#ContactUs" style={{color:'white'}}>Contact Us</a>
              </h6>
            </Col>  
          </Row>

          <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
          <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
            <Col md="8" sm="12" className="mt-5">
              <p style={{ lineHeight: "1.7rem" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
              </p>
            </Col>
          </Row>
          <hr
            className="clearfix d-md-none rgba-white-light"
            style={{ margin: "10% 15% 5%" }}
          />
        <Row>
          <Col md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic" href="https://www.facebook.com/psypherLAofficial/" target="_blank">
                <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic" href="https://www.instagram.com/psypherla/" target="_blank">
                <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ytube-ic" href="https://www.youtube.com/channel/UC1OPKweUr8nS75zKuO_FMeA" target="_blank">
                <i className="fa fa-youtube fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; 2019 Copyright:{" "}
          <a href="/Home"> Psypher-LA.com </a>
          | All Rights Reserved
        </Container>
      </div>
    </Footer>
    );
  }
}

export default FooterPagePro;
import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import BackgroundPsypher from './GeneralMedia/Pictures/Psypher.png';
import { MDBTooltip } from 'mdbreact';

const navPsypher={
        height:35,
};

const socialMedia=[
  {
    icon:'youtube',
    link:'https://www.youtube.com/channel/UC1OPKweUr8nS75zKuO_FMeA',
  },
  {
    icon:'instagram',
    link:'https://www.instagram.com/psypherla/',
  },
  {
    icon:'facebook',
    link:'https://www.facebook.com/psypherLAofficial/',
  },
];

class NavBar extends React.Component {
state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  render() {
    return (
      <div style={{paddingBottom:'77px'}}>
      <Navbar color="black" dark expand="md" fixed='top'>
          <NavbarBrand>
            <NavLink to={process.env.PUBLIC_URL+'/'}><img src={BackgroundPsypher} style={navPsypher}/></NavLink>
          </NavbarBrand>
           <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
            <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to={process.env.PUBLIC_URL+'/'}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Partners">Partners</NavLink>
              </NavItem>              
              <NavItem>
                <NavLink to="/Workshops">Workshops</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle  nav caret>
                    <div className="d-none d-md-inline">Resources</div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default"right>
                    <NavLink to="/Resources">
                      <DropdownItem >Nearby Resources</DropdownItem>
                    </NavLink>
                    <NavLink to="/Schedule">
                      <DropdownItem>Schedule of Workshops</DropdownItem>
                    </NavLink>
                      <DropdownItem href="https://www.facebook.com/psypherucla/" target="_blank">
                       <MDBTooltip
                        placement="right"
                        tag="div"
                        tooltipContent="This link brings you to Psypher at UCLA's Facebook">
                             <b style={{paddingLeft:'20px'}}>Psypher at UCLA</b>
                        </MDBTooltip>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem style={{paddingTop:9, paddingLeft:4}}>
                <a href="/Home#ContactUs" style={{color:'white'}}>Contact Us</a>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
            {socialMedia.map(item=>(
              <NavItem>
                  <a href={item.link} target="_blank" style={{color:'white', padding:'10px'}}>
                    <Fa icon={item.icon} />
                  </a>
              </NavItem>
              ))}
            </NavbarNav>
          </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default NavBar;
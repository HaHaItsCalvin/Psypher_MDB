import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import BackgroundPsypher from './Psypher.png';

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
      <Navbar color="black" dark expand="md" >
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
                    <DropdownItem href="#!">Nearby Resources</DropdownItem>
                    <DropdownItem href="#!">Schedule</DropdownItem>
                    <DropdownItem href="#!">Psypher at UCLA </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
            {socialMedia.map(item=>(
              <NavItem>
                  <NavLink className="waves-effect waves-light" to={item.link}>
                    <Fa icon={item.icon} />
                  </NavLink>
              </NavItem>
              ))}
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
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
    isOpen: false
  };
  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar color="black" dark expand="md" >
          <NavbarBrand>
            <NavLink to="Home"><img src={BackgroundPsypher} style={navPsypher}/></NavLink>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="Home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="Partners">Partners</NavLink>
              </NavItem>              
              <NavItem>
                <NavLink to="Workshops">Workshops</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle  nav caret>
                    <div className="d-none d-md-inline">Resources</div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default"right>
                    <DropdownItem href="#!">Mental Health</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
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
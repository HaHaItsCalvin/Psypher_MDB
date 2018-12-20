import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import BackgroundPsypher from './Psypher.png';

const navPsypher={
        height:35,
};

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
                    <div className="d-none d-md-inline">Dropdown</div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default"right>
                    <DropdownItem href="#!">Action</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!"><Fa icon="google-plus" /></NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="user" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem href="#!">Action</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
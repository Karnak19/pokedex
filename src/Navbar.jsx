import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import usePokemon from './usePokemon';

function TheNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pokemons } = usePokemon(10);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar dark color="dark" expand="md">
      <NavbarBrand>Pokedex</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Pokemons
            </DropdownToggle>
            <DropdownMenu right>
              {pokemons.map((pokemon) => {
                return (
                  <DropdownItem tag={Link} to={`/${pokemon.name}`}>
                    {pokemon.name}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default TheNavbar;

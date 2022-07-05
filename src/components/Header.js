import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Whatchu looking for?"
            className="m-auto"
          />
          <Dropdown alignRight>
            <DropdownToggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{10}</Badge>
            </DropdownToggle>
            <DropdownMenu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is empty.</span>
            </DropdownMenu>
          </Dropdown>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;

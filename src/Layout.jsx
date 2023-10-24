import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";

export const StyledNav = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  transition: color 250ms linear;
  &.active {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Layout = () =>{
  return <Container>
  <header>
      <nav>
        <Link to={"/"}>
          <HiOutlineShoppingBag />
        </Link>
        <Menu>
          <li>
            <StyledNav to={"/"}>Home</StyledNav>
          </li>
          <li>
            <StyledNav to={"/about"}>About</StyledNav>
          </li>
          <li>
            <StyledNav to={"/products"}>Products</StyledNav>
          </li>
        </Menu>
      </nav>
    </header>
    <Outlet/>
</Container>
}


export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const Container = styled.div`
  max-width: 1200px;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  margin: 0 auto;

  header {
    padding: ${({ theme }) => theme.spacing(2)};
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li {
    text-transform: uppercase;
  }
`;

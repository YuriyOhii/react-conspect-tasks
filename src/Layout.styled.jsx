import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  transition: color 250ms linear;
  &.active {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const Layout = styled.div`
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

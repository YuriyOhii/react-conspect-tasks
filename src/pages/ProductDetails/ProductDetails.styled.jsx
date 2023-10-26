import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};

  transition: color 300ms;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

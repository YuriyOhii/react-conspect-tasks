import styled from "styled-components";

export const List = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(4)};
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: ${({ theme }) => theme.spacing(5)};
`;

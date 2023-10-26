import styled from "styled-components";

export const Box = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  max-width: 350px;
`;

export const Input = styled.input`
  border: unset;
`;

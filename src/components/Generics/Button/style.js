import styled from "styled-components";

export const Container = styled.button`
  transition: 1s;
  border: none;
  background: linear-gradient(278.99deg, #02a5e0 19.32%, #0000b0 105%);
  padding: 12px 20px;
  font-family: DM Sans;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  cursor: pointer;
  border-radius: ${({ $borderRadius }) => $borderRadius || "5px"};
  transition: 0.3s;
  width: ${({ width }) => width};
  &:hover {
    box-shadow: 0 0 10px #02a5e0;
  }
  &:active {
    transform: scale(0.97);
    opacity: 0.8;
  }
  @media (max-width: 700px) {
    padding: 8px 14px;
    letter-spacing: 0;
    font-size: 14px;
  }
`;

import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

const StyledSpinner = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 14.1px solid;
  border-color: #dbdcef;
  border-right-color: #512689;
  animation: ${SpinnerAnimation} 1s infinite linear;
`;

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;

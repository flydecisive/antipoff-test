import styled from "styled-components";

interface IStyledTextProps {
  color: string;
  align?: string;
  is_mobile?: string;
}

export const StyledSmallTitle = styled.h2<IStyledTextProps>`
  font-family: "Roboto Regular";
  font-weight: 400;
  font-size: ${(props) => (props.is_mobile === "true" ? "16px" : "20px")};
  line-height: normal;
  color: ${(props) => props.color};
  text-align: ${(props) => (props?.align === "center" ? "center" : "left")};
`;

export const StyledText = styled.p`
  font-family: "Roboto Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
  color: ${(props) => props.color};
`;

export const StyledSmallText = styled.p`
  font-family: "Roboto Regular";
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  color: ${(props) => props.color};
`;

export const StyledBigTitle = styled.h1<IStyledTextProps>`
  font-family: "Roboto Regular";
  font-weight: 400;
  font-size: ${(props) => (props.is_mobile === "true" ? "32px" : "64px")};
  line-height: normal;
  color: ${(props) => props.color};
`;

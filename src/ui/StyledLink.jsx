import styled, { keyframes } from "styled-components";
import {Link} from "react-router-dom";

// Smooth underline animation
const underline = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
`;

const StyledAnchor = styled(Link)`
  position: relative;
  color: ${(props) => props.color || "#2563eb"}; /* default: Tailwind blue-600 */
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.hoverColor || "#1d4ed8"}; /* darker blue */
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 100%;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export default StyledAnchor;

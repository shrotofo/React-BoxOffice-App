import styled from 'styled-components';
import { keyframes } from 'styled-components';

// Define the fadein keyframes
const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled-component with animation
const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadein} 0.3s ease-in forwards;
`;

export default FlexGrid;

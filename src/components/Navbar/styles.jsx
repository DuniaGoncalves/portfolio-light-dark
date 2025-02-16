import styled from 'styled-components';

export const NavWrapper = styled.nav`
  align-items: center;
  background: ${(props) => props.theme.secondaryBg};
  border-bottom: ${(props) => props.theme.accentBg};
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const NavH1 = styled.h1`
  font-size: 2.5rem;
`;

export const ThemeButton = styled.button`
  background: ${(props) => props.theme.buttonBg};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  
  svg {
    fill: ${(props) => props.theme.buttonText};
    stroke: ${(props) => props.theme.buttonText};
  }
`;
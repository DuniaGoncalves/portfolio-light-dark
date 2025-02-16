import styled from "styled-components";
import { Link } from 'react-router-dom'

// Section Wrapper
export const Section = styled.section`
  background: ${(props) => props.theme.primaryBg};
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
  max-width: 70rem;
  padding: 20px;
  transition: background 0.3s ease-in-out;
`;

// Headings
export const SectionTitleH2 = styled.h2`
  border-bottom: 2px solid ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.primaryText};
  font-size: 2rem;
  margin-bottom: 15px;
  padding-bottom: 5px;
`;

export const SectionTitleH3 = styled.h3`
  color: ${(props) => props.theme.primaryText};
  font-size: 1.8rem;
  margin-bottom: 15px;
`;


// Paragraphs
export const Paragraph = styled.p`
  color: ${(props) => props.theme.secondaryText};
  font-size: 1.1rem;
  line-height: 1.6;
`;

// Contact Links
export const ContactLink = styled.a`
  color: ${(props) => props.theme.accentColor};
  display: block;
  font-size: 1.1rem;
  margin-bottom: 8px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.linkHover};
    text-decoration: underline;
  }

  &:focus {
    outline: 2px dashed ${(props) => props.theme.linkHover}; 
    outline-offset: 3px;
  }

  &:active {
    color: ${(props) => props.theme.linkActive};
    transform: scale(0.98);
  }
`;

// Portfolio

export const PortfolioWrapper = styled(Section)`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;


export const PortfolioItem = styled.div`
  background: ${(props) => props.theme.secondaryBg};
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  
  div {
    display: flex;
    justify-content: space-around;
  }
`;

export const ButtonLink = styled(Link)`
  background: ${(props) => props.theme.buttonBg};
  border-radius: 8px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.buttonText};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 20px;
  text-decoration: none;
  transition: background 0.3s ease-in-out, transform 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.linkHover};
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px dashed ${(props) => props.theme.accentColor};
    outline-offset: 3px;
  }

  &:active {
    background: ${(props) => props.theme.linkActive};
    box-shadow: none;
    transform: translateY(2px);
  }
`;

// Footer
export const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.secondaryBg};
  border-top: 2px solid ${(props) => props.theme.accentColor};
  padding: 20px;
  text-align: center;
`;
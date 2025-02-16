import { Section, SectionTitleH2, SectionTitleH3, Paragraph } from "./styles/styles";

const About = () => {
  return (
    <Section>
      <SectionTitleH2>About Me</SectionTitleH2>
      <Paragraph>Hi, I’m Dunia Goncalves, a frontend developer with over four years of experience crafting responsive and accessible web applications. My journey into tech began with a love for coding that I discovered while teaching English as a Second Language. Since then, I’ve specialized in creating user-friendly interfaces using technologies like HTML5, CSS3, JavaScript, TypeScript, and React.
      </Paragraph>
      <SectionTitleH3>What Drives Me</SectionTitleH3>
      <Paragraph>I’m passionate about the balance between creativity and logic in frontend development. Designing seamless, aesthetically pleasing interfaces while optimizing performance energizes me. Collaboration and continuous learning fuel my growth, and I’m excited about expanding my skill set to full-stack development to build holistic, impactful digital experiences.</Paragraph>
      <SectionTitleH3>Outside of Code</SectionTitleH3>
      <Paragraph>When I’m not developing, I enjoy mentoring aspiring developers, exploring new tech tools, and spending quality time with my family. Whether guiding a team or taking on new challenges, I’m always striving to create meaningful work that connects people through technology.</Paragraph>
    </Section>
  );
};

export default About;

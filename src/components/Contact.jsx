import { Section, SectionTitleH2, ContactLink } from "./styles/styles";

const Contact = () => {
  return (
    <Section>
      <SectionTitleH2>Contact Me</SectionTitleH2>
      <ContactLink href="mailto:duniaimara@gmail.com">Email: duniaimara@gmail.com</ContactLink>
      <ContactLink href="https://linkedin.com/in/dunia-goncalves" target="_blank">
        LinkedIn: linkedin.com/in/dunia-goncalves
      </ContactLink>
      <ContactLink href="https://github.com/DuniaGoncalves" target="_blank">
        GitHub: github.com/DuniaGoncalves
      </ContactLink>
    </Section>
  );
};

export default Contact;

import { PortfolioWrapper, SectionTitleH3, Paragraph, ButtonLink, PortfolioItem } from "./styles/styles";
const Portfolio = () => {
  const projects = [
    {
      title: "Decor & Rentals",
      description: "An Events website that showcases company's skills in design.",
      liveLink: "https://decorandrentals.netlify.app/",
      codeLink: "https://github.com/DuniaGoncalves/decor-rentals-site",
    },
    {
      title: "Project B",
      description: "A website with dynamic animations, showcasing my design and coding skills.",
      liveLink: "#",
      codeLink: "https://github.com/DuniaGoncalves",
    },
    {
      title: "Project C",
      description: "A website with dynamic animations, showcasing my design and coding skills.",
      liveLink: "https://decorandrentals.netlify.app/",
      codeLink: "https://github.com/DuniaGoncalves",
    },
  ];

  return (
    <PortfolioWrapper>
        {projects.map((project, index) => (
          <PortfolioItem
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <SectionTitleH3>{project.title}</SectionTitleH3>
            <Paragraph>{project.description}</Paragraph>
            <div>
              <ButtonLink as="a" href={project.liveLink} target="_blank" rel="noopener noreferrer">View Project</ButtonLink>
              <ButtonLink as="a" href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</ButtonLink>
            </div>
          </PortfolioItem>
        ))}
    </PortfolioWrapper>
  );
};

export default Portfolio;

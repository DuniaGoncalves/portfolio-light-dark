const Portfolio = ({ theme }) => {
  const projects = [
    {
      title: "Decor & Rentals",
      description: "A portfolio website with dynamic animations, showcasing my design and coding skills.",
      liveLink: "https://decorandrentals.netlify.app/",
      codeLink: "https://github.com/DuniaGoncalves/decor-rentals-site",
    },
    {
      title: "Decor & Rentals",
      description: "A portfolio website with dynamic animations, showcasing my design and coding skills.",
      liveLink: "https://decorandrentals.netlify.app/",
      codeLink: "https://github.com/DuniaGoncalves/decor-rentals-site",
    },
    {
      title: "Decor & Rentals",
      description: "A portfolio website with dynamic animations, showcasing my design and coding skills.",
      liveLink: "https://decorandrentals.netlify.app/",
      codeLink: "https://github.com/DuniaGoncalves/decor-rentals-site",
    },
  ];

  return (
    <section className={`portfolio ${theme}`}>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Project</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

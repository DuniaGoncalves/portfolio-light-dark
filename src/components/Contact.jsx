const Contact = ({ theme }) => {
  return (
    <section className={`contact ${theme}`}>
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:duniaimara@gmail.com">duniaimara@gmail.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/dunia-goncalves" target="_blank" rel="noopener noreferrer">linkedin.com/in/dunia-goncalves</a></p>
      <p>GitHub: <a href="https://github.com/DuniaGoncalves" target="_blank" rel="noopener noreferrer">github.com/DuniaGoncalves</a></p>
    </section>
  );
};

export default Contact;

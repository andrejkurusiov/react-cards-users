const Footer = () => {
  const footerStyle = {
    color: "gray",
    fontStyle: "italic",
    fontSize: 16,
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>
        React exercise with hooks and API usage. Andrej Kurusiov, 2020.&nbsp;
        <a
          href="https://github.com/andrejkurusiov/react-cards-users"
          target="_blank"
          rel="noreferrer"
        >
          Github page
        </a>
      </em>
    </div>
  );
};

export default Footer;

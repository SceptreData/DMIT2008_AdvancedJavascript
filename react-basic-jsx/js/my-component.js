"use strict";

const greetingStyles = {
  padding: "10px",
  border: "1px solid black",
  backgroundColor: "lightgrey",
  color: "#333"
};

// Most basic simple (function) React JSX Component
const Greeting = ({ name, date }) => (
  <div style={greetingStyles}>
    <h1 className="hero">Hello {name}</h1>
    <p>
      It is: <time>{date}</time>
    </p>
    <p>welcome to version{React.version}</p>
  </div>
);

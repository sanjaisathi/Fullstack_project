import "./css/Home.css";

var Home = () => {
  var titleStyle = {
    fontSize: "50px",
    textAlign: "center",
    color: "#FF6347",  // Tomato color for a vibrant look
    textDecoration: "underline",
    fontWeight: "bold",
  };

  var aboutStyle = {
    fontSize: "25px",
    textAlign: "center",
    color: "#2F4F4F",  // DarkSlateGray for readability
    marginTop: "20px",
  };

  return (
    <div className="home-container">
      <h1 style={titleStyle} id="home-title">
        Welcome to Sanjai Website
      </h1>
      <p style={aboutStyle}>
      I am Sanjai, a dedicated Computer Science student with a strong passion for web development and artificial intelligence. My goal is to develop innovative solutions that address real-world challenges, combining my technical skills and creative problem-solving abilities to make a meaningful impact in the field of technology.
      </p>
    </div>
  );
};

export default Home;

const Home = () => {
  const title = "First Writing in React";
  const language = "HTML, CSS and JS";
  const fbLink = "http://www.facebook.com/resujeff27";

  return (
    <div className="Home">
      <h1> {title} </h1>
      <p>Implementing my {language} skills in React App.</p>
      <p>
        My{" "}
        <a href={fbLink} target="_blank">
          Facebook account{" "}
        </a>
        here.
      </p>
    </div>
  );
};

export default Home;

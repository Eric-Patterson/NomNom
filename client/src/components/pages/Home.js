// import cat from "./cats.jpeg";
// import test from "/public/cat.jpeg";
const Home = () => {
  return (
    <div>
      Home Page - Needs styling and added content - Eric will complete this
      later this week
      <div>
        <img src={process.env.PUBLIC_URL + "/cat.jpeg"} />
        {/* <img src={cat} alt="Logo" />; // <img src={cat} alt="Logo" />; */}
      </div>
    </div>
  );
};

export default Home;

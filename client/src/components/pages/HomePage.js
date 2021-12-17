
import "../Home.css";

const Home = () => {
  return (
    <div className="container-home">
      <div className="text">
        <h2>What is NomNom?</h2>
        We are a virtual community foodbank application that removes the middle man and cuts labour
        costs like warehouse storage and staffing.
      </div>

      <div className="main-background">
        <img src={process.env.PUBLIC_URL + "/people.png"} />
        {/* <img src={cat} alt="Logo" />; // <img src={cat} alt="Logo" />; */}
      </div>
    </div>
  );
};

export default Home;

// import cat from "./cats.jpeg";
// import test from "/public/cat.jpeg";
import FormLogin from "../../components/signup/FormLogin";
import "../Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="text">
        <h2>What is NomNom?</h2>
        We are a virtual foodbank that removes the middle man and cuts labour
        costs like warehouse storage and staffing.
      </div>

      {/* <div>
        <FormLogin />
      </div> */}

      <div className="main-background">
        <img src={process.env.PUBLIC_URL + "/people.png"} />
        {/* <img src={cat} alt="Logo" />; // <img src={cat} alt="Logo" />; */}
      </div>
    </div>
  );
};

export default Home;

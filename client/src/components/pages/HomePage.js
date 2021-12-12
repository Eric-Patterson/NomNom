// import cat from "./cats.jpeg";
// import test from "/public/cat.jpeg";
import "../Home.css"


const Home = () => {
  return (
      <div className="text">
What we do: We are a virtual foodbank that removes the middle man and cuts labour 
costs like warehouses storage and staff.
     
      <div className="main-background">
      <img src={process.env.PUBLIC_URL + "/people.png"} />
        {/* <img src={cat} alt="Logo" />; // <img src={cat} alt="Logo" />; */}
      </div>
    </div>
  );
};

export default Home;

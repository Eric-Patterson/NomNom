import "../About.css";

function AboutPage() {
  return (
    <div className="container">
      <h2 className="title">
        Our mission is to taret and solve community hunger through the
        contributions, involvement and care of our community.{" "}
      </h2>


      <div className="centerImg">
        {/* <img src={process.env.PUBLIC_URL + "/donationbox.jpg"} /> */}
      </div>

      <div className="whoWeAre">
        Who we are: We are called "Java Chips" and we are awesome. Our team
        includes: Eric, Ali, Mahmuda, and Hannah.
      </div>
    </div>
  );
}

export default AboutPage;

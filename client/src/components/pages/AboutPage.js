import "../About.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h2 className="title-text">
        Our mission is to target and solve community hunger through the
        contributions, involvement and care of our community.
      </h2>

      <div className="bodyText1">
        We believe that nobody should go to bed hungry. That's why we created an
        app that allows neighbours and businesses who want to help their
        community give freely and conveniently without the extra costly
        requirements of a food storage warehouse or warehouse worker cost.
      </div>

      <div className="bodyText2">
        <h2 className="t2title"> How does it work?</h2>
        Any registered donor can donate both perishable and non-perishable food
        items to our virtual foodbank that is within their located community. No
        physical transaction happens until the selected food items from the
        virtual inventory has been confirmed. After the transaction has been
        confirmed, third party volunteers will follow the chosen date and time
        to pick up the food from donors and place them in designated community
        food lockers. Once the food is in their specific locker, a confirmation
        email/text will be sent to donation receiver that their food is ready
        for pick up with the locker combination. Each order that has been placed
        in the locker has to be picked up within 3 hours or the food will be
        discarded.
      </div>

      <div className="centerImg">
        <img src={process.env.PUBLIC_URL + "/donationbox.jpg"}/>
      </div>

      <div className="whoWeAre">
        Who are we:<br /> 
        We are called "Java Chips". <br /> 
        Our team includes: Eric, Ali, Mahmuda, and Hannah.
        <br /> We are awesome.
      </div>
    </div>
  );
}

export default AboutPage;

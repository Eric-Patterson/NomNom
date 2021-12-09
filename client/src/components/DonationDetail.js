import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Donations from "./Donations";
import "./DonationDetail.css";

const DonationDetail = () => {
  const [donate, setDonate] = useState();
  const navigate = useNavigate();
  // const [details, setDetails] = useState();

  useEffect(() => {
    const fetchDonation = async () => {
      let fetchResult = await fetch("/api/donation/");
      let fetchedDonate = await fetchResult.json();
      // console.log(fetchedDonate);
      setDonate(fetchedDonate);
    };
    fetchDonation();
  }, []);

  // async function selectDonation(id) {
  //   await fetch("/api/donation/" + id, {
  //     method: "GET",
  //   });
  //   navigate("/donation/" + id);
  // }

  function selectDonation(id) {
    console.log("selected donation id", id);
    navigate("/donation/" + id);
    // setSelectedDonationId(id);
  }

  // { setSelectedDonationId }
  // function selectDonation(id) {
  //   // console.log('selectSuperhero called on id', id )
  //   setSelectedDonationId(id);
  // }

  return (
    <main>
      <div className="donate-container">
        {donate?.map((donates, index) => (
          <Donations
            key={index}
            // on click does stuff with this id of the donation
            donationSelected={() => selectDonation(donates._id)}
            food={donates?.foodType}
            servings={donates?.numberOfServings}
            ingredients={donates?.ingredients}
            disclaimer={donates?.disclaimer}
            cookingInstructions={donates?.cookingInstructions}
            radio={donates?.radio}
            date={donates?.date}
          />
        ))}
      </div>
    </main>
  );
};

export default DonationDetail;

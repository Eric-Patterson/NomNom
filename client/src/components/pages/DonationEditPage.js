// import { useNavigate } from "react-router-dom";
// import DonationDetail from "../DonationDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./DonationEditPage.css";
const DonationEditPage = (props) => {
  const navigate = useNavigate();
  let params = useParams();
  let donationId = params.id;

  const [donate, setDonate] = useState();

  useEffect(() => {
    const fetchDonation = async () => {
      let fetchResult = await fetch("/api/donation/" + donationId);
      let fetchedDonate = await fetchResult.json();
      // console.log(fetchedDonate);
      setDonate(fetchedDonate);
    };
    fetchDonation();
  }, [donationId]);

  async function deleteDonation(id) {
    await fetch("/api/donation/" + donationId, {
      method: "DELETE",
    });
    navigate("/details");
  }

  return (
    <div className="donation-edit-container">
      <div className="food-object-id">
        {/* <div>{donationId}</div> */}
        <div>
          <span>Food Type: </span>
          {donate?.foodType}
        </div>
        <div>
          <span>Servings: </span>
          {donate?.numberOfServings}
        </div>
        <div>
          <span>Disclaimer: </span>
          {donate?.disclaimer}
        </div>
        <div>
          <span>Ingredients: </span>
          {donate?.ingredients}
        </div>
        <div>
          <span>Cooking Instructions: </span>
          {donate?.cookingInstructions}
        </div>
        <div>
          <span>Date Submitted: </span>
          {donate?.date}
        </div>
        <div>{donate?.radio}</div>
        <div className="delete-container">
          <button className="deleteButton" onClick={() => deleteDonation()}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default DonationEditPage;

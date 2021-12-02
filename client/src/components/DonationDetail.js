import { useEffect, useState } from "react";
import "./DonationDetail.css";

const DonationDetail = ({ donationId }) => {
  const [donate, setDonate] = useState();

  useEffect(() => {
    const fetchDonation = async () => {
      let fetchResult = await fetch("/api/donation/" + donationId);
      let fetchedDonate = await fetchResult.json();
      console.log(fetchedDonate);
      setDonate(fetchedDonate);
    };
    fetchDonation();
  }, [donationId]);

  return (
    <div>
      <h2>Donation Detail</h2>
      <div className="detail-fields">
        <div className="field-title">foodtype</div>
        <div className="field-value">{donate.foodType}</div>
        {/* <div className="field-title">number of servings</div>
        <div className="field-value">{donate.numberofservings}</div>
        <div className="field-title">cooking insructions</div>
        <div className="field-value">{donate.cookinginstructions}</div>
        <div className="field-title">disclaimer</div>
        <div className="field-value">{donate.disclaimer}</div>
        <div className="field-title">agree</div>
        <div className="field-value">{donate.agree}</div>
        <div className="field-title">Ingredients</div>
        <ul className="field-value">
          {donate.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default DonationDetail;

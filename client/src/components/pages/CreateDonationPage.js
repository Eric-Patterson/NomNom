import { useNavigate } from "react-router-dom";

import DonationForm from "../forms/DonationForm";

const CreateDonationPage = () => {
  let navigate = useNavigate();

  async function createSuperhero(donationInfo) {
    await fetch("/api/donationForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donationInfo),
    });
    navigate("/");
  }

  return <DonationForm onSave={createSuperhero} />;
};

export default CreateDonationPage;

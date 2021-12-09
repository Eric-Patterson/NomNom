import { useNavigate } from "react-router-dom";
import PickupForm from "../forms/PickupForm";

function PickupFormPage() {
  const navigate = useNavigate();

  function setSelectedDonationId(id) {
    navigate("/donation/" + id);
  }

  return <PickupForm setSelectedDonationId={setSelectedDonationId} />;
}

export default PickupFormPage;

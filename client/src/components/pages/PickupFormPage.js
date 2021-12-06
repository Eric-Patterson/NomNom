import { useParams } from "react-router-dom";

import DonationDetail from "../DonationDetail";
function PickupFormPage() {
  let params = useParams();
  return (
    <div>
      <DonationDetail donationId={params.id} />
    </div>
  );
}

export default PickupFormPage;

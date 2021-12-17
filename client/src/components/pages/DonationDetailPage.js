import { useParams } from "react-router-dom";

import DonationDetail from "../DonationDetail";

import "./detailspage.css";

const DonationDetailPage = () => {
  let params = useParams();

  return (
    <div className="details-container">
      {console.log(params.id)}
      <DonationDetail donationId={params.id} />
      {/* <Link to="edit"> EDIT </Link> */}
    </div>
  );
};
export default DonationDetailPage;

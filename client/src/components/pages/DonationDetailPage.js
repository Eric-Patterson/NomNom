import { useParams } from "react-router-dom";

import DonationDetail from "../DonationDetail";

const DonationDetailPage = () => {
  let params = useParams();

  return (
    <div>
      {console.log(params.id)}
      <DonationDetail donationId={params.id} />
      {/* <Link to="edit"> EDIT </Link> */}
    </div>
  );
};
export default DonationDetailPage;

import { useParams } from "react-router-dom";

import DonationDetail from "../DonationDetail";

const DonationDetailPage = () => {
  let params = useParams();

  return (
    <div>
      <DonationDetail id={params.id} />

    </div>
  );
};
export default DonationDetailPage;

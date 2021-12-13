import { Link } from "react-router-dom";
import "./ErrorPage.css"

function ErrorPage() {
  return (
    <p>
      <h3>Page not available, please go back to <Link to="/">Home</Link></h3>

      <div className="centerImg">
        <img src={process.env.PUBLIC_URL + "/cat.jpeg"} />
      </div>

    </p>
  );
}

export default ErrorPage;

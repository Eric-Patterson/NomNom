import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <p>
      Page not available, please go back to <Link to="/">Home</Link>
    </p>
  );
}

export default ErrorPage;

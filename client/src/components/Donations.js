import "./Donations.css";

function Donations(props) {
  const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(props.date).toLocaleString("en-US", {
    year: "numeric",
  });
  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }
  return (
    // on click selects id
    <div className="food-object" onClick={() => props.donationSelected()}>
      {/* need to map over ingreddients*/}
      <div>
        <span>Food Type: </span>
        {props.food}
      </div>
      <div>
        <span>Servings: </span>
        {props.servings}
      </div>
      <div>
        <span>Ingredients: </span>
        {props.ingredients}
      </div>
      <div>
        <span>Disclaimer: </span>
        {props.disclaimer}
      </div>
      <div>
        <span>Cooking Instructions: </span>
        {props.cookingInstructions}
      </div>
      <div>
        <span>Date Submitted: </span>
        {`${month} ${day} ${year}`}
      </div>
    </div>
  );
}

export default Donations;

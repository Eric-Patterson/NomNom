function Donations(props) {
  const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(props.date).toLocaleString("en-US", {
    year: "numeric",
  });
  return (
    <div className="submited-container">
      {/* need to map over ingreddients*/}

      <div>{props.food} Food</div>
      <div>{props.servings} servings</div>
      <div>{props.ingredients} ingredients</div>
      <div>{props.disclaimer} disclaimer</div>
      <div>{props.cookingInstructions} cookingInstructions</div>
      <div>{`${props.radio} This day - ${month} ${day} ${year}`}</div>
    </div>
  );
}

export default Donations;

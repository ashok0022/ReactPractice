const RestrauntCard = (props) => {
  const { restaurant } = props;

  let imageUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    <div className="card">
      <img src={imageUrl + restaurant.cloudinaryImageId} />
      <h2>{restaurant.name}</h2>
      <h3>{restaurant.cuisines[0]}</h3>
      <h4>{restaurant.avgRating} stars</h4>
    </div>
  );
};

export default RestrauntCard;

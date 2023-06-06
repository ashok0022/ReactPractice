const RestrauntCard = (props) => {
  const { restaurant } = props;

  let imageUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  return (
    //dynamic styling using tailwindcss
    <div className="w-[200px] p-5 m-5 shadow-lg bg-pink-50 hover:w-56">
      <img src={imageUrl + restaurant.cloudinaryImageId} />
      <h2 className="font-bold text-xl">{restaurant.name}</h2>
      <h3>{restaurant.cuisines[0]}</h3>
      <h4>{restaurant.avgRating} stars</h4>
    </div>
  );
};

export default RestrauntCard;

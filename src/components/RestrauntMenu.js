import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageUrl } from "../constants";
import useRestaurant from "../utils/useRestaurant";

const RestrauntMenu = () => {
  const { id } = useParams(); //useParams is a hook that returns an object of key value pairs of all the dynamic params in the url

  const menu = useRestaurant(id);

  return (
    <div>
      <h1>Restraunt id : {id}</h1>
      <h2>{menu.name}</h2>
      <img src={imageUrl + menu.cloudinaryImageId} />
      <h3>{menu.areaName}</h3>
      <h3>{menu.city}</h3>
      <h3>{menu.avgRating} Stars</h3>
      <h3>{menu.costForTwoMessage} </h3>
    </div>
  );
};

export default RestrauntMenu;

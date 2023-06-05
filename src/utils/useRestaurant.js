import React, { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

//we are making a custom hook to get the restaurant data

const useRestaurant = (id) => {
  const [menu, setMenu] = useState({});
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(FETCH_MENU_URL + id);

    const json = await data.json();
    setMenu(json.data.cards[0].card.card.info);
  }

  return menu;
};

export default useRestaurant;

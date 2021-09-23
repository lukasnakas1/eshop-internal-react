import axios from "axios";
import { useState, useEffect } from "react";

const useShop = () => {
  const baseUrl = "http://localhost:3000/shop";
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    fetchShopItems();
  }, []);

  const fetchShopItems = () => {
    axios.get(baseUrl).then((response) => {
      console.log(response.data);
      setShopItems(response.data);
    });
  };

  const addShopItem = (requestBody) => {
    axios.post(baseUrl, requestBody).then((response) => {
      console.log(response);
      fetchShopItems();
    });
  };

  const editShopItem = (itemId, requestBody) => {
    console.log(`Editting item with ID[${itemId}]. Request body:`);
    console.table(requestBody);
    axios.put(`${baseUrl}/${itemId}`, requestBody).then((response) => {
      console.log(response);
      fetchShopItems();
    });
  };

  const deleteShopItem = (itemId) => {
    console.log(`Deleting item with ID[${itemId}]`);
    axios.delete(`${baseUrl}/${itemId}`).then((response) => {
      console.log(response);
      fetchShopItems();
    });
  };

  return {
    shopItems,
    addShopItem,
    editShopItem,
    deleteShopItem,
  };
};

export default useShop;

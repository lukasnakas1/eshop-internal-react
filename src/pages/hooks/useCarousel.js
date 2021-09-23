import axios from "axios";
import { useState, useEffect } from "react";

const noDataItem = {
  id: 0,
  imgPath: "images/no-image.png",
  make: "No data",
  model: "",
  price: 0,
};

const useCarousel = () => {
  const baseUrl = "http://localhost:3000/carousel";
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    fetchCarouselItems();
  }, []);

  const fetchCarouselItems = () => {
    axios.get(baseUrl).then((response) => {
      console.log(response.data);
      if (response.data.length) {
        setCarouselItems(response.data);
      } else {
        setCarouselItems([noDataItem]);
      }
    });
  };

  const addCarouselItem = (requestBody) => {
    axios.post(baseUrl, requestBody).then((response) => {
      console.log(response);
      fetchCarouselItems();
    });
  };

  const deleteCarouselItem = (itemId) => {
    console.log(`Deleting item with ID[${itemId}]`);
    axios.delete(`${baseUrl}/${itemId}`).then((response) => {
      console.log(response);
      fetchCarouselItems();
    });
  };

  return {
    carouselItems,
    addCarouselItem,
    deleteCarouselItem,
  };
};

export default useCarousel;

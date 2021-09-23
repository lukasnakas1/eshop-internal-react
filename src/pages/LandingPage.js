import { Container, Col, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import FeaturedVehicles from "./components/featured-vehicles/FeaturedVehicles";
import ShopItems from "./components/shop-items/ShopItems";
import useShop from "./hooks/useShop";
import "./LandingPage.css";
import useCarousel from "./hooks/useCarousel";
import { useState } from "react";
import CarDetailsModal from "./components/modal/CarDetailsModal";
import ModalBodyUpdate from "./components/modal/modal-body/ModalBodyUpdate";

const DEFAULT_FORM_VALUES = {
  make: "",
  model: "",
  power: undefined,
  price: undefined,
  topSpeed: undefined,
};

const LandingPage = () => {
  const { shopItems, addShopItem, editShopItem, deleteShopItem } = useShop();
  const { carouselItems, addCarouselItem, deleteCarouselItem } = useCarousel();
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState(DEFAULT_FORM_VALUES);

  const handleAdd = (event) => {
    event.preventDefault();
    const requestBody = {
      imgPath: "images/no-image.png",
      make: values.make,
      model: values.model,
      power: values.power,
      topSpeed: values.topSpeed,
      price: values.price,
    };
    addShopItem(requestBody);
    closeModal();
  };

  const featureShopItem = (item) => {
    if (isItemFeatured(item.id)) {
      deleteCarouselItem(item.id);
    } else {
      const requestBody = {
        id: item.id,
        imgPath: item.imgPath,
        make: item.make,
        model: item.model,
        price: item.price,
      };
      addCarouselItem(requestBody);
    }
  };

  const isItemFeatured = (itemId) => {
    return carouselItems.filter((carouselItem) => carouselItem.id === itemId)
      .length;
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setValues(DEFAULT_FORM_VALUES);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <CarDetailsModal
        values={values}
        setValues={setValues}
        show={modalOpen}
        closeModal={closeModal}
        onSubmit={handleAdd}
        modalBody={
          <ModalBodyUpdate
            values={values}
            setValues={setValues}
            handleChange={handleChange}
          />
        }
        action="Add"
      />
      <Row>
        <Col>
          <FeaturedVehicles carouselItems={carouselItems} />
        </Col>
      </Row>
      <Row className="add-new-car-btn">
        <Col className="text-center">
          <Button variant="contained" onClick={openModal}>
            Add new car
          </Button>
        </Col>
      </Row>
      <Row className="shop-items-section">
        <Col className="text-center shop-items">
          <ShopItems
            shopItems={shopItems}
            editShopItem={editShopItem}
            deleteShopItem={deleteShopItem}
            deleteCarouselItem={deleteCarouselItem}
            featureShopItem={featureShopItem}
            isItemFeatured={isItemFeatured}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;

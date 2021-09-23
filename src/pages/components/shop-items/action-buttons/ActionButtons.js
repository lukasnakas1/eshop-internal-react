import { Col, Row } from "react-bootstrap";
import CarDetailsModal from "../../modal/CarDetailsModal";
import { useState } from "react";
import "./ActionButtons.css";
import ModalBodyDelete from "./modal-body/ModalBodyDelete";
import ModalBodyUpdate from "../../modal/modal-body/ModalBodyUpdate";

const ActionButtons = ({
  shopItem,
  editShopItem,
  deleteShopItem,
  deleteCarouselItem,
  featureShopItem,
  isItemFeatured,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState({
    make: shopItem.make,
    model: shopItem.model,
    power: shopItem.power,
    price: shopItem.price,
    topSpeed: shopItem.topSpeed,
  });
  const [action, setAction] = useState("");

  const handleFeature = () => {
    console.log(`ID[${shopItem.id}]: Feature triggered.`);
    featureShopItem(shopItem);
  };

  const handleEdit = () => {
    const requestBody = {
      imgPath: "images/no-image.png",
      make: values.make,
      model: values.model,
      power: values.power,
      topSpeed: values.topSpeed,
      price: values.price,
    };
    editShopItem(shopItem.id, requestBody);
    closeModal();
  };

  const handleDelete = () => {
    if (isItemFeatured) {
      deleteCarouselItem(shopItem.id);
    }
    deleteShopItem(shopItem.id);
    closeModal();
  };

  const handleSubmit = () => {
    if (action === "Update") {
      handleEdit();
    } else if (action === "Delete") {
      handleDelete();
    } else {
      return;
    }
  };

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const openModalEdit = () => {
    setAction("Update");
    setModalOpen(true);
  };

  const openModalDelete = () => {
    setAction("Delete");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getModalBody = () => {
    return action === "Update" ? (
      <ModalBodyUpdate
        values={values}
        setValues={setValues}
        handleChange={handleChange}
      />
    ) : (
      <ModalBodyDelete shopItem={shopItem} />
    );
  };

  return (
    <Row className="justify-content-end">
      <CarDetailsModal
        values={values}
        setValues={setValues}
        show={modalOpen}
        closeModal={closeModal}
        onSubmit={handleSubmit}
        modalBody={getModalBody()}
        action={action}
      />
      <Col className="text-end actions-buttons">
        <img
          className="action-button"
          src={`images/feature-${
            isItemFeatured(shopItem.id) ? "" : "un"
          }checked.png`}
          alt="Feature"
          onClick={handleFeature}
        />
        <img
          className="action-button"
          src="images/edit.png"
          alt="Edit"
          onClick={openModalEdit}
        />
        <img
          className="action-button"
          src="images/delete.png"
          alt="Delete"
          onClick={openModalDelete}
        />
      </Col>
    </Row>
  );
};

export default ActionButtons;

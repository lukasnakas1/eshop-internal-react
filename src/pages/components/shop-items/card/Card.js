import { Col } from "react-bootstrap";
import ActionButtons from "../action-buttons/ActionButtons";
import "./Card.css";

const Card = ({
  shopItem,
  editShopItem,
  deleteShopItem,
  deleteCarouselItem,
  featureShopItem,
  isItemFeatured,
}) => {
  return (
    <Col xs={12} md={6} lg={4} xxl={3} key={shopItem.id}>
      <div className="shop-item">
        <ActionButtons
          shopItem={shopItem}
          editShopItem={editShopItem}
          deleteShopItem={deleteShopItem}
          deleteCarouselItem={deleteCarouselItem}
          featureShopItem={featureShopItem}
          isItemFeatured={isItemFeatured}
        />
        <img
          src={shopItem.imgPath}
          alt={`${shopItem.make}_${shopItem.model}`}
        />
        <p>{`Name: ${shopItem.make} ${shopItem.model}`}</p>
        <p>{`Power: ${shopItem.power}`}</p>
        <p>{`Top speed: ${shopItem.topSpeed}`}</p>
        <h3>{`Price: ${shopItem.price}`}</h3>
      </div>
    </Col>
  );
};

export default Card;

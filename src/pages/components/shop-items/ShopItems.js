import { Row } from "react-bootstrap";
import Card from "./card/Card";

const ShopItems = ({
  shopItems,
  editShopItem,
  deleteShopItem,
  deleteCarouselItem,
  featureShopItem,
  isItemFeatured,
}) => {
  return (
    <Row className="justify-content-center">
      {shopItems.map((shopItem) => (
        <Card
          shopItem={shopItem}
          editShopItem={editShopItem}
          deleteShopItem={deleteShopItem}
          deleteCarouselItem={deleteCarouselItem}
          featureShopItem={featureShopItem}
          isItemFeatured={isItemFeatured}
        />
      ))}
    </Row>
  );
};

export default ShopItems;

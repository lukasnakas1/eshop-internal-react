import "./ModalBodyDelete.css";

const ModalBodyDelete = ({ shopItem }) => {
  return (
    <div>
      <h5 className="title">Are you sure you want to delete this car?</h5>
      <p>
        <b>Make:</b> {shopItem.make}
      </p>
      <p>
        <b>Model:</b> {shopItem.model}
      </p>
      <p>
        <b>Power:</b> {shopItem.power}
      </p>
      <p>
        <b>Top speed:</b> {shopItem.topSpeed}
      </p>
      <p>
        <b>Price:</b> {shopItem.price}
      </p>
    </div>
  );
};

export default ModalBodyDelete;

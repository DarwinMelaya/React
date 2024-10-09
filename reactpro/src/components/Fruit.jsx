const Fruit = ({ name, price, emoji, soldout }) => {
  return (
    <>
      <li>
        {emoji} {name} {price} {soldout ? "soldOut" : ""}
      </li>
    </>
  );
};

export default Fruit;

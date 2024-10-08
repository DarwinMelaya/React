import Fruit from "./Fruit";

const Fruits = () => {
  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
    },
    {
      name: "Mango",
      price: 20,
      emoji: "🥭",
    },
    {
      name: "Banana",
      price: 30,
      emoji: "🍌",
    },
    {
      name: "Orange",
      price: "40",
      emoji: "🍊",
    },
    {
      name: "Pineapple",
      price: "50",
      emoji: "🍍",
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;

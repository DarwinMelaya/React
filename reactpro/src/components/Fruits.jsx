const Fruits = () => {
  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: "🍎",
    },
    {
      name: "Mango",
      price: 30,
      emoji: "🥭",
    },
    {
      name: "Banana",
      price: 10,
      emoji: "🍌",
    },
    {
      name: "Orange",
      price: "🍊",
      emoji: "😭",
    },
    {
      name: "Pineapple",
      price: "🍍",
      emoji: "😭",
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} ${fruit.price}
            {""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;

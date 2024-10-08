function Hello(props) {
  console.log(props);
  const { name, message, age } = props;
  return (
    <div>
      <h1>
        {age} {message} {name}
      </h1>
    </div>
  );
}

export default Hello;

import Code from "./Code";
import Welcome from "./Welcome";

const ConditionalComponent = () => {
  let message;
  const display = true;
  if (display) {
    message = <h1>This is Message 1</h1>;
  } else {
    message = <h1>This is Message 2</h1>;
  }
  return message;
};

export default ConditionalComponent;

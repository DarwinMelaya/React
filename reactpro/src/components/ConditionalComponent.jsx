import Code from "./Code";
import Welcome from "./Welcome";

const ConditionalComponent = () => {
  const display = true;

  return display ? <Welcome /> : <Code />;
};

export default ConditionalComponent;

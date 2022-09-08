import { Link } from "react-router-dom";

const Welcome = () => {
  const today = Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(new Date());

  return (
    <div>
      <p>{today}</p>
      <h1>Welcome</h1>
    </div>
  );
};

export default Welcome;

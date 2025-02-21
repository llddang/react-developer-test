import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const { answers } = location.state;

  console.log(answers);

  return <h1>result</h1>;
}

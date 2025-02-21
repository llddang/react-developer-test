import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const { answers } = location.state;

  return <h1>result</h1>;
}

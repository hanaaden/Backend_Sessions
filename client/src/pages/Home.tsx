import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      welcome to Home
      <h1>
        <Link to="/signup">Click</Link>
      </h1>
    </>
  );
}

export default Home

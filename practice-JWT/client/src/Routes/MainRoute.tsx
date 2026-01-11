import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from "../pages/Home"
import ForgotPassword from "../components/ForgotPassword"
function MainRoute() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default MainRoute
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { MainRoutes } from "./mainRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={ <MainRoutes /> } />
      </Routes>
    </Router>
  )
}

export default AppRoutes;
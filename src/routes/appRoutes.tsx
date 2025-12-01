import { Route, BrowserRouter as Router, Routes } from "react-router";
import { MainRoutes } from "./mainRoutes";
import { TeamRoutes } from "./teamRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={ <MainRoutes /> } />
        <Route path="team/*" element={ <TeamRoutes /> } />
      </Routes>
    </Router>
  )
}

export default AppRoutes;
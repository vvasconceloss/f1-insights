import Drivers from "@/pages/drivers";
import Constructors from "@/pages/constructors";
import { Route, Routes } from "react-router";

export const TeamRoutes = () => {
  return (
    <Routes>
      <Route path="/drivers/all" element={ <Drivers /> } />
      <Route path="/constructors/all" element={ <Constructors /> } />
    </Routes>
  )
}
import Layout from "../components/layout/layout";
import { LastRaceWidget } from "@/features/races/LastRaceWidget";

const Home = () => {
  return (
    <Layout current_menu="Dashboard">
      <>
      <LastRaceWidget />
      </>
    </Layout>
  )
}

export default Home;
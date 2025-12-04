import Layout from "../components/appLayout";
import { LastRaceWidget } from "@/components/widgets/lastRace";
import { LastRaceStandingWidget } from "@/components/widgets/lastRaceStanding";

const Home = () => {
  return (
    <Layout current_menu="Dashboard">
      <>
      <LastRaceWidget />
      <LastRaceStandingWidget />
      </>
    </Layout>
  )
}

export default Home;
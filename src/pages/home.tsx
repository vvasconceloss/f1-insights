import { BiError } from "react-icons/bi";
import Layout from "../components/appLayout";
import { useLastRaceResult } from "@/hooks/useLastRaceResult";
import { LastRaceWidget } from "@/components/widgets/lastRace";
import { LastRaceStandingWidget } from "@/components/widgets/lastRaceStanding";

const Home = () => {
  const { data, loading, error, refetch } = useLastRaceResult();

  if (loading) return <>Loading…</>;

  return (
    <Layout current_menu="Dashboard">
      {error ? (
        <section className="w-full h-full items-center justify-center flex rounded-md p-5">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0">
              <div className="flex items-center justify-center w-28 h-28 rounded-full bg-red-600/10 text-red-700">
                <BiError className="w-16 h-16" aria-hidden />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-900">Unable to load dashboard</h2>
              <p className="mt-1 text-lg text-gray-600">We couldn't retrieve the latest race information. This may be temporary — try again.</p>
              <p className="mt-1 text-lg text-gray-500">If the problem persists, you can open an issue on GitHub.</p>
            </div>
            <div className="flex flex-col items-stretch gap-2">
              <button
                onClick={() => refetch?.()}
                className="w-36 inline-flex items-center justify-center px-4 py-2 rounded-md bg-red-600 text-white text-lg font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Retry loading dashboard"
              >
                Retry
              </button>
              <a
                className="w-36 inline-flex items-center justify-center px-4 py-2 rounded-md bg-white border border-gray-200 text-lg text-gray-700 hover:bg-gray-50"
                href="https://github.com/vvasconceloss/f1-insights/issues/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open issue
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <LastRaceWidget data={data} />
          <LastRaceStandingWidget data={data} />
        </section>
      )}
    </Layout>
  );
};

export default Home;
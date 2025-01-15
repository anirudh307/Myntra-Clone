import FetchItems from "../componants/FetchItems";
import Header from "../componants/Header";
import Footer from "../componants/footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../componants/LoadingSpinner";

function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching? <LoadingSpinner/>:<Outlet />}
      <Footer />
    </>
  );
}

export default App;

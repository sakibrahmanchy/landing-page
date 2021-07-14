import React, { useEffect, useState } from "react";
import "./app.css";
import Banner from "./components/banner.component";
import Companies from "./components/company/companies.component";
import JobOffers from "./components/job-offer/job-offers.component";
import Loader from "./components/loader.component";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setLoading(false);
  }, []);
  return (
    <div className="App">
      {loading && <Loader />}
      {!loading && (
        <div>
          <Banner />
          <div className="p-8 lg:p-20">
            <JobOffers />
            <Companies />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

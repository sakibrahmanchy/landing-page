import React from "react";
import "./app.css";
import Banner from "./components/banner.component";
import Companies from "./components/company/companies.component";
import JobOffers from "./components/job-offer/job-offers.component";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="p-4 md:p-20">
        <JobOffers />
        <Companies />
      </div>
    </div>
  );
}

export default App;

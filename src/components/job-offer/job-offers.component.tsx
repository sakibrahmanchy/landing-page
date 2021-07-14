import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/window-size.hook";
import JobOffer from "./job-offer.component";
import { JobOfferProps, jobOffers } from "./job-offers";

const JobOffers = () => {
  const [offers, setOffers] = useState(jobOffers);
  const [width] = useWindowSize();
  useEffect(() => {
    if (width < 768) {
      const modifiedJobOffers = offers.map((offer) => ({
        ...offer,
        righIndicator: false,
      }));
      setOffers(modifiedJobOffers);
    } else {
      const modifiedJobOffers = offers.map((offer, index) => ({
        ...offer,
        righIndicator: (index + 1) % 3 !== 0 && index !== offers.length - 1,
      }));
      setOffers(modifiedJobOffers);
    }
  }, [width]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-lg md:text-4xl font-bold">Newest Job Offers</h1>
        <a href="/all" className="text-blue-500">
          View all job offers &rarr;
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map((jobOffer: JobOfferProps, index: number) => (
          <JobOffer key={`${jobOffer.companyName}${index}`} {...jobOffer} />
        ))}
      </div>
    </div>
  );
};

export default JobOffers;

import { JobOfferProps } from "./job-offers";

const JobOffer = ({
  companyName = "",
  position = "",
  description = "",
  location = "",
  link = "",
  postTime = "",
  pay = "",
  righIndicator = false,
}: JobOfferProps) => (
  <div
    className={`text-left pt-4 pr-8 ${
      righIndicator ? "border-r border-gray-300" : ""
    }`}
  >
    <div className="flex flex-col lg:flex-row justify-between">
      <div>
        <a href={link} className="text-blue-500 font-bold">
          {position}
        </a>
        <p className="flex flex-col xl:flex-row">
          <span>{companyName}</span>
          <span className="text-gray-500 xl:pl-2">{location}</span>
        </p>
      </div>
      <p className="text-gray-500">{postTime}</p>
    </div>
    <div className="text-gray-500">
      <div className="pt-2">{description}</div>
      <div className="flex justify-between">
        <span>{pay}</span>
        <a href={link} className="ml-8 shadow-blue opacity-90 bg-blue-500 text-white font-bold rounded-sm w-max px-2 py-2 icon-button">
          &#8250;
        </a>
      </div>
    </div>
  </div>
);

export default JobOffer;

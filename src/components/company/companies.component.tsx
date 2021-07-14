import { companies } from "./companies";
import Company, { CompanyProps } from "./company.component";

const Companies = () => (
  <div className="pt-12">
    <div className="text-left">
      <h1 className="text-lg md:text-4xl font-bold">Featured Companies</h1>
    </div>
    <div className="grid grid-cols-3 md:grid-cols-9 gap-3 justify-items-start pt-6">
      {companies.map((company: CompanyProps) => (
        <Company key={company.name} {...company} />
      ))}
    </div>
  </div>
);

export default Companies;

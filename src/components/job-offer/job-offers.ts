export type JobOfferProps = {
    position: string;
    companyName: string;
    location: string;
    postTime: string;
    description: string;
    link: string;
    righIndicator?: boolean;
    pay?: string;
};

export const jobOffers: JobOfferProps[] = [
    {
        position: "Junior Java Developer",
        companyName: "PickSaas",
        postTime: "2 hours ago",
        location: "Wrclaw, Polska",
        description: "I am currently looking for a java developer, Project for Public Sector Location: Wroclaw(during the pandemic remote work).",
        link: "/1",
        righIndicator: false,
        pay: "$ upto PLN 550 net / MD B2B"
    },
    {
        position: "Junior Project Manager",
        companyName: "Frontkom",
        postTime: "3 hours ago",
        location: "Lubin, Polska",
        description: "I am currently looking for a java developer, Project for Public Sector Location: Wroclaw(during the pandemic remote work).",
        link: "/1",
        righIndicator: false,
        pay: "Learning & Growth awaits!"
    },
    {
        position: "Junior Java Developer",
        companyName: "PickSaas",
        postTime: "1 day ago",
        location: "Wrclaw, Polska",
        description: "I am currently looking for a java developer, Project for Public Sector Location: Wroclaw(during the pandemic remote work).",
        link: "/1",
        righIndicator: false,
        pay: "$ upto PLN 550 net / MD B2B"
    },
    {
        position: "Junior Java Developer",
        companyName: "PickSaas",
        postTime: "2 hours ago",
        location: "Wrclaw, Polska",
        description: "I am currently looking for a java developer, Project for Public Sector Location: Wroclaw(during the pandemic remote work).",
        link: "/1",
        righIndicator: false,
        pay: "$ upto PLN 550 net / MD B2B"
    }
]
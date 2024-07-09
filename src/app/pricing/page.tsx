import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Free website development",
};
const Page = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        {
          title: "Only sub-domain",
          bol: true,
        },
        {
          title: "your.domain.in ",
          bol: true,
        },
        {
          title: "No Free Hosting",
          bol: false,
        },
        {
          title: "Paid supports Tickets ",
          bol: true,
        },
        {
          title: "No custumization ",
          bol: false,
        },
        {
          title: "0GB storage",
          bol: false,
        },
      ],
      link: "/pricing/free",
    },
    {
      name: "Sliver plan",
      price: "2000",
      link: "/pricing/silver",

      features: [
        {
          title: "Free Domain",
          bol: true,
        },
        {
          title: ".site  .online ",
          bol: true,
        },
        {
          title: "Free Hosting 6 Months",
          bol: true,
        },
        {
          title: "2 supports Tickets ",
          bol: true,
        },
        {
          title: "1 custumization ",
          bol: true,
        },
        {
          title: "5GB storage",
          bol: true,
        },
      ],
    },
    {
      name: "Gold",
      price: "3500",
      link: "/pricing/gold",

      features: [
        {
          title: "Free Domain",
          bol: true,
        },
        {
          title: ".site  .online ",
          bol: true,
        },
        {
          title: "Free Hosting 1 years",
          bol: true,
        },
        {
          title: "5 supports Tickets ",
          bol: true,
        },
        {
          title: "3 custumization ",
          bol: true,
        },
        {
          title: "5GB storage",
          bol: true,
        },
      ],
    },
    {
      name: "Diamond",
      price: "10,000",
      link: "/pricing/diamond",

      features: [
        {
          title: "Free Domain",
          bol: true,
        },
        {
          title: "Free Hosting 2 years",
          bol: true,
        },
        {
          title: ".in  .com ",
          bol: true,
        },
        {
          title: "5 supports Tickets ",
          bol: true,
        },
        {
          title: "3 custumization ",
          bol: true,
        },
        {
          title: "5GB storage",
          bol: true,
        },
      ],
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 dark:text-gray-50 text-3xl font-semibold sm:text-4xl">
            Pricing for all Types
          </h3>
          <div className="mt-3 max-w-xl dark:text-gray-100">
            <p>
              We have the best price in the market, Even we also offers free
              service
            </p>
          </div>
        </div>
        <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2"
            >
              <div>
                <span className="text-primary font-medium">{item.name}</span>
                <div className="mt-4 text-gray-800 dark:text-gray-50 text-3xl font-semibold">
                  ₹{item.price}{" "}
                  <span className="text-xl text-gray-600 dark:text-gray-100 font-normal">
                    /only
                  </span>
                </div>
              </div>
              <ul className="py-8 space-y-3">
                {item.features.map((i, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-5 dark:text-gray-200"
                  >
                    {i.bol ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 20 20"
                        fill="green"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 10 20"
                        fill="currentColor"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="10"
                          y2="10"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <line
                          x1="10"
                          y1="0"
                          x2="0"
                          y2="10"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                      </svg>
                    )}
                    {i.title}
                  </li>
                ))}
              </ul>
              <div className="flex-1 flex items-end">
                <Link href={item.link} className="w-full">
                  <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm  text-white bg-primary hover:bg-green-500 active:bg-green-700  transition-all ease-in hover:scale-110 duration-150">
                    {item.name}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Page;

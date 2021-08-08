const routes = [
  {
    path: "/services",
    exact: true,
    name: "services",
    active: true,
    children: [
      {
        path: "/services/artificial-intelligence",
        name: "artificial_intelligence",
      },
      {
        path: "/services/business-intelligence",
        name: "business_intelligence",
      },
      {
        path: "/services/data-engineering",
        name: "data_engineering",
      },
      {
        path: "/services/data-science-and-analytics",
        name: "data_science_and_analytics_solutions",
      },
    ],
  },
  { path: "/company", name: "company", active: true },
  {
    path: "/blogs",
    exact: true,
    name: "blogs",
    active: true,
    children: [],
  },
  { path: "/careers", name: "careers", active: true },
  { path: "/contact", name: "contact", active: true },
]

export default routes

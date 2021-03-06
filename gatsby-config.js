module.exports = {
  siteMetadata: {
    title: "ALTA 2020 Workshop",
    siteUrl: "https://alta2020.alta.asn.au",
    sponsors: [
      { 
        name: "Defence Science and Technology Group",
        level: "Platinum",
        link: "https://www.dst.defence.gov.au/",
        image: "dod.png"
      },
      { 
        name: "Sintelix",
        level: "Silver",
        link: "https://sintelix.com/",
        image: "sintelix.png"
      },
      { 
        name: "Google",
        level: "Silver",
        image: "Google Logo.png",
        link: "https://www.google.com/"
      },
      { 
        name: "",
        longName: "",
        level: "",
        image: "",
        link: ""
      },
      { 
        name: "",
        longName: "",
        level: "",
        image: "",
        link: ""
      },
      { 
        name: "",
        longName: "",
        level: "",
        image: "",
        link: ""
      }
    ],
    sponsorLevels: ["Platinum", "Gold", "Silver"]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    "gatsby-transformer-csv",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-141744087-1",
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/favicon.png",
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};

import React from "react"
import Article from "../Article/Article"
import "../Career/CareerArticle.scss"

const first_section_data = [
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Img/YoullHaveARewardingCareer.jpg`,
    h3Title: "You’ll have a rewarding career",
    description: [
      `We believe success should... to grow.`,
      `When you join Neurond AI,... highly-experienced professional.`,
      `And you’ll always... at Neurond AI.`,
    ],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Img/YoullWorkWithGreatPeople.jpg`,
    h3Title: "You’ll work with great people",
    description: [
      `We believe in... are possible.`,
      `At Neurond AI... you need help.`,
      `Your clients will be... positive references.`,
  ],
    headLine: false,
  },
  {
    imgLink: `${process.env.GATSBY_CDN_CONFIG}/assets/image/branch/Careers/Img/YoullHaveFun.jpg`,
    h3Title: "You’ll have fun",
    description: [
      `We believe happy... are free people.`,
      `You’re free to... the world.`,
    ],
    headLine: false,
  },
]

const CareerArticle = () => (
  <section className="one-article margin-bot wrapper">
    {first_section_data.map((item, index) => {
      return <Article item={item} key={index} index={index} />
    })}
  </section>
)

export default CareerArticle

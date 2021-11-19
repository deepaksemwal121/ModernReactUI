import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amzing with GPT-3 OpenAI
        </h1>
        <p>
          GPT-3’s ability to identify themes from natural language and generate
          summaries allows Viable to give product, customer experience, and
          marketing teams at companies across industries a better understanding
          of their customers’ wants and needs,” said Daniel Erickson, CEO of
          Viable.
        </p>
        <div className="gpt3__header-content__input">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email Address"
          />
          <button type="button"> Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people using gpt3" />
          <p>1000 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AIimage" />
      </div>
    </div>
  );
};

export default Header;

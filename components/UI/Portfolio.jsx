import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("Portfolio");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Portfolio") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    // if (filter === "MERN Stack") {
    //   const filteredData = portfolioData.filter(
    //     (item) => item.category === filter
    //   );

    //   setData(filteredData);
    // }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My portfolio" />
            <h4 className="mt-4">Some of my distinguished works</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Portfolio" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Portfolio")}
              >
                Portfolio
              </button>
              {/* <button
                className={`${
                  filter === "MERN Stack" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("MERN Stack")}
              >
                MERN Stack
              </button> */}
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

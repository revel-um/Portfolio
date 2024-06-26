import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white text-center d-flex flex-column align-items-center justify-content-center">
          <h2 className="display-4 mb-5">
            {experiences.heading}
          </h2>
          <Row className="justify-content-center">
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;

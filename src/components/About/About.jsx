import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

export const About = () => {
  return (
    <Container fluid style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
      <div className="about">
        <Row>
          <h1>About Us</h1>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="10">
            <div className="mission-container">
              <Col xs="4">
                <img
                  src="https://res.cloudinary.com/hannahbannan/image/upload/v1601563849/Voting%20App/parker-johnson-v0OWc_skg0g-unsplash_1_w3depr.png"
                  alt="I Voted!"
                />
              </Col>
              <Col xs="1"></Col>
              <Col>
                <div className="mission-text">
                  <h3>Our Mission...</h3>
                  <p>
                    We want to encourage young people to get involved and use
                    their right to vote in order to be the change they want to
                    see.
                  </p>
                </div>
              </Col>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="8" sm="6">
            <h5 className="about-blurb">
              By spreading awareness, providing tools, and teaching young people
              how to vote, we can make a difference.
            </h5>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <h1>Meet Our Team</h1>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="10">
            <div className="team-row">
              <Col>
                <div className="team-ind">
                  <img
                    src="https://res.cloudinary.com/hannahbannan/image/upload/v1601564108/Voting%20App/20200821_160142_1_sh09ix.png"
                    alt="Kay Vail"
                  />

                  <br />
                  <a
                    href="https://www.linkedin.com/in/kayvail/"
                    target="_blank"
                  >
                    Kay Vail
                  </a>
                  <p>Full Stack Developer</p>
                </div>
              </Col>
              <Col>
                <div className="team-ind">
                  <img
                    src="https://res.cloudinary.com/hannahbannan/image/upload/v1601564213/Voting%20App/IMG-8119-Original_1_xxjlwp.png"
                    alt="Jyoti Shinde"
                  />
                  <br />
                  <a
                    href="https://www.linkedin.com/in/jyoti-shinde/"
                    target="_blank"
                  >
                    Jyoti Shinde
                  </a>
                  <p>Full Stack Developer</p>
                </div>
              </Col>
              <Col>
                <div className="team-ind">
                  <img
                    src="https://res.cloudinary.com/hannahbannan/image/upload/v1601564281/Voting%20App/Sean_1_vcwitf.png"
                    alt="Sean O'Brien"
                  />
                  <br />
                  <a
                    href="https://www.linkedin.com/in/sean-t-obrien/"
                    target="_blank"
                  >
                    Sean O'Brien
                  </a>
                  <p>Full Stack Developer</p>
                </div>
              </Col>
              <Col>
                <div className="team-ind">
                  <img
                    src="https://res.cloudinary.com/hannahbannan/image/upload/v1601564366/Voting%20App/HB_Headshot_1_yyakls.png"
                    alt="Hannah Bannan"
                  />
                  <br />
                  <a
                    href="https://www.linkedin.com/in/hannahbannan/"
                    target="_blank"
                  >
                    Hannah Bannan
                  </a>
                  <p>Front End Developer</p>
                </div>
              </Col>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs="10">
            <div className="team-row">
              <Col>
                <div className="team-ind">
                  <img
                    src="https://res.cloudinary.com/hannahbannan/image/upload/v1601564417/Voting%20App/KCW_1_xbnhuo.png"
                    alt="Kristin White"
                  />
                  <br />
                  <a
                    href="https://www.linkedin.com/in/kristin-clark-white/"
                    target="_blank"
                  >
                    Kristin White
                  </a>
                  <p>UX Designer</p>
                </div>
              </Col>
              <Col>
                <div className="team-ind">
                  <img
                    src="https://res.cloudinary.com/hannahbannan/image/upload/v1601564483/Voting%20App/IMG_20200930_162042_1_rukafk.png"
                    alt="Christian Pirnie"
                  />
                  <br />
                  <a
                    href="https://www.linkedin.com/in/christianpirnie/"
                    target="_blank"
                  >
                    Christian Pirnie
                  </a>
                  <p>UX Researcher</p>
                </div>
              </Col>
              <Col>
                <div className="team-ind">
                  <img
                    src="https://res.cloudinary.com/hannahbannan/image/upload/v1601564538/Voting%20App/20_Facebook_2_mdbzef.png"
                    alt="Prezetta McCall"
                  />
                  <br />
                  <a
                    href="https://www.linkedin.com/in/prezetta-mccall/"
                    target="_blank"
                  >
                    Prezetta McCall
                  </a>
                  <p>UX/UI Designer</p>
                </div>
              </Col>
              <Col>
                <div className="team-ind">
                  <img
                    src="https://res.cloudinary.com/hannahbannan/image/upload/v1601564608/Voting%20App/WhatsApp_Image_2020-09-30_at_5.21_1_ktgdwj.png"
                    alt="Archana Mirkhelkar"
                  />
                  <br />
                  <a
                    href="https://www.linkedin.com/in/archanamirkhelkar/"
                    target="_blank"
                  >
                    Archana Mirkhelkar
                  </a>
                  <p>UX Designer</p>
                </div>
              </Col>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
};

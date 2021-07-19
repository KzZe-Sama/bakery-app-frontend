import React from "react";

import Logo from "./global/logo";
import { Segment, Container, Header, Statistic } from "semantic-ui-react";

import Background from "./global/images/bg.jpg";
import instaLogo from "./global/images/insta.png";
export default function Home() {
  return (
    <>
      <div className="logoSegment">
        <Logo />
      </div>
      <div
        className="homeBody"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          width: "100vw",
          backgroundSize: "100vw 100vh",
          height: "58.8vh",
          objectFit: "cover",
          overflow: "auto",
          color: "white",
        }}
      >
        <Container fluid>
          <div className="container-div">
            <Segment className="homeParaIntro">
              <Header as="h1" textAlign="center" className="text-slogan">
                Forever delicious like the first time.
              </Header>
              <p className="text-content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                id a odio totam suscipit soluta accusantium consectetur magnam,
                reprehenderit veniam dolores repudiandae sapiente maxime fugit
                esse, quaerat facilis quam vero! Incidunt praesentium minus,
                cupiditate unde laudantium aliquid, quae expedita magnam ullam
                vel, ipsam atque modi nihil aspernatur error. Accusantium id
                aliquam voluptate deleniti quia ut suscipit cupiditate aliquid
                modi obcaecati? Minus, provident dolores illum amet nihil error
                quidem deserunt voluptatem ad, eos optio delectus aliquid
                facilis! Sint labore excepturi ratione minus sapiente vitae illo
                alias, accusantium eum laboriosam fugiat iste. Autem voluptatem
                asperiores temporibus corrupti expedita facere reiciendis, minus
                placeat natus assumenda, omnis, excepturi dolores esse eos in
                dolore tempore quidem accusamus ratione veritatis. Eius ex aut
                consequuntur esse vero. Numquam quibusdam ad minus repellendus
                sapiente consectetur unde minima incidunt dignissimos vitae?
                Veniam laudantium vero in voluptate natus molestiae, repellendus
                nisi exercitationem officia eos. Officiis quos optio impedit
                voluptatum ipsa. Rem animi repellat optio? Vitae quae dolorum
                officia at hic, ipsum ipsa voluptates, a laboriosam quos ad in
                harum sapiente. Provident id dolor dolores consequuntur sequi
              </p>
              <p>
                <div>
                  <Statistic.Group inverted>
                    <Statistic>
                      <Statistic.Value>100+</Statistic.Value>
                      <Statistic.Label>Employees</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>31,200+</Statistic.Value>
                      <Statistic.Label>Happy Customers</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>4</Statistic.Value>
                      <Statistic.Label>Branches</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                </div>
              </p>
            </Segment>

            <Segment className="instagramDiv">
              <img
                src={instaLogo}
                width="50px"
                height="50px"
                style={{}}
                alt="insta logo"
              ></img>
              <p>
                Follow us <span>@kekslicer_nepal</span>
              </p>
            </Segment>
          </div>
        </Container>
      </div>
    </>
  );
}

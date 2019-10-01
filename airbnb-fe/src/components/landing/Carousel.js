import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import styled from "styled-components";

import Arrow from "../../img/sliderArrow.png";
import Ana from "../../img/Ana.png";
import Cassandra from "../../img/Cassandra.png";
import Cesar from "../../img/Cesar.png";
import Chris from "../../img/Chris.png";
import Lionel from "../../img/Lionel.png";
import Ridley from "../../img/Ridley.png";
import Vlad from "../../img/Vlad.png";
import Zach from "../../img/Zach.png";

const C = {};

C.Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

C.Flipped = styled.img`
  transform: scaleX(-1);
`;

C.QuoteFlipped = styled.img`
  width: 35px;
  opacity: 0.2;
  transform: rotate(180deg);
`;

C.Quote = styled.img`
  width: 35px;
  opacity: 0.2;
`;

C.Outside = styled.div`
  width: 100%;
`;

C.Inside = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

C.InsideLeft = styled.div`
  margin: 0 2%;
`;

C.InsideRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

C.RightTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80%;
`;

C.TopLeft = styled.div`
  margin: -30% 5% 0 0;
`;

C.TopMiddle = styled.div`
  font-size: 24px;
  width: 60%;
  color: #484848;
`;

C.TopRight = styled.div`
  margin: 35% 0 0 2%;
`;

C.RightBottom = styled.div`
  width: 100%;
  height: 20%;
  margin: 0 30% 0 0;
  color: #484848;
  text-align: right;
`;

C.Button = styled.button`
  background: none;
  border: none;
  shadow: none;
  outline: none;
`;

const AnaCard = () => {
  return (
    <C.Inside>
      <C.InsideLeft>
        <img src={Ana} />
      </C.InsideLeft>
      <C.InsideRight>
        <C.RightTop>
          <C.TopLeft>
            <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopLeft>
          <C.TopMiddle>
            Working on “Price my Airbnb” have been a lot of fun, I’m grateful
            and happy with the team who developed this platform.
          </C.TopMiddle>
          <C.TopRight>
            <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopRight>
        </C.RightTop>
        <C.RightBottom>
          - Ana Rosa Lerma <br></br>UX Designer
        </C.RightBottom>
      </C.InsideRight>
    </C.Inside>
  );
};

const CesarCard = () => {
  return (
    <C.Inside>
      <C.InsideLeft>
        <img src={Cesar} />
      </C.InsideLeft>
      <C.InsideRight>
        <C.RightTop>
          <C.TopLeft>
            <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopLeft>
          <C.TopMiddle>
            Price My Airbnb helped me realize what I was losing out on. Now I
            know what I should value my House for. 💯
          </C.TopMiddle>
          <C.TopRight>
            <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopRight>
        </C.RightTop>
        <C.RightBottom>
          - Cristiano Ronaldo <br></br>UX Designer
        </C.RightBottom>
      </C.InsideRight>
    </C.Inside>
  );
};

const CassandraCard = () => {
  return (
    <C.Inside>
      <C.InsideLeft>
        <img src={Cassandra} />
      </C.InsideLeft>
      <C.InsideRight>
        <C.RightTop>
          <C.TopLeft>
            <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopLeft>
          <C.TopMiddle>
            Price My Airbnb has helped increase my income EXPONENTIALLY. I can
            finally afford to travel the world!
          </C.TopMiddle>
          <C.TopRight>
            <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopRight>
        </C.RightTop>
        <C.RightBottom>
          - Cassandra Springer <br></br>Web Developer
        </C.RightBottom>
      </C.InsideRight>
    </C.Inside>
  );
};

const RidleyCard = () => {
  return (
    <C.Inside>
      <C.InsideLeft>
        <img src={Ridley} />
      </C.InsideLeft>
      <C.InsideRight>
        <C.RightTop>
          <C.TopLeft>
            <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopLeft>
          <C.TopMiddle>
            Price my Airbnb helped me increase my monthly profit by 200%!
            Whoever developed this unicorn product deserves one million "Who's a
            good boy" pets.
          </C.TopMiddle>
          <C.TopRight>
            <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopRight>
        </C.RightTop>
        <C.RightBottom>
          - Ridley Leisy <br></br>Data Scientist
        </C.RightBottom>
      </C.InsideRight>
    </C.Inside>
  );
};

const LionelCard = () => {
  return (
    <C.Inside>
      <C.InsideLeft>
        <img src={Lionel} />
      </C.InsideLeft>
      <C.InsideRight>
        <C.RightTop>
          <C.TopLeft>
            <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopLeft>
          <C.TopMiddle>
            Price My Airbnb changed my life. With the extra cash, I was able to
            save enough to realize my dream : Invest in a B&B in Vermont that I
            can advertise on... Airbnb!!!
          </C.TopMiddle>
          <C.TopRight>
            <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopRight>
        </C.RightTop>
        <C.RightBottom>
          - Lionel Fotso Kamga <br></br>Data Scientist
        </C.RightBottom>
      </C.InsideRight>
    </C.Inside>
  );
};

const VladCard = () => {
  return (
    <C.Inside>
      <C.InsideLeft>
        <img src={Vlad} />
      </C.InsideLeft>
      <C.InsideRight>
        <C.RightTop>
          <C.TopLeft>
            <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopLeft>
          <C.TopMiddle>
            After trying Price My AirBnB and seeing how much time and money it
            saved me, it was a no brainer! Definitely going back to Wheelhouse!
          </C.TopMiddle>
          <C.TopRight>
            <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopRight>
        </C.RightTop>
        <C.RightBottom>
          - Vladislav Mogilevskiy <br></br>Web Developer
        </C.RightBottom>
      </C.InsideRight>
    </C.Inside>
  );
};

const ChrisCard = () => {
  return (
    <C.Inside>
      <C.InsideLeft>
        <img src={Chris} />
      </C.InsideLeft>
      <C.InsideRight>
        <C.RightTop>
          <C.TopLeft>
            <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopLeft>
          <C.TopMiddle>
            If only I'd known about Price My Airbnb earlier! I'm profiting much
            more now than I was just a couple months ago!"
          </C.TopMiddle>
          <C.TopRight>
            <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopRight>
        </C.RightTop>
        <C.RightBottom>
          - Ted Mosby <br></br>Web Developer
        </C.RightBottom>
      </C.InsideRight>
    </C.Inside>
  );
};

const ZachCard = () => {
  return (
    <C.Inside>
      <C.InsideLeft>
        <img src={Zach} />
      </C.InsideLeft>
      <C.InsideRight>
        <C.RightTop>
          <C.TopLeft>
            <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopLeft>
          <C.TopMiddle>
            After using PriceMyAirBnb I saw massive value added to the listings
            I have posted everyday. All thanks to the awesome team that created
            this app. Now I’m making an extra profit on my listings with ease!
          </C.TopMiddle>
          <C.TopRight>
            <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
          </C.TopRight>
        </C.RightTop>
        <C.RightBottom>
          - Zach Christy <br></br>Team Lead
        </C.RightBottom>
      </C.InsideRight>
    </C.Inside>
  );
};

export default class Carousel extends React.Component {
  render() {
    return (
      <C.Container>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={7}
        >
          {/* <C.Outside>
            <C.Button> */}
          <ButtonBack>
            <C.Flipped src={Arrow} />
          </ButtonBack>
          {/* </C.Button>
          </C.Outside> */}
          <Slider>
            <Slide index={0}>
              <AnaCard />
            </Slide>
            <Slide index={1}>
              <CesarCard />
            </Slide>
            <Slide index={2}>
              <CassandraCard />
            </Slide>
            <Slide index={3}>
              <RidleyCard />
            </Slide>
            <Slide index={4}>
              <LionelCard />
            </Slide>
            <Slide index={5}>
              <VladCard />
            </Slide>
            <Slide index={6}>
              <ChrisCard />
            </Slide>
            <Slide index={7}>
              <ZachCard />
            </Slide>
          </Slider>

          {/* <C.Outside>
            <C.Button>*/}
          <ButtonNext>
            <img src={Arrow} />
          </ButtonNext>
          {/* </C.Button>
          </C.Outside>  */}
        </CarouselProvider>
      </C.Container>
    );
  }
}

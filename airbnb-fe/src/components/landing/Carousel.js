import React from "react";

import styled from "styled-components";

import Arrow from "../../img/sliderArrow.png";
import Ana from "../../img/Ana.png";
import Cassandra from "../../img/Cassandra.png";
import Cesar from "../../img/Cesar.png";
import Ridley from "../../img/Ridley.png";
import Zach from "../../img/Zach.jpg";

//carousel needs functionality
const Carousel = () => {
  return (
    <C.Container>
      <C.Outside>
        <a id="prev" href="#">
          <C.Flipped src={Arrow} />
        </a>
      </C.Outside>

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
      {/* <C.Inside>
        <C.InsideLeft>
          <img src={Ana} />
        </C.InsideLeft>
        <C.InsideRight>
          <C.RightTop>
            <C.TopLeft>
              <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
            </C.TopLeft>
            <C.TopMiddle>
              After using PriceMyAirBnb I saw massive value added to the listings I have posted everyday. All thanks to the awesome team that created this app. Now I’m making an extra profit on my listings with ease!
            </C.TopMiddle>
            <C.TopRight>
              <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
            </C.TopRight>
          </C.RightTop>
          <C.RightBottom>
            - Zach Christy <br></br>Team Lead
          </C.RightBottom>
        </C.InsideRight>
      </C.Inside> */}
      {/* <C.Inside>
            <C.InsideLeft>
              <img src={Cesar} />
            </C.InsideLeft>
            <C.InsideRight>
              <C.RightTop>
                <C.TopLeft>
                  <C.Quote src="https://static.thenounproject.com/png/433486-200.png" />
                </C.TopLeft>
                <C.TopMiddle>
                  Price My Airbnb has helped increase my income EXPONENTIALLY. I
                  can finally afford to travel the world!
                </C.TopMiddle>
                <C.TopRight>
                  <C.QuoteFlipped src="https://static.thenounproject.com/png/433486-200.png" />
                </C.TopRight>
              </C.RightTop>
              <C.RightBottom>
                - Cristiano Ronaldo <br></br>UX Designer
              </C.RightBottom>
            </C.InsideRight>
          </C.Inside> */}
      {/* <C.Inside>
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
      </C.Inside> */}
      {/* <C.Inside>
        <C.InsideLeft>
          <img src={Ridley} />
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
            - Ridley Leisy <br></br>Data Scientist
          </C.RightBottom>
        </C.InsideRight>
      </C.Inside> */}
      <C.Outside>
        <a id="next" href="#">
          <img src={Arrow} />
        </a>
      </C.Outside>
    </C.Container>
  );
};

const C = {};

C.Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  width: 10%;
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
  width: 75%;
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

export default Carousel;

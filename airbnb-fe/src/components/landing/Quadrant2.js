import React from "react";
import styled from "styled-components";

import Quad2 from "../../img/quad2.png";

function Quadrant2() {
  return (
    <Q2div>
      <SmallerDiv>
        <img src={Quad2} width="80%" margin="auto" />
      </SmallerDiv>
      <BiggerDiv>
        <Half />
        <Half2>
          <H1>
            Pricing is tough.
            <br></br>Trust the experts.
          </H1>
          <Text>
            Our solution is the most advanced in the industry. We account for
            changes in demand nightly and ensure you’re never leaving money on
            the table. <br /> <br />
            We evaluate the competition, price your rentals effectively, and
            analyze local top properties in your market.
          </Text>
        </Half2>
      </BiggerDiv>
    </Q2div>
  );
}

const Q2div = styled.div`
  height: 95vh;
  width: 100%;
  background-color: #ecf9f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuadrantLimiter = styled.div`
  height: 100%;
  width: 80%;
`;

const SmallerDiv = styled.div`
  height: 80%;
  width: 40%;
  background-color: white;
  box-shadow: 5px;
  z-index: 2;
  position: relative;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerDiv = styled.div`
  height: 108%;
  width: 60%;
  background-color: #056159;
  z-index: 1;
  position: relative;
  right: 10%;
  display: flex;
  box-sizing: border-box;
`;

const Half = styled.div`
  width: 45%;
  height: 100%;
  box-sizing: border-box;
`;

const Half2 = styled(Half)`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const H1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  line-height: 1.2;
  margin-top: 30%;
  margin-bottom: 40px;
  color: white;
`;

const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.6;
  padding: 0px 100px 0px 0px;
  margin-bottom: 170px;
  width: 90%;
  color: white;
`;

export default Quadrant2;

//======================================================

// import React from "react";
// import styled from 'styled-components';

// const Q2div = styled.div`
//     height: 77vh;
//     width: 100%;
//     background-color: #e8e8e8;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

//     const SmallerDiv = styled.div`
//         height: 75%;
//         width: 40%;
//         background-color: white;
//         box-shadow: 5px;
//         z-index: 2;
//         position: relative;
//         left: 10%

//     `
//     const BiggerDiv = styled.div`
//         height: 115%;
//         width: 60%;
//         background-color: #a6a6a6;
//         z-index: 1;
//         position: relative;
//         right: 10%;
//     `

// function Quadrant2() {
//   return (
//     <Q2div>
//         <SmallerDiv/>
//         <BiggerDiv/>
//     </Q2div>
//   );
// }

// export default Quadrant2;

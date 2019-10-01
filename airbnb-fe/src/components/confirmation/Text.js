import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  height: 100%;
`;

const H1 = styled.h1`
  margin: 0px;
  margin-top: 15px;
`;
const Location = styled.div`
  margin: 0px;
  font-size: 25px;
`;

const Feature = styled.div`
  margin: 18px 0px 0px;
  font-size: 20px;
  font-weight: 600;
`;

const PDetails = styled.div`
  margin: 0px;
  font-size: 18px;
  width: 45%;
  display: flex;
  justify-content: space-between;
`;

const Detail = styled.div`
  margin: 0px;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DetailP = styled.p`
  margin: 0;
`;

function Text(props) {
  return (
    // <Container>
    //   <H1>Miami Beach 8 guests 3 Bedroom Apartment (20)</H1>
    //   <Location>Miami Beach</Location>

    //   <Feature>Entired serviced apartment</Feature>
    //   <PDetails>
    //     <DetailP>8 guests</DetailP> <DetailP>3 bedrooms</DetailP>{" "}
    //     <DetailP>4beds</DetailP> <DetailP>2baths</DetailP>
    //   </PDetails>

    //   <Feature>Sparkling clean</Feature>
    //   <Detail>5 recent guests said this place was sparkling clean</Detail>

    //   <Feature>Self check-in</Feature>
    //   <Detail>you can check in with the doorman</Detail>
    // </Container>

    <Container>
    <H1>{props.listings[0].name}</H1>
    <Location>{props.listings[0].street}</Location>

    <Feature>Entired serviced apartment</Feature>
    <PDetails>
      <DetailP>8 guests</DetailP> <DetailP>3 bedrooms</DetailP>{" "}
      <DetailP>4beds</DetailP> <DetailP>2baths</DetailP>
    </PDetails>

    <Feature>Sparkling clean</Feature>
    <Detail>5 recent guests said this place was sparkling clean</Detail>

    <Feature>Self check-in</Feature>
    <Detail>you can check in with the doorman</Detail>
  </Container>
  );
}

export default Text;

import React from "react";
import styled from 'styled-components';

const Q2div = styled.div`
    height: 77vh;
    width: 100%;
    background-color: #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
`

const QuadrantLimiter = styled.div`
    height: 100%;
    width: 80%;
`


    const SmallerDiv = styled.div`
        height: 75%;
        width: 40%;
        background-color: white;
        box-shadow: 5px;
        z-index: 2;
        position: relative;
        left: 10%

    `
    const BiggerDiv = styled.div`
        height: 115%;
        width: 60%;
        background-color: #a6a6a6;
        z-index: 1;
        position: relative;
        right: 10%;
    `

function Quadrant2() {
  return (
    <Q2div>
        <SmallerDiv/>
        <BiggerDiv/>
    </Q2div>
  );
}

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
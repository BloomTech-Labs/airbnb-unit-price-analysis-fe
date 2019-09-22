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
        display: flex;
        box-sizing: border-box;
    `
        const Half = styled.div`
            width: 45%;
            height: 100%;
            box-sizing: border-box;
        `

        const Half2 = styled(Half)`
            width: 55%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `

        const H1 = styled.h1`
            font-family: 'Varela Round', sans-serif;
            font-size: 26px;
            line-height: 1.4;
            margin-bottom: 40px;
            padding-right: 80px;
        `
        const Text = styled.div`
            font-family: 'Varela Round', sans-serif;
            font-size: 25px;
            line-height: 1.4;
            padding: 0px 60px 0px 10px;
            margin-bottom: 170px;
        `


function Quadrant2() {
  return (
    <Q2div>
        <SmallerDiv/>
        <BiggerDiv>
            <Half />
            <Half2>
                <H1>Our purpose</H1>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna elit, aliquam eget ornare vitae, scelerisque quis dui. Curabitur rhoncus urna ut bibendum viverra. Pellentesque tincidunt odio eleifend, volutpat turpis sed
                </Text>
            </Half2>
        </BiggerDiv>
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
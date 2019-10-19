import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const LoaderContainer = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledLoader = styled(Loader)`
`;




function Chart2(props){

    const [data, setData] = useState({
        // labels: ["10", "20", "30", "40", "50", "60", "70"],
        labels: [10, 20, 30, 40, 50, 60, 70],
        datasets: [
          {
              label: "Percentile",
              backgroundColor: "#3be3ae",
              data: [0, 8, 18, 32, 18, 8, 0] 
          },
        //   {
        //       label: "Subscriptions",
        //       backgroundColor: "yellow",
        //       data: [14, 15, 21, 0, 12, 24, 32] 
        //   },
        ]
      })


    

    useEffect(() => {
        if(props.pricingFetched){
            setData({
                ...data,
                labels: props.pricingPercentile.percentiles,
                datasets: [
                    {
                        label: "Count per price",
                        backgroundColor: "#3be3ae",
                        data: props.listingsPerPercentile
                    }
                ]
            })
        }
    }, [props.pricingFetched])

    if (!props.pricingFetched && !props.isDemo) {
        return (
            <div style = {{ position: "relative", width: "100%", height: "100%"}}>
                <LoaderContainer>
                    <StyledLoader type="TailSpin" color="grey" height={80} width={80} />
                </LoaderContainer>
            </div>
        );
      }

    return (
        <div style = {{ position: "relative", width: "100%", height: "100%"}}>
            <Line
                options = {{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)" //<- hides gridlines
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)" //<- hides gridlines
                            }
                        }]
                    }
                }}
                data = {data}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pricingFetched: state.pricingFetched,
        isDemo: state.isDemo
    }
  }
  
  export default connect(mapStateToProps, {})(withRouter(Chart2));
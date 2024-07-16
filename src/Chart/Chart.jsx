
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class TypingChart extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
      options: {
        chart: {
          id: "accuracy",
          background: "#ffffff",
          toolbar: {
            show: true,
            tools: {
                download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
              customIcons: []
            },
            
        
            responsive: [
                {
                    breakpoint: 1500, // Example breakpoint for tablet devices
                    options: {
                        chart: {
                            width: '100%'
                        }
                    }
                },
                {
                    breakpoint: 1000, // Example breakpoint for tablet devices
                    options: {
                chart: {
                  width: '100%'
                }
              }
            },
            {
              breakpoint: 600, // Example breakpoint for mobile devices
              options: {
                  chart: {
                      width: '100%',
                    },
                    xaxis: {
                        labels: {
                    show: false
                  }
                }
              }
            }
        ]
    },
    },
    xaxis: {
          categories: this.props.categories || ["7 July", "8 July", "9 July"]
        },
        yaxis: {
            min: this.props.min,
            max: this.props.max
        }
    },
      series: [
        {
          name: this.props.chartId ,
          data: this.props.data || [100, 100, 100]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app" style={{borderRadius:"5px",width:"100%",display: "flex",
        justifyContent: "center",backgroundColor: "white"}} >
        <div className="row" style={{width:"100%"}}>
          <div className="mixed-chart" style={{width:"100%"}}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
              maxHeight="350px"
              height="100%"
              minHeight="200px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TypingChart;


// TypingChart.defaultProps = {
//     chartId: "accuracy-chart",
//     categories: accuracy,
//     data: test_number
//   };
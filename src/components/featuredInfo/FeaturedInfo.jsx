import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import VectorChart from '../../assets/Vector 4.png';

export default function FeaturedInfo() {

  const Charts = {
    series: [{
              name: 'series1',
              data: [0, 2, 4, 6, 8,]
            }],

            options: {
             colors: [ '#0294FF'],
              chart: {
                height: 220,
                type: 'area',
                zoom: {
                  enabled: false
                }
              },
              chart: {
                toolbar: {
                  show: false,
                }},
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              xaxis: {
                categories: ["1", "2", "4", "6", "8"]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
          
 };

 const Chart2 = {
    series: [{
              name: "STOCK ABC",
              data:  [0, 2, 4, 6, 8,]
            }],
            options: {
              chart: {
                type: 'area',
                height: 350,
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              
             
              xaxis: {
                type: 'datetime',
              },
              yaxis: {
                opposite: true
              },
              legend: {
                horizontalAlign: 'left'
              }
            },
 }

  return (
    <div className="featured">
      <div className="featuredItem">
        <div>
           <span className="featuredTitle">Daily Transaction Volume</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">2,342</span>
            </div>
        </div>
        <span className="featuredMoneyRate">
            {/* <Chart
             options={Charts.options}
             series={Charts.series}
             type='area'
             height={100}
            /> */}
            <img src={VectorChart} alt="" className="chartImg" />
          </span>
      </div>
      <div className="featuredItem">
        <div>
           <span className="featuredTitle">Daily Transaction Value</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">4,000,000</span>
            </div>
        </div>
         <span className="featuredMoneyRate">
            {/* <Chart
             options={Charts.options}
             series={Charts.series}
             type='area'
             height={100}
            /> */}
            <img src={VectorChart} alt="" className="chartImg" />
          </span>
       
      </div>
    <div className="half">
       <div className="featuredItem">
         <div>
           <span className="featuredTitle">Total Transaction Volume</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">452,000</span>
            </div>
        </div>
        <span className="featuredMoneyRate">
            {/* <Chart
             options={Charts.options}
             series={Charts.series}
             type='area'
             height={100}
            /> */}
            <img src={VectorChart} alt="" className="chartImg" />
          </span>
       </div>
       {/* <div className="featuredItem">
        <span className="featuredTitle">Total Transaction Value</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
       </div> */}
    </div>
      
    </div>
  );
}

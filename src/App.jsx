import {Chart as ChartJS} from "chart.js/auto"; //to render chart in react components
import { Bar, Doughnut, Line, Pie, Radar, PolarArea } from "react-chartjs-2";
import sourceData from "./data/sourceData.json";
import monthData from "./data/monthData.json";
import radarData from "./data/radarData.json";
import polarData from "./data/polarData.json";

function App() {
  

  return (
    <>
        

        
          <h1 className=" m-auto text-center text-gray-900 font-bold text-2xl">Chart.js Mini Projects</h1>

          
              <Bar 
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets:[
                    {
                      label:"Count",
                      data: sourceData.map((data) => data.value),
                      //We can give bg- color to each individual bar as well
                      backgroundColor: "rgb(96, 214, 214)"
                    },

                    //For multiple bar graph charts
                    {
                      label:"Revenue",
                      data: sourceData.map((data)=> data.revenue),
                      backgroundColor: "rgb(62, 73, 130)"
                    }
                  ]
                }} 
              />
            
            
              <Doughnut 
                  data={{
                    labels: sourceData.map((data) => data.label),
                    datasets:[
                      {
                        label:"Count",
                        data: sourceData.map((data) => data.value),
                        backgroundColor:[
                          "rgb(214, 96, 130)",
                          "rgb(102, 214, 96)",
                          "rgb(96, 214, 214)"
                        ]
                      },

                    ]
                  }} 
                />
            

          
            <Pie 
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets:[
                    {
                      label:"Count",
                      data: sourceData.map((data) => data.value),
                      backgroundColor:[
                        "rgb(214, 96, 130)",
                        "rgb(97, 40, 143)",
                        "rgb(239, 245, 61)"
                      ]
                    },

                  ]
                }}

              />
            
              <Line 
              data={{
                labels:monthData.map((data)=> data.month),
                datasets:[
                  {
                    label: 'Profit',
                    data: monthData.map((data)=> data.profit),
                    fill: false,
                    borderColor: 'rgb(50, 122, 48)',
                    tension: 0.2 //more tesnion more curvy, less tension straight line.
                  },
                  {
                    label: 'Loss',
                    data: monthData.map((data)=> data.loss),
                    fill: false,
                    borderColor: 'rgb(143, 48, 37)',
                    tension: 0.2
                  }
                ]
              }}/>
           

          
              <Radar 
                data={{
                  labels: radarData.map((data)=> data.labels),
                  datasets:[
                    {
                      label:"Odd day",
                      data: radarData.map((data) => data.firstData),
                      fill: true,
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgb(255, 99, 132)',
                      pointBackgroundColor: 'rgb(255, 99, 132)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgb(255, 99, 132)'
                    },

                    
                    {
                      label:"Even day",
                      data: radarData.map((data)=> data.secondData),
                      fill: true,
                      backgroundColor: 'rgba(54, 162, 235, 0.2)',
                      borderColor: 'rgb(54, 162, 235)',
                      pointBackgroundColor: 'rgb(54, 162, 235)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }
                  ]
                }} 
              />
           
              <PolarArea
                  data={{
                    labels: polarData.map((data) => data.day),
                    datasets:[
                      {
                        label:"Count",
                        data: polarData.map((data) => data.revenue),
                        backgroundColor:[
                          'rgb(242, 106, 68)',
                          'rgb(102, 214, 96)',
                          'rgb(255, 99, 132)',
                          'rgb(75, 192, 192)',
                          'rgb(255, 205, 86)',
                          'rgb(59, 55, 54)',
                          'rgb(97, 40, 143)'
                        ]
                      },

                    ]
                  }} 
                />
    </>
  )
}

export default App

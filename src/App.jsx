import {Chart as ChartJS, defaults} from "chart.js/auto"; //to render chart in react components
import { Bar, Doughnut, Line, Pie, Radar, PolarArea } from "react-chartjs-2";
import sourceData from "./data/sourceData.json";
import monthData from "./data/monthData.json";
import radarData from "./data/radarData.json";
import polarData from "./data/polarData.json";
import React from 'react'

 //helps to keep charts of similar size and responsive
defaults.maintainAspectRatio=false;
defaults.responsive=true;
defaults.animation=true;

//to set global properties for 'title' of chart. "Title" itself is local for each chart.
defaults.plugins.title.display=true;
defaults.plugins.title.color="black";
defaults.plugins.title.align="start";
defaults.plugins.title.font.size=15;

 
 function App() {
   return (
     <>
            <div className="md:flex md:flex-col md:w-full md:h-auto md:justify-center md:items-center md:gap-8 my-4 p-2">

                <h1 className=" text-teal-600 font-bold text-3xl md:text-4xl drop-shadow-xl text-center">Different Charts using Chart.js</h1>
                
                <div className="md:flex md:flex-row md:w-11/12 md:m-auto md:gap-24 md:justify-center md:items-center md:h-3/4 p-4 
                                flex flex-col w-11/12 m-auto gap-6 justify-center items-center h-auto">

                    <div className=" md:flex md:w-2/6 md:justify-center md:items-center md:h-96 border-2 border-gray-700 p-4
                                     w-11/12 h-80 flex justify-center items-center bg-slate-50 rounded-xl shadow-lg shadow-blue-600/75">
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
                            options={{
                              plugins:{
                                title:{
                                  text:"Revenue Model"
                                }
                              }
                            }}
                        />
                    </div>

                    <div className=" md:flex md:w-2/6 md:justify-center md:items-center md:h-96 border-2 border-gray-700 p-4
                                     w-11/12 h-80 flex justify-center items-center bg-slate-50 rounded-xl shadow-lg shadow-blue-600/75">
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
                            options={{
                              plugins:{
                                title:{
                                  text:"Income Division"
                                }
                              }
                            }}
                        />
            
                    </div>

                </div>

                <div className="md:flex md:flex-row md:w-11/12 md:m-auto md:gap-24 md:justify-center md:items-center md:h-3/4 p-4
                                flex flex-col w-11/12 m-auto gap-6 justify-center items-center h-auto">

                    <div className=" md:flex md:w-2/6 md:justify-center md:items-center md:h-96 border-2 border-gray-700 p-4
                                     w-11/12 h-80 flex justify-center items-center bg-slate-50 rounded-xl shadow-lg shadow-blue-600/75">
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
                            options={{
                              plugins:{
                                title:{
                                  text:"Revenue Model"
                                }
                              }
                            }}

                        />
                    </div>

                    <div className=" md:flex md:w-2/6 md:justify-center md:items-center md:h-96 border-2 border-gray-700 p-4
                                     w-11/12 h-80 flex justify-center items-center bg-slate-50 rounded-xl shadow-lg shadow-blue-600/75">
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
                            }}
                            options={{
                              plugins:{
                                title:{
                                  text:"Monthly Trades"
                                }
                              }
                            }}
                        />
            
                    </div>

                </div>

                <div className="md:flex md:flex-row md:w-11/12 md:m-auto md:gap-24 md:justify-center md:items-center md:h-3/4 p-4
                                flex flex-col w-11/12 m-auto gap-6 justify-center items-center h-auto">

                    <div className=" md:flex md:w-2/6 md:justify-center md:items-center md:h-96 border-2 border-gray-700 p-4
                                     w-11/12 h-80 flex justify-center items-center bg-slate-50 rounded-xl shadow-lg shadow-blue-600/75">
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
                            options={{
                              plugins:{
                                title:{
                                  text:"Daily Tasks"
                                }
                              }
                            }}
                        />
                    </div>

                    <div className=" md:flex md:w-2/6 md:justify-center md:items-center md:h-96 border-2 border-gray-700 p-4
                                     w-11/12 h-80 flex justify-center items-center bg-slate-50 rounded-xl shadow-lg shadow-blue-600/75">
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
                            options={{
                              plugins:{
                                title:{
                                  text:"Weekly Sales"
                                }
                              }
                            }}
                        />
            
                    </div>

                </div>

            </div>
     </>
   )
 }
 
 export default App

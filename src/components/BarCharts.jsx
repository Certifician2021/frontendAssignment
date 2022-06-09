import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
 ChartJS.register(...registerables)


function BarCharts() {

  return <Bar 
  height={230}
  data={{
    datasets:[{
      type:'bar',
      label:'Bar Dataset',
      backgroundColor: '#BF40BF',
      data:[400,500,300,200,100,120,150,200]
    },
    {
      type:'line',
      label:'Line Dataset',
      backgroundColor: '#BF40BF',
      data:[400,500,300,200,100,120,150,200]
    }
  ],
  labels:["Jan 01","Jan 02","Jan 03","Jan 04","Jan 05","Jan 06","Jan 07","Jan 08"]
  }}
   />
}

export default BarCharts
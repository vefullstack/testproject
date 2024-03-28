import React from 'react'
import AreaChart from './AreaChart'
import { data } from "./data";


export default function index(props) {

    const topArray = [
    {x:1, y: 90},
    {x: 2, y: 12},
    {x: 3, y: 34},
    {x: 4, y: 53},
    {x: 5, y: 52}
]

  topArray?.forEach((obj, index) => { 
    obj.x = parseInt(props?.data?.data[index].Use_Case_Importance);
});

console.log(topArray);

  return (
    <div>
        <AreaChart data={topArray} width={600} height={500} />
    </div>
  )
}

import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';

const data01 = [
  { name: 'Eating', value: 0.275 * 15000 }, { name: 'Accomodation', value: 0.15 * 15000 },
  { name: 'Electricity', value: 0.05 * 15000 }, { name: 'Water', value: 0.025 * 15000 },
  { name: 'Children', value: 0.40 * 15000 }, { name: 'Other', value: 0.10 * 15000 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

export default class PieA extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  render() {
    return (
      <div>
        <PieChart width={300} height={300}>
          <Pie dataKey="value" isAnimationActive={false} data={data01} cx={150} cy={100} outerRadius={80} fill="#8884d8" label />
          
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

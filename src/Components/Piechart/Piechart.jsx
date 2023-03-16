import React, { useEffect } from "react";
// import PieChart from 'react-pie-graph-chart';
import engagments from "../../df_json/df_engagements.json";
import engagmentrate from "../../df_json/df_engagmentrate.json";
import posts from "../../df_json/df_posts.json";
import followers from "../../df_json/df_followers.json";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJs.register(ArcElement, Tooltip, Legend)
let dataset = [engagments, engagmentrate, posts, followers]
console.log(dataset)
var text = [];
dataset.forEach((a, i) => {
    console.log(a.RANK)
    if (a.RANK[i] === "Excellent") {
        text.push(90)
    }
    else if (a.RANK[i] === "Good") {
        text.push(70)
    }
    else {
        text.push(50)

    }
    // console.log(text)
})

export const data = {
    labels: ['engagments', 'engagmentrate', 'posts', 'followers'],
    datasets: [
        {
            label: '# of Votes',
            data: [90, 70, 50, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1,
        },
    ],
};
function PieChart() {
    console.log(engagments)
    console.log(engagmentrate)
    console.log(posts)
    console.log(followers)
    return (
        <div className="App">
            <form>
                <input type="text" name="Search" className="form-control" />
                <button className="btn btn-primary">Search</button>
            </form>
            <div >
                <h1>RANK</h1>
                <Pie style={{ height: "200px", width: "500px", margin: "0 auto" }} data={data} />
            </div>
        </div>
    )
}

export default PieChart;

import {LineChart,Tooltip, XAxis, YAxis, Line, ResponsiveContainer} from "recharts"

export default function UserAverageSessions({data}) {

    const CustomTooltip = ({ active, payload }) => {
        return (active && payload && payload.length) ? (
            <div className="custom-tooltip_linechart">
              <p className="value">{`${payload[0].value} min`}</p>
            </div>
        ) : (null)
    }

        return (data === null) ? ( <div>Loading...</div>) 
        : (
            <div className="linechart-container">
                <h4>Durée moyenne des sessions</h4>
                <div className="linechart-graph">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data[0]} fill="#FF0000">
                        <XAxis tickSize="0" axisLine={false} dataKey="name" tick={{ fill: "#ffffff8e", fontSize:".57rem" }}/>
                        <YAxis unit="min" hide={true} tickSize="0" axisLine={false} dataKey="min"/>
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{outline: "none", width: "2.44rem", height: "1.5rem", backgroundColor: "#ffffff"}} cursor={{ stroke: '#0202030a', strokeWidth: 79 }} />
                        <Line type="natural" dataKey="min" stroke="#ffffff8e" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
            
        )
    }
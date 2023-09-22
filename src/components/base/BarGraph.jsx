import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

function BarGraph({ data, totalValue, label, categoryToggle, columnsSpan }) {
  return (
    <section
      className={`flex flex-col w-full h-full rounded-2xl shadow-xl py-2  ${columnsSpan} bg-white`}
    >
      {/*  BEGINNING OF HEADING */}
      <div className="flex justify-around mb-4 pt-4">
        {/* Total Values */}
        <div>
          <h2 className="capitalize">{totalValue}</h2>
          <p className="font-thin text-xs capitalize ">{label}</p>
        </div>
        {/* Legend */}
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-2">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 h-2 fill-current text-fuchsia-800"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <p className="capitalize text-fuchsia-800 text-xs">last year</p>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 h-2 fill-current text-blue-900"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <p className="capitalize text-blue-900 text-xs">this year</p>
          </div>
        </div>
        {/* Toggle or null if there is none */}
        <div>{categoryToggle}</div>
      </div>
      {/*  END OF HEADING */}
      {/* BEGINNING OF CHART */}

      <ResponsiveContainer width="100%" height="75%">
        <BarChart data={data} margin={{ top: 10, right: 10 }}>
          <XAxis dataKey="time" interval={0} />
          <YAxis />
          <Tooltip />
          <Bar
            name="LY"
            dataKey="ly"
            fill="#86198F"
            radius={[20, 20, 0, 0]}
            barSize={15}
          />
          <Bar
            name="YTD"
            dataKey="ytd"
            fill="#02155E"
            radius={[20, 20, 0, 0]}
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
      {/*  END OF HEADING */}
    </section>
  );
}

export default BarGraph;

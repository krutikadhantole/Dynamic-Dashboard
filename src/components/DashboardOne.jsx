import React from "react";
import graph from "../assets/graph.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardOne = () => {
  // Sample empty data for placeholders - no graph data message will appear instead of charts
  const data = [];

  return (
    <div className="pt-5 bg-gray-50  font-sans text-gray-900 mt-20">
      <h2 className="text-start text-lg font-bold mb-4">CWPP Dashboard</h2>
      <div className="flex space-x-6">
        {/* Top 5 Namespace Specific Alerts */}
        <div className="flex-1 bg-white rounded-lg p-6 shadow-sm min-h-[250px] flex flex-col">
          <h3 className="text-start font-semibold mb-4">
            Top 5 Namespace Specific Alerts
          </h3>
          {data.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-grow text-gray-400 text-sm ">
              <img className="h-15 w-15" src={graph} alt="" />
              No Graph data available!
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Workload Alerts */}
        <div className="flex-1 bg-white rounded-lg p-6 shadow-sm min-h-[180px] flex flex-col">
          <h3 className="text-start font-semibold mb-4">Workload Alerts</h3>
          {data.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-grow text-gray-400 text-sm">
              <img className="h-15 w-15" src={graph} alt="" />
              No Graph data available!
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Add Widget Button */}
        <div className="flex-1 bg-white rounded-lg p-6 shadow-sm flex items-center justify-center">
          <button
            className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
            type="button"
          >
            + Add Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOne;

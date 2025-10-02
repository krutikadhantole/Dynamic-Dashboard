import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import DashboardOne from "./DashboardOne";

import DashboardTwo from "./DashboardTwo";

const cloudAccountsData = [
  { name: "Connected", value: 2 },
  { name: "Not Connected", value: 2 },
];

const riskAssessmentData = [
  { name: "Failed", value: 1689 },
  { name: "Warning", value: 681 },
  { name: "Not available", value: 36 },
  { name: "Passed", value: 7253 },
];

const COLORS1 = ["#4285F4", "#E8F0FE"]; // blue + light gray
const COLORS2 = ["#E74C3C", "#F1C40F", "#BDC3C7", "#27AE60"]; // red, yellow, gray, green

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h2 className="text-start text-base font-bold mb-4 text-gray-800">
        CSPM Executive Dashboard
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-[200px] gap-6">
        {/* Cloud Accounts */}
        <div className="bg-white rounded-2xl shadow-sm p-4 relative flex flex-col items-center ">
          <h3 className="font-semibold mb-2 text-sm self-start">
            Cloud Accounts
          </h3>
          <div className="flex gap-4 w-full">
            <div className="relative flex items-center justify-center w-1/2 h-56">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={cloudAccountsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    paddingAngle={1}
                  >
                    {cloudAccountsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS1[index % COLORS1.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute text-center">
                <p className="text-xl font-bold">2</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
            </div>
            {/* Legend */}
            <div className="flex flex-col justify-center items-start mt-2 text-xs w-1/2">
              <div className="flex gap-2 ">
                <span className="w-3 h-3 rounded-full bg-[#4285F4]"></span>
                Connected (2)
              </div>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E8F0FE]"></span>
                Not Connected (2)
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Account Risk Assessment */}
        <div className="bg-white rounded-2xl shadow-sm p-4 relative flex flex-col items-center">
          <h3 className="font-semibold mb-2 text-sm self-start">
            Cloud Account Risk Assessment
          </h3>
          <div className="flex gap-2 w-full">
            <div className="relative flex items-center justify-center w-1/2 h-56">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={riskAssessmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    paddingAngle={1}
                  >
                    {riskAssessmentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS2[index % COLORS2.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute text-center">
                <p className="text-xl font-bold">9659</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
            </div>
            {/* Legend */}
            <div className=" flex flex-col justify-center text-center ">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#E74C3C]"></span>
                Failed (1689)
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#F1C40F]"></span>
                Warning (681)
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#BDC3C7]"></span>
                Not available (36)
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#27AE60]"></span>
                Passed (7253)
              </div>
            </div>
          </div>
        </div>

        {/* Add Widget */}
        <div className="bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 text-sm hover:bg-gray-50 flex items-center gap-1">
            <span className="text-lg">+</span> Add Widget
          </button>
        </div>
      </div>
      <DashboardOne />
      <DashboardTwo />
    </div>
  );
}

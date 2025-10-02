import React from "react";

const DashboardTwo = () => {
  return (
    <div className="mt-2 bg-gray-50   font-sans text-gray-900">
      <h2 className="text-start text-lg font-semibold mb-4">Registry Scan</h2>
      <div className="flex h-[50]  space-x-6">
        {/* Image Risk Assessment */}
        <div className="flex-1 h-[200] bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-start font-semibold mb-2">
            Image Risk Assessment
          </h3>
          <div className="text-start text-2xl font-bold mb-1">
            1470{" "}
            <span className="text-base font-normal text-gray-600">
              Total Vulnerabilities
            </span>
          </div>
          <div className="w-full h-3 flex rounded overflow-hidden mb-4">
            <div className="bg-red-800" style={{ width: "0.6%" }}></div>{" "}
            {/* Critical (9) */}
            <div className="bg-red-600" style={{ width: "10.2%" }}></div>{" "}
            {/* High (150) */}
            <div className="bg-orange-400" style={{ width: "75%" }}></div>{" "}
            {/* Medium (1104) */}
            <div
              className="bg-yellow-300"
              style={{ width: "14.1%" }}
            ></div>{" "}
            {/* Low (207) */}
            <div className="bg-gray-300 flex-grow"></div> {/* Remaining */}
          </div>
          <div className="text-start text-sm text-gray-600 grid grid-cols-2 grid-rows-2 gap-2 ">
            <div>
              <span className="inline-block w-4 h-4 bg-red-800 mr-2 align-middle rounded"></span>
              Critical (9)
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-red-600 mr-2 align-middle rounded"></span>
              High (150)
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-orange-400 mr-2 align-middle rounded"></span>
              Medium (1104)
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-yellow-300 mr-2 align-middle rounded"></span>
              Low (207)
            </div>
          </div>
        </div>

        {/* Image Security Issues */}
        <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-start font-semibold mb-2">
            Image Security Issues
          </h3>
          <div className="text-start text-2xl font-bold mb-1">
            2{" "}
            <span className="text-base font-normal text-gray-600">
              Total Images
            </span>
          </div>
          <div className="w-full h-3 flex rounded overflow-hidden mb-4">
            <div className="bg-red-900" style={{ width: "33%" }}></div>{" "}
            {/* Critical (2) */}
            <div className="bg-red-600" style={{ width: "33%" }}></div>{" "}
            {/* High (2) */}
            <div className="bg-orange-400" style={{ width: "18%" }}></div>{" "}
            {/* Medium (1) */}
            <div className="bg-yellow-300" style={{ width: "8%" }}></div>{" "}
            {/* Low (1) */}
            <div className="bg-gray-300 flex-grow"></div> {/* Remaining */}
          </div>
          <div className="text-start text-sm text-gray-600 grid grid-cols-2 grid-rows-2 gap-2">
            <div>
              <span className="inline-block w-4 h-4 bg-red-900 mr-2 align-middle rounded"></span>
              Critical (2)
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-red-600 mr-2 align-middle rounded"></span>
              High (2)
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-orange-400 mr-2 align-middle rounded"></span>
              Medium (1)
            </div>
            <div>
              <span className="inline-block w-4 h-4 bg-yellow-300 mr-2 align-middle rounded"></span>
              Low (1)
            </div>
          </div>
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

export default DashboardTwo;

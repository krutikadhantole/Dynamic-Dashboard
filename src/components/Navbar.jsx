import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow px-2 py-1 rounded-lg">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home <span className="mx-1">›</span>{" "}
        <span className="font-medium text-gray-700">Dashboard V2</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search anything..."
        className="border border-gray-200 rounded px-3 py-1 w-96"
      />

      {/* Actions
      <div className="flex items-center gap-3">
        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          + Add Widget
        </button>
        <button className="p-2 border rounded">⚙</button>
        <select className="border px-2 py-1 rounded text-sm">
          <option>Last 2 days</option>
          <option>Last 7 days</option>
        </select>
      </div> */}

      <div className="h-5 w-5 mr-40">
        <i class="ri-notification-line"></i>
      </div>
    </div>
  );
}

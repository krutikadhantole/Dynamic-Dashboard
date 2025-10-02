import React from "react";
import { useState } from "react";
import AddWidgetModal from "./AddWidgetModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex justify-between  mt-2 p-4">
      <div>
        <h1 className="font-semibold">CNAPP Dashboard</h1>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setShowModal(true)}
          className="p-2 border border-gray-300 rounded"
        >
          Add Widget +
        </button>
        {showModal && <AddWidgetModal onClose={() => setShowModal(false)} />}

        <button className="p-2 border border-gray-300  rounded">
          <i class="ri-refresh-line"></i>
        </button>
        <button className="p-2 border border-gray-300 rounded">
          <i class="ri-more-2-line"></i>
        </button>
        <div className="flex border border-blue-800 p-2 items-center justify-center gap-1 text-blue-800 rounded">
          <i class="ri-time-fill"></i>|<p>Last 2 day</p>
          <i class="ri-arrow-drop-down-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;

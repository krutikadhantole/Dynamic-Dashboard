import React, { useState } from "react";

const categories = ["CSPM", "CWPP", "Image", "Ticket"];

const AddWidgetModal = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [widgets, setWidgets] = useState({
    CSPM: [
      { id: 1, name: "Widget 1", selected: true },
      { id: 2, name: "Widget 2", selected: true },
    ],
    CWPP: [],
    Image: [],
    Ticket: [],
  });

  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetText, setNewWidgetText] = useState("");

  const handleAddWidget = () => {
    if (!newWidgetName) return;
    const newId = Date.now();
    const newWidget = {
      id: newId,
      name: `${newWidgetName}: ${newWidgetText}`,
      selected: true,
    };
    setWidgets((prev) => ({
      ...prev,
      [activeCategory]: [...prev[activeCategory], newWidget],
    }));
    setNewWidgetName("");
    setNewWidgetText("");
  };

  const toggleWidgetSelected = (category, id) => {
    setWidgets((prev) => ({
      ...prev,
      [category]: prev[category].map((w) =>
        w.id === id ? { ...w, selected: !w.selected } : w
      ),
    }));
  };

  return (
    <div className="fixed h-full inset-0 z-50 flex items-end justify-end  bg-opacity-0 p-4">
      <div className="bg-white w-full h-full max-w-md rounded shadow-lg overflow-hidden">
        <div className="bg-blue-900 text-white px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold">Add Widget</h3>
          <button onClick={onClose} className="font-bold">
            &times;
          </button>
        </div>
        <div className="p-4">
          <p className="text-start mb-4 text-gray-700">
            Personalise your dashboard by adding the following widget
          </p>
          {/* Category tabs */}
          <div className="flex space-x-6 border-b border-gray-200 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pb-2 text-sm font-medium ${
                  activeCategory === cat
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Widgets list */}
          <div className="max-h-40 overflow-y-auto mb-4">
            {widgets[activeCategory].map((widget) => (
              <label
                key={widget.id}
                className="flex items-center mb-2 cursor-pointer px-2 py-1 rounded hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={widget.selected}
                  onChange={() =>
                    toggleWidgetSelected(activeCategory, widget.id)
                  }
                  className="mr-3"
                />
                <span className="text-sm">{widget.name}</span>
              </label>
            ))}
          </div>

          {/* Add new widget */}
          <div className="mb-4 space-y-2 ">
            <input
              type="text"
              placeholder="Enter widget name"
              value={newWidgetName}
              onChange={(e) => setNewWidgetName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-600"
            />
            <input
              type="text"
              placeholder="Enter widget text"
              value={newWidgetText}
              onChange={(e) => setNewWidgetText(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-600"
            />
            <button
              onClick={handleAddWidget}
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Widget
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Confirm button handler can submit selected widgets
                onClose();
              }}
              className="bg-blue-900 text-white rounded px-4 py-2 text-sm hover:bg-blue-800"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;

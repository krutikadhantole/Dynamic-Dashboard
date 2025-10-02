import React from "react";

export default function Widget({ widget, onRemove }) {
  return (
    <div className="relative bg-gray-100 p-4 rounded shadow">
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-red-600 font-bold"
      >
        ×
      </button>
      <h3 className="font-semibold">{widget.name}</h3>
      <p>{widget.text}</p>
    </div>
  );
}

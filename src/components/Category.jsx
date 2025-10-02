import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store/dashboardSlice";
import Widget from "./Widget";
import AddWidgetModal from "./AddWidgetModal";

export default function Category({ category }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border p-4 mb-6 rounded-lg shadow">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{category.name}</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          + Add Widget
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() =>
              dispatch(
                removeWidget({ categoryId: category.id, widgetId: widget.id })
              )
            }
          />
        ))}
      </div>

      {showModal && (
        <AddWidgetModal
          categoryId={category.id}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

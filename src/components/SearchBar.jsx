import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search widgets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full rounded"
      />
    </div>
  );
}

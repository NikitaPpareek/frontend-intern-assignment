// src/components/Controls.jsx
import React, { useState, useEffect } from "react";
import "./Controls.css";

export default function Controls({ categories, onChange }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  useEffect(() => {
    onChange({ query, category, sort });
  }, [query, category, sort]);

  const clearAll = () => {
    setQuery("");
    setCategory("all");
    setSort("");
  };

  return (
    <div className="controls-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c === "all" ? "All Categories" : c}
          </option>
        ))}
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>

      <button onClick={clearAll}>Clear</button>
    </div>
  );
}

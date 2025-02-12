import React from "react";
import { FilterType } from "../types";

interface FilterControlsProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="filter-controls">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value as FilterType)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{flex:1}}
      />
    </div>
  );
};

export default FilterControls;
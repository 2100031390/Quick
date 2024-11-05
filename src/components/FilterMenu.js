import React from 'react';

const FilterMenu = ({ onGroupChange, onSortChange }) => {
  return (
    <div className="filter-menu">
      <div className="grouping">
        <label htmlFor="group-select">Group By:</label>
        <select id="group-select" onChange={(e) => onGroupChange(e.target.value)}>
          <option value="status">Group by Status</option>
          <option value="user">Group by User</option>
          <option value="priority">Group by Priority</option>
        </select>
      </div>
      <div className="sorting">
        <label htmlFor="sort-select">Sort By:</label>
        <select id="sort-select" onChange={(e) => onSortChange(e.target.value)}>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
    </div>
  );
};

export default FilterMenu;
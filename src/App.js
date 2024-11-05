import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterMenu from './components/FilterMenu';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      setTickets(response.data);
    };

    fetchData();
  }, []);

  const handleGroupChange = (value) => {
    setGroupBy(value);
    localStorage.setItem('groupBy', value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    localStorage.setItem('sortBy', value);
  };

  useEffect(() => {
    const savedGroupBy = localStorage.getItem('groupBy');
    const savedSortBy = localStorage.getItem('sortBy');
    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <FilterMenu onGroupChange={handleGroupChange} onSortChange={handleSortChange} />
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
import React from 'react';

const KanbanBoard = ({ groupBy, sortBy }) => {
  // Sample tickets data
  const tickets = [
    { id: 1, title: 'Task 1', status: 'Todo', priority: 1 },
    { id: 2, title: 'Task 2', status: 'In Progress', priority: 2 },
    { id: 3, title: 'Task 3', status: 'Done', priority: 0 },
    { id: 4, title: 'Task 4', status: 'Todo', priority: 3 },
  ];

  // Sort tickets based on sortBy
  const sortedTickets = [...tickets].sort((a, b) => {
    if (sortBy === 'priority') {
      return a.priority - b.priority;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  // Group tickets based on groupBy
  const groupedTickets = sortedTickets.reduce((acc, ticket) => {
    const key = ticket[groupBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(ticket);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {groupedTickets[group].map((ticket) => (
            <div key={ticket.id} className={`ticket-card priority-${ticket.priority}`}>
              {ticket.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
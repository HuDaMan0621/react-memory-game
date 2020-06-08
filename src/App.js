import React from 'react';

import Card from './components/Cards';

import './App.css';

function App() {
  const projects = [
    { name: 'Project Awesome', likes: 10 },
    { name: 'Project a2', likes: 10000000 },
    { name: 'Project awe3', likes: 3 },
    { name: 'Project awe 4', likes: 5 },
    { name: 'BreafastTime', likes: 8 },
    { name: 'Pan Fried Noodles', likes: 9 },
    { name: 'Dinner', likes: 4 },
    { name: 'Ham Fried rice', likes: 30000 },


  ];

  return (
    <div className="App">
      {projects.map((project, index) => {
        return <Card
          name={project.name}
          key={index}
          likes={project.likes}
        ></Card>
      })}
    </div>
  );
}

export default App;

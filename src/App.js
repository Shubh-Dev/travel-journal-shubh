import React from 'react';
import Header from './components/Header';
import './App.css';
import Data from './components/Data';
import Card from './components/Card';

function App() {
  const data = Data.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  ));

  return (
    <div className="App">
      <Header />
      {data}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './EventPage.css';

function EventPage({ onNavigate }) {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Community Interfaith Dinner",
      date: "2024-04-15",
      location: "Community Center",
      description: "An evening of sharing meals and understanding different faith traditions",
      category: "Social"
    },
    {
      id: 2,
      title: "Charity Food Drive",
      date: "2024-05-01",
      location: "Downtown Park",
      description: "Join us in collecting food for local shelters",
      category: "Charity"
    }
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    category: ''
  });

  const [filter, setFilter] = useState('All');

  const handleAddEvent = () => {
    if (Object.values(newEvent).every(x => x !== '')) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ title: '', date: '', location: '', description: '', category: '' });
    }
  };

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="events-page container">
      <header className="events-header">
        <h1>Community Events</h1>
        <button 
          className="back-btn"
          onClick={() => onNavigate('home')}
        >
          Back to Home
        </button>
      </header>

      <div className="filter-section">
        <select 
          className="filter-select"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Events</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <div className="grid">
        <div className="events-list">
          <h2>Upcoming Events</h2>
          {filteredEvents.map(event => (
            <div key={event.id} className="card event-card">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>{event.description}</p>
              <span className="event-category">{event.category}</span>
            </div>
          ))}
        </div>

        <div className="add-event-form">
          <h2>Add New Event</h2>
          <div className="card">
            <div className="form-group">
              <input 
                type="text"
                className="form-control"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="date"
                className="form-control"
                value={newEvent.date}
                onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="text"
                className="form-control"
                placeholder="Location"
                value={newEvent.location}
                onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
              />
            </div>
            <div className="form-group">
              <textarea 
                className="form-control"
                placeholder="Description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
              />
            </div>
            <div className="form-group">
              <select 
                className="form-control"
                value={newEvent.category}
                onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
              >
                <option value="">Select Category</option>
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
              </select>
            </div>
            <button 
              className="btn add-event-btn"
              onClick={handleAddEvent}
            >
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
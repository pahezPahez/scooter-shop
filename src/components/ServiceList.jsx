import React, { useRef, useContext } from 'react';
import ServiceCard from './ServiceCard';
import './ServiceList.css';
import { ThemeContext } from './ThemeContext';

const ServiceList = ({ services }) => {
  const listRef = useRef(null);
  let isDragging = false;
  let startX, scrollLeft;
  const { theme } = useContext(ThemeContext);

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - listRef.current.offsetLeft;
    scrollLeft = listRef.current.scrollLeft;
    listRef.current.style.cursor = 'grabbing';
    listRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    listRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
    listRef.current.style.cursor = 'grab';
    listRef.current.style.userSelect = 'auto';
  };

  return (
    <div id='serviceList' className={`service-list ${theme}`}>
      <h2>Наши услуги</h2>
      <div
        className="service-list__list"
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ServiceList;
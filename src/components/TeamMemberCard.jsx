import React, { useContext } from 'react';
import './TeamMemberCard.css';
import { ThemeContext } from './ThemeContext';

const TeamMemberCard = ({ member }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`team-member-card ${theme}`}>
      <h3>{member.name}</h3>
      <img src={member.image} alt={member.name} />
    </div>
  );
};

export default TeamMemberCard;
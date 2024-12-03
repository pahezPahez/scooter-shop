import React, { useContext } from 'react';
import TeamMemberCard from './TeamMemberCard';
import './TeamMember.css';
import { ThemeContext } from './ThemeContext';

const TeamMember = ({ members }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id='teamMembers' className={`team-member ${theme}`}>
      <h2>Наша команда</h2>
      <div className="team-member__list">
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
import React from 'react';
import styled from 'styled-components';
import TraitMeter from './TraitMeter';

const Card = styled.div`
  background: white;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const CardHeader = styled.div`
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.dark});
  color: white;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  margin: 0 auto ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
`;

const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const Title = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`;

const CardBody = styled.div`
  padding: ${props => props.theme.spacing.lg};
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.md};
`;

const Skill = styled.span`
  background-color: ${props => props.theme.colors.light};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ProfileCard = ({ profile }) => {
  return (
    <Card>
      <CardHeader>
        <Avatar>
          {profile.name.charAt(0)}
        </Avatar>
        <Name>{profile.name}</Name>
        <Title>{profile.title}</Title>
      </CardHeader>
      <CardBody>
        <h4>Personality Traits</h4>
        {profile.traits.map((trait, index) => (
          <TraitMeter key={index} name={trait.name} value={trait.value} />
        ))}
        
        <h4>Top Skills</h4>
        <Skills>
          {profile.skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </Skills>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;

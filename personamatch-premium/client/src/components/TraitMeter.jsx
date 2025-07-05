import React from 'react';
import styled from 'styled-components';

const TraitContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TraitLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: 0.9rem;
`;

const TraitName = styled.span`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const TraitValue = styled.span`
  color: ${props => props.theme.colors.textLight};
`;

const TraitBar = styled.div`
  height: 8px;
  background-color: ${props => props.theme.colors.light};
  border-radius: 4px;
  overflow: hidden;
`;

const TraitProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, 
    ${props => props.theme.colors.accent}, 
    ${props => props.theme.colors.secondary});
  border-radius: 4px;
  width: ${props => props.$value}%;
`;

const TraitMeter = ({ name, value }) => (
  <TraitContainer>
    <TraitLabel>
      <TraitName>{name}</TraitName>
      <TraitValue>{value}%</TraitValue>
    </TraitLabel>
    <TraitBar>
      <TraitProgress $value={value} />
    </TraitBar>
  </TraitContainer>
);

export default TraitMeter;

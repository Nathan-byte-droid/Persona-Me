import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.md} 0;
  box-shadow: ${props => props.theme.shadows.medium};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;

  svg {
    margin-right: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: ${props => props.theme.spacing.lg};

  a {
    color: white;
    font-weight: 500;
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    border-radius: ${props => props.theme.borderRadius.small};
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const Button = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
`;

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.accent};
  color: white;
`;

const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 2px solid white;
  color: white;
`;

function Navbar() {
  return (
    <Nav>
      <div className="container">
        <NavContainer>
          <Logo>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
              <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="currentColor"/>
            </svg>
            PersonaMatch+
          </Logo>
          
          <NavLinks>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/browse">Browse</Link></NavItem>
            <NavItem><Link to="/dashboard">Dashboard</Link></NavItem>
            <NavItem><Link to="/profile">My Profile</Link></NavItem>
          </NavLinks>
          
          <AuthButtons>
            <OutlineButton>Log In</OutlineButton>
            <PrimaryButton>Sign Up</PrimaryButton>
          </AuthButtons>
        </NavContainer>
      </div>
    </Nav>
  );
}

export default Navbar;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';

const Hero = styled.section`
  padding: 5rem 0;
  background: linear-gradient(120deg, 
    ${props => props.theme.colors.light} 60%, 
    #e0e5f0 40%);
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;

  h1 {
    font-size: 3.5rem;
    margin-bottom: ${props => props.theme.spacing.lg};
    line-height: 1.2;
    color: ${props => props.theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: ${props => props.theme.spacing.xl};
    color: ${props => props.theme.colors.textLight};
  }
`;

const HeroImage = styled.div`
  flex: 1;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: ${props => props.theme.borderRadius.large};
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const Button = styled(Link)`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
`;

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.accent};
  color: white;
`;

const OutlineButton = styled(Button)`
  background-color: white;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  margin-left: ${props => props.theme.spacing.md};
`;

const Features = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${props => props.theme.shadows.small};

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.accent}, 
    ${props => props.theme.colors.primary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  color: white;
  font-size: 2rem;
`;

const Profiles = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.light};
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const sampleProfiles = [
  {
    name: "Sarah Johnson",
    title: "Senior UX Designer",
    traits: [
      { name: "Creativity", value: 92 },
      { name: "Collaboration", value: 88 },
      { name: "Adaptability", value: 95 }
    ],
    skills: ["UI/UX Design", "Figma", "User Research", "Prototyping", "Design Thinking"]
  },
  {
    name: "Michael Chen",
    title: "Data Scientist",
    traits: [
      { name: "Analytical", value: 96 },
      { name: "Problem Solving", value: 94 },
      { name: "Attention to Detail", value: 90 }
    ],
    skills: ["Python", "Machine Learning", "Data Visualization", "SQL", "Statistical Analysis"]
  },
  {
    name: "Alex Morgan",
    title: "Marketing Director",
    traits: [
      { name: "Communication", value: 93 },
      { name: "Leadership", value: 89 },
      { name: "Strategic Thinking", value: 91 }
    ],
    skills: ["Digital Marketing", "SEO/SEM", "Brand Strategy", "Campaign Management", "Analytics"]
  }
];

function Home() {
  return (
    <>
      <Hero>
        <div className="container">
          <HeroContent>
            <HeroText>
              <h1>Showcase Your True Professional Personality</h1>
              <p>PersonaMatch+ helps you highlight your unique personality traits, skills, and qualifications beyond the traditional resume. Connect with employers who value what makes you unique.</p>
              <div>
                <PrimaryButton to="/profile">Create Your Profile</PrimaryButton>
                <OutlineButton to="/how-it-works">How It Works</OutlineButton>
              </div>
            </HeroText>
            <HeroImage>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Professional networking" />
            </HeroImage>
          </HeroContent>
        </div>
      </Hero>

      <Features>
        <div className="container">
          <div className="section-title">
            <h2>Why Showcase Your Personality?</h2>
            <p>Traditional resumes don't capture what makes you unique. Our platform helps you stand out by highlighting your personal strengths and work style.</p>
          </div>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-brain"></i>
              </FeatureIcon>
              <h3>Personality Insights</h3>
              <p>Showcase your personality traits, work preferences, and communication style to attract the right employers.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-star"></i>
              </FeatureIcon>
              <h3>Skills Validation</h3>
              <p>Display verified skills and endorsements from colleagues and previous employers.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-handshake"></i>
              </FeatureIcon>
              <h3>Better Matches</h3>
              <p>Connect with companies that value your unique qualities and work culture fit.</p>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </Features>

      <Profiles>
        <div className="container">
          <div className="section-title">
            <h2>Featured Profiles</h2>
            <p>Discover professionals who showcase their unique personalities and qualifications</p>
          </div>
          
          <ProfileGrid>
            {sampleProfiles.map((profile, index) => (
              <ProfileCard key={index} profile={profile} />
            ))}
          </ProfileGrid>
        </div>
      </Profiles>
    </>
  );
}

export default Home;

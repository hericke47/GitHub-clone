import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'hericke47'}
            name={'Herick Exterkoetter'}
            avatarUrl={'https://avatars0.githubusercontent.com/u/56897431?v=4'}
            followers={887}
            following={7}
            company={'PlanetHub'}
            location={'Santa Catarina, Brazil'}
            email={'herickherick47@gmail.com'}
            blog={'https://www.linkedin.com/in/herick-exterkoetter-197496195/'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'hericke47'}
                  reponame={'BancoInter'}
                  description={'Interface of the BancoInter'}
                  language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile;
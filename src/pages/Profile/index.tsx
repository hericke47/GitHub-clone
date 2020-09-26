import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

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

        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile;
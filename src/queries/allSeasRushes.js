import { gql } from 'react-apollo';

export default gql`
  query {
    allSeasRushes {
      nodes {
        id
        team
        seas
        playerName
        ydsFromScrm
        rushAttGame
      }
    }
  }
`;

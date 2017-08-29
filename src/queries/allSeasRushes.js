import { gql } from 'react-apollo';

export default gql`
  query {
    allSeasRushes(first: 10) {
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

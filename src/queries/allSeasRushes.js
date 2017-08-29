import { gql } from 'react-apollo';

export default gql`
  query {
    allSeasRushes {
      edges {
        node {
          id
          rushLong
          playerName
          ydsPerRec
          team
          rushTds
          rushYards
          seas
        }
      }
    }
  }
`;

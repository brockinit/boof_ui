import { gql } from 'react-apollo';

export default gql`
  query {
    allSeasPasses {
      nodes {
        id
        rank
        playerName
        team
        age
        pos
        games
        gamesStarted
        qbRecord
        completions
        passAttempts
        completionPct
        passYards
        passTds
        tdPct
        interceptions
        intPct
        passLong
        ydsPerAtt
        adjYdsPerAtt
        ydsPerComp
        ydsPerGame
        qbRating
        qbr
        sacked
        sackedYdsLost
        netYdsPerAtt
        adjNetYdsPerAtt
        sackPct
        frthQtrComebacks
        gameWinDrives
        teamId
        playerId
        seas
      }
    }
  }
`;

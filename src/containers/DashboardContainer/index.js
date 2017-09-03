import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Metadata from '../../components/Metadata';
import DraftManualAd from '../../components/DraftManualAd';
import StatTable from '../../components/StatTable';
import queries from '../../queries';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createTableWithData = this.createTableWithData.bind(this);
    this.state = {
      dataCategory: 'allSeasRushes',
    };
  }

  createTableWithData(query) {
    return graphql(query, {
      props: ({ data }) => ({
        stats: data[this.state.dataCategory],
        data,
      }),
    })(StatTable);
  }

  render() {
    const { dataCategory, statTable } = this.state;
    const Table = this.createTableWithData(queries[dataCategory]);
    return (
      <div>
        <Metadata
          title="Better Odds of Football"
          description="Giving you better odds through data science, machine learning, and years of football fandom."
          url="https:www.betterodds.io"
          image="/assets/boof-logo-metadata.png"
        />
        <Table />
        {/*<DraftManualAd /> */}
      </div>
    );
  }
}

DashboardContainer.propTypes = {};

export default DashboardContainer;

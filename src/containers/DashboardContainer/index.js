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
      dataCategory: 'allSeasPasses',
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
    const { dataCategory } = this.state;
    const Table = this.createTableWithData(queries[dataCategory].query);
    return (
      <div>
        <div className="dashboard-container">
          <Metadata
            title="Better Odds of Football"
            description="Giving you better odds through data science, machine learning, and years of football fandom."
            url="https:www.betterodds.io"
            image="/assets/boof-logo-metadata.png"
          />
          <Table title={queries[dataCategory].title} />
        </div>
        <div>
          <DraftManualAd />
        </div>
      </div>
    );
  }
}

DashboardContainer.propTypes = {};

export default DashboardContainer;

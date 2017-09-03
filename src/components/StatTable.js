import React from 'react';
import PropTypes from 'prop-types';
import { Table, Column, Cell } from 'fixed-data-table';

const TextCell = ({ rowIndex, data, col, ...props }) =>
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>;

class StatTable extends React.Component {
  constructor(props) {
    super(props);
    this.calculateColumns = this.calculateColumns.bind(this);
    this.state = {};
  }

  calculateColumns(node) {
    if (!node || Array.isArray(node)) {
      return [];
    }
    return Object.keys(node);
  }

  render() {
    const { data, stats } = this.props;
    if (data.loading) {
      return <div>Loading...</div>;
    }
    const tableData = stats.nodes;
    return (
      <div className="stat-table">
        <h2>Table</h2>
        <Table
          rowHeight={50}
          headerHeight={50}
          rowsCount={tableData.length}
          width={1100}
          height={750}
          {...this.props}
        >
          {this.calculateColumns(tableData[0]).map((col, index) => {
            return (
              <Column
                key={index}
                header={
                  <Cell>
                    {col}
                  </Cell>
                }
                cell={<TextCell data={tableData} col={col} />}
                fixed={true}
                width={150}
              />
            );
          })}
        </Table>
      </div>
    );
  }
}

StatTable.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default StatTable;

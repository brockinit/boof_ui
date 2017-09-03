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
    this.state = {};
  }

  render() {
    const { data, stats } = this.props;
    const tableData = !data.loading ? stats.nodes : [];
    console.log('tableData', tableData);
    return (
      <div>
        <h2>Table</h2>
        {tableData.length > 0
          ? <Table
              rowHeight={50}
              headerHeight={50}
              rowsCount={tableData.length}
              width={1000}
              height={500}
              {...this.props}
            >
              <Column
                header={<Cell>Last Name</Cell>}
                cell={<TextCell data={tableData} col="playerName" />}
                fixed={true}
                width={100}
              />
            </Table>
          : ''}
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

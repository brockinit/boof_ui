import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Table, Column, Cell } from 'fixed-data-table';

const TextCell = ({ rowIndex, data, col, ...props }) =>
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>;

const HeaderCell = ({ handleSort, col, sortDir }) =>
  <Cell>
    <a onClick={e => handleSort(e, col)}>
      {col} {sortDir ? (sortDir === 'DESC' ? '↓' : '↑') : ''}
    </a>
  </Cell>;

class StatTable extends React.Component {
  constructor(props) {
    super(props);
    this.calculateColumns = this.calculateColumns.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
    this.state = {
      stats: [],
      sortDirection: 'ASC',
      sortBy: '',
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.stats !== nextProps.stats) {
      this.setState({ stats: nextProps.stats });
    }
  }

  reverseSortDirection() {
    let sortDirection = this.state.sortDirection === 'ASC' ? 'DESC' : 'ASC';
    this.setState({ sortDirection });
  }

  calculateColumns(node) {
    if (!node || Array.isArray(node)) {
      return [];
    }
    return Object.keys(node);
  }

  onSortChange(event, colName) {
    event.preventDefault();
    const { stats, sortDirection } = this.state;
    const statNodes = [...this.state.stats.nodes];

    const sortedStats = statNodes.sort((a, b) => {
      if (sortDirection === 'ASC') {
        return a[colName] - b[colName];
      } else {
        return b[colName] - a[colName];
      }
    });
    this.reverseSortDirection();

    return this.setState({
      stats: { ...stats, nodes: sortedStats },
      sortBy: colName,
    });
  }

  render() {
    const { data: { loading }, title, selectData } = this.props;
    const { sortDirection, stats, sortBy } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    const tableData = stats.nodes;
    const selectOptions = [
      { label: 'Passing (Season)', value: 'allSeasPasses' },
      { label: 'Rushing (Season)', value: 'allSeasRushes' },
      { label: 'Players', value: 'allPlayers' },
    ];
    console.log('selectData', selectData);
    return (
      <div className="stat-table">
        <Select
          name="form-field-name"
          value={title}
          options={selectOptions}
          onChange={selectData}
        />
        <Table
          rowHeight={50}
          headerHeight={50}
          rowsCount={tableData.length}
          width={1100}
          height={750}
          {...this.props}
        >
          {this.calculateColumns(tableData[0]).map((col, index) => {
            if (col === '__typename' || col === 'id') {
              return null;
            }
            return (
              <Column
                key={index}
                header={
                  <HeaderCell
                    handleSort={this.onSortChange}
                    col={col}
                    sortDir={sortBy === col ? sortDirection : null}
                  />
                }
                cell={<TextCell data={tableData} col={col} />}
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

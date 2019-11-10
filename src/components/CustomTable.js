import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

function CustomTable({ repo, data }) {
  const fromRepo = repo ? ` from ${repo}` : '';

  return (
    <MaterialTable
      title={'Open pull requests' + fromRepo}
      columns={[{ field: 'title' }]}
      data={data}
      options={{
        search: false,
        header: false,
      }}
    />
  );
}

CustomTable.propTypes = {
  repo: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string.isRequired }),
  ),
};

CustomTable.defaultProps = {
  repo: undefined,
};

export default CustomTable;

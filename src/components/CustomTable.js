import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

function CustomTable({ repo, data, pageSize, onChangePage }) {
  const fromRepo = repo ? ` from ${repo}` : '';

  return (
    <MaterialTable
      title={'Open pull requests' + fromRepo}
      columns={[{ field: 'title' }]}
      data={data}
      options={{
        search: false,
        header: false,
        pageSize,
        pageSizeOptions: [],
        showFirstLastPageButtons: false,
      }}
      localization={{
        pagination: {
          labelDisplayedRows: '{from}--{to}',
        },
      }}
      onChangePage={onChangePage}
    />
  );
}

CustomTable.propTypes = {
  repo: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string.isRequired }),
  ),
  pageSize: PropTypes.number,
  onChangePage: PropTypes.func,
};

CustomTable.defaultProps = {
  repo: undefined,
  pageSize: 5,
  onChangePage: undefined,
};

export default CustomTable;

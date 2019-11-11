import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ghAxios from '../config/ghAxios';
import CustomTable from './CustomTable';

const PER_PAGE = 10;

class PullRequestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: 1,
      isLoading: true,
      error: undefined,
    };

    this.handleOnChangePage = this.handleOnChangePage.bind(this);
  }

  fetchPullRequests(page, per_page) {
    const { user, repo } = this.props.match.params;

    return ghAxios.get(`repos/${user}/${repo}/pulls`, {
      params: {
        state: 'open',
        page,
        per_page,
      },
    });
  }

  async componentDidMount() {
    try {
      const { data } = await this.fetchPullRequests(
        this.state.page,
        // Fetch 2 pages + 1 row to make pagination smoother
        PER_PAGE * 2 + 1,
      );

      this.setState({
        data: data.map(({ title }) => ({ title })),
        isLoading: false,
      });
    } catch (e) {
      this.setState({
        isLoading: false,
        error: e.message,
      });
    }
  }

  async handleOnChangePage(page) {
    const nextPage = page + 1;
    const currentPage = this.state.page;

    // If going a page forward
    if (nextPage > currentPage) {
      const { data } = await this.fetchPullRequests(nextPage, PER_PAGE);

      this.setState({
        data: [
          ...this.state.data,
          ...data.map(({ title, body }) => ({ title, body })),
        ],
        page: nextPage,
      });
    } else {
      this.setState({ page: nextPage });
    }
  }

  render() {
    const { user, repo } = this.props.match.params;

    return (
      <CustomTable
        repo={user + '/' + repo}
        data={this.state.data}
        isLoading={this.state.isLoading}
        pageSize={PER_PAGE}
        onChangePage={this.handleOnChangePage}
        emptyDataSourceMessage={this.state.error}
      />
    );
  }
}

PullRequestList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PullRequestList;

import React, { Component } from 'react';
import { Query, graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import testMutation from './graphql/testMutation';

const isTrue = true;

class TestMutation extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default compose(
  graphql(testMutation, {
    props: ({ mutate }) => ({
      setTest: isTrue => {
        mutate({ variables: { isTrue } })
      }
    })
  })
)(TestMutation);

import React, { Component } from 'react';
import { Query, graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import testQuery from './graphql/testQuery';
import testMutation from './graphql/testMutation';

class TestQuery extends Component {

  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
        // <Query query={graphString}>
        //   {({ loading, error, data }) => {
        //     // if (loading) return <p>Loading...</p>;
        //     // if (error) return <p>Error :(</p>;

        //     // console.log(data)
        //     return <div></div>
        //   }}
        // </Query>
        <button onClick={e=>this.props.testMutation({variables:{test:true}})}>test</button>
    )
  }
}

export default compose(
  graphql(testMutation, {name: 'testMutation'}),
  graphql(testQuery, {
    props: ({ data: { rootState } }) => ({
      rootState
    })
  })
)(TestQuery);

// test query
const graphString = gql`{
  city(location: "new york", 
    genre:"music_rock",
    start_date: "20180610",
    end_date: "20180611"){
    location
    totalEvents
    events {
      city
      date
      event_url
      title
      venue_address
      venue_name
      venue_url
      performer {
          performer_name
          performer_url
          spotify {
            id
            tracks {
              name
              preview_url
              track_id
            }
          }
        }
    }
  }
}`

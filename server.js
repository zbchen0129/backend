const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const states = [ 'Alabama','Alaska','American Samoa', 
'Arizona',
'Arkansas',
'California',
'Colorado',
'Connecticut',
'Delaware',
'District of Columbia',
'Florida',
'Georgia',
'Guam',
'Hawaii',
'Idaho',
'Illinois',
'Indiana',
'Iowa',
'Kansas',
'Kentucky',
'Louisiana',
'Maine',
'Maryland',
'Massachusetts',
'Michigan',
'Minnesota',
'Mississippi',
'Missouri',
'Montana',
'Nebraska',
'Nevada',
'New Hampshire',
'New Jersey',
'New Mexico',
'New York',
'North Carolina',
'North Dakota',
'Northern Mariana Islands',
'Ohio',
'Oklahoma',
'Oregon',
'Pennsylvania',
'Puerto Rico',
'Rhode Island',
'South Carolina',
'South Dakota',
'Tennessee',
'Texas',
'U.S. Virgin Islands',
'Utah',
'Vermont',
'Virginia',
'Washington',
'West Virginia',
'Wisconsin',
'Wyoming'];

const schema = buildSchema(`
  type Query {
    getSuggestions(input: String!): [String]
  }
`);

const root = {
  getSuggestions: ({ input }) => {
    return states.filter(state => state.toLowerCase().includes(input.toLowerCase()));
  },
};

const rootValue = {
  getSuggestions: ({ input }) => states.filter(state => state.toLowerCase().startsWith(input.toLowerCase())),
};

const app = express();


app.use(cors());
app.use('/graphql', graphqlHTTP({ schema, rootValue, graphiql: true }));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
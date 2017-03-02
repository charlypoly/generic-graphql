# generic-graphql

> Generic GraphQL Wrapper for Rest API

--------------------

### Design goal


```typescript

let schema = `
  type Artist {
    id: String
    name: String
    popularity: Int
    type: String
  }
`;

let configuration = {
  root: 'http://myapi.com/api/v1',
  oAuth: false,
  inferRessourceFromTypes: true,
  generateQueries: true
};

let client: GenericGraphQLClient = new GenericGraphQL({
  adapter: new GenericGraphQLCRUD(configuration)
});

let query = `{
  query {
    artist($id: 1) {
      name
    }
  }
}`;

// call `http://myapi.com/api/v1/artists/1`
client.query(query, (executionResult) => {

});

```

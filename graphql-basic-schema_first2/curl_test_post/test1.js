
/*
const limit = 5;
const query = `query author($limit: Int!) {
    author(limit: $limit) {
        id
        name
    }
}`;

fetch('http://127.0.0.1:3000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { limit },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));



*/

const query = `query getPosts {
     getPosts {
       id
       title
       content
   }
}`;

fetch('http://127.0.0.1:3000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', JSON.stringify(data, null , " ")));


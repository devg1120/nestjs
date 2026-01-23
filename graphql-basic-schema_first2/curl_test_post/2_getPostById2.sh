tr  -d '\n' << EOF   > ./graphql.json
{"query":
     "
query getPostById(\$getPostInput: GetPostInput!) {
     getPostById(getPostInput: \$getPostInput) {
       id
       title
       author   { name }
       content
       comments2 { id text author { id name }}
   }
}

    "
,

"variables":
  {
      "getPostInput": {
        "id": "3"
     }
  }

}
EOF

# LOGIN GENERAL
curl  -H "content-type: application/json" -X POST --data  @./graphql.json \
http://127.0.0.1:3000/graphql | jq

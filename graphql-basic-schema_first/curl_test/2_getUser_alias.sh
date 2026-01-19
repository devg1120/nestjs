
tr -d '\n' << EOF  > ./graphql.json
{"query":
     "
     query getUser(\$getUserInput1: GetUserInput!,\$getUserInput2: GetUserInput!) {
          user1:getUser(getUserInput: \$getUserInput1) {
            id
            name
            email
            password
       },
          user2: getUser(getUserInput: \$getUserInput2) {
            id
            name
            email
            password
        }
     }
    "
,

"variables":
  {
     "getUserInput1": {
       "id": "3"
    },
     "getUserInput2": {
       "id": "1"
    }
  }

}
EOF

# LOGIN GENERAL
curl  -H "content-type: application/json" -X POST --data  @./graphql.json \
http://127.0.0.1:3000/graphql | jq

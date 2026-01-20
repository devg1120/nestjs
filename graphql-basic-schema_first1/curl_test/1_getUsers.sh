
tr -d '\n' << EOF  > ./graphql.json

{"query":
      "
       query getUsers {
               getUsers {
                 id
                 name
                 email
                 password
                 createdAt
                 updatedAt
             }
        }
      "

}
EOF

# LOGIN GENERAL
curl  -H "content-type: application/json" -X POST --data  @./graphql.json \
http://127.0.0.1:3000/graphql | jq

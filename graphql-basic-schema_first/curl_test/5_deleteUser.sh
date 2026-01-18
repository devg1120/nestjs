
tr -d '\n' << EOF  > ./graphql.json

{

"query":
   "
     mutation deleteUser(\$deleteUserInput: DeleteUserInput!) {
       deleteUser(deleteUserInput: \$deleteUserInput) {
          id
       }
     
     }

   "
 ,
   
 "variables":
   {
       "deleteUserInput": {
         "email": "bob@gmail.com"
      }
   }
}
EOF

# LOGIN GENERAL
curl  -H "content-type: application/json" -X POST --data  @./graphql.json \
http://127.0.0.1:3000/graphql | jq

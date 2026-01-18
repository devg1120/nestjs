
tr -d '\n' << EOF  > ./graphql.json

{

"query":
   "
    mutation createUser(\$createUserInput: CreateUserInput!) {
       createUser(createUserInput: \$createUserInput) {
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
     "createUserInput": {
         "name": "test",
         "email": "test@gmail.com",
         "password": "testtest",
         "confirmPassword": "testtest"
         }
   }
}
EOF

# LOGIN GENERAL
curl  -H "content-type: application/json" -X POST --data  @./graphql.json \
http://127.0.0.1:3000/graphql | jq

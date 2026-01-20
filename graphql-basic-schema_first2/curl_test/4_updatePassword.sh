
tr -d '\n' << EOF  > ./graphql.json

{

"query":
   "
    mutation updatePassword(\$updateUserPasswordInput: UpdateUserPasswordInput!) {
      updatePassword(updateUserPasswordInput: \$updateUserPasswordInput) {
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
     "updateUserPasswordInput": {
       "email": "test@gmail.com",
       "password": "testtest",
       "newPassword": "testtestNEW",
       "confirmPassword": "testtestNEW"
      }
   }
}
EOF

# LOGIN GENERAL
curl  -H "content-type: application/json" -X POST --data  @./graphql.json \
http://127.0.0.1:3000/graphql | jq

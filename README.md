# assignment

1.  create database in mysql 
DB name :  assignment
username : root
password :  ""

2.  npm install

3.  use API as menstion as postman collection

4.   for registration 
URL : http://localhost:8080/api/register
method : Post
For Admin (in json ):
{
    "role" : "admin"
    "name" : "rajat",
    "email" : "rajat@binmile.com",
    "password" : "alakh@123"
}

For User(in json ):
{
    "name" : "rajat",
    "email" : "rajat@binmile.com",
    "password" : "alakh@123"
}

5.   for Hit Admin API need pass , admin token in header.
6.   for Hit User API  need pass , user token in header.



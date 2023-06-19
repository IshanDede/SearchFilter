# Working: 
Accessed the input element and the ul element(to store the users as li ) through their respective id.
# getData():
We fetch random users from https://randomuser.me/ (a free open source API). We create a li element for each user and push the li into an empty array,userList.
We define the innerHTML of each li by accesing the properties( first name , last name , city ,etc ) of each user object.
Then we append each li to the ul.
# EventListener:
It is added to the input element and triggered on "input". It calls the searchFilter() with the e.target.value as its parameter.
# searchFilter():
We compare the innerText of each li we stored in the userList array to the e.target.value we recieved as parameter(user input) using forEach method.
If li doesnt contain the input , it is assigned a class of "hide" which hides the li in the ul.
Else if it does contain the input string. "hide" is removed from the li element.


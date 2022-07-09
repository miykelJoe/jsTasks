const date = new Date('1997-10-17');

console.log(date)


const userData = [
  {
    "firstName": "Paul",
    "lastName": "Ezekiel-Hart",
    "email": "hartpaulisimo@gmail.com",
    "createdAt": "Sat May 28 2022 13:41:09 GMT+0000 (Greenwich Mean Time)"
	}
]

console.log( new Date( userData[0].createdAt).getDate() )
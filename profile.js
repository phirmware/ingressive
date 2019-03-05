var queryString = window.location.search;
var queryObject  = new URLSearchParams(queryString);
var userName = queryObject.get('name');
var userImg = queryObject.get('image');

console.log(userImg,'image');
console.log(userName,'name');

document.getElementById('user_image').src = userImg;
document.getElementById('user_name').textContent = userName;
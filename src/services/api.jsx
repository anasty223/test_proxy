

export async function fetchUsers() {
  return  fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json())
  .then(resp => {return resp})

}

export default fetchUsers;


export async function fetchUsersById(usersId) {
  return  fetch(`https://jsonplaceholder.typicode.com/users/${usersId}`).then(response => response.json())
  .then(resp => {return resp})

}

export async function fetchPost(usersId) {
  return  fetch(`https://jsonplaceholder.typicode.com/posts/${usersId}`).then(response => response.json())
  .then(resp => {return resp})

}

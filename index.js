// Add your code here
<<<<<<< HEAD

function submitData (userName, userEmail) {
  const body = document.querySelector('body')
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    })
  })
  .then((response) => response.json())
  .then((object) => {
    document.body.innerHTML = object['id']
  })
  .catch((error) => {
    document.body.innerHTML = error.message
  })
=======
let formData = {
  name: 'userName',
  email: 'userEmail'
}

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
}


function submitData (userName, userEmail) {
  return fetch('http://localhost:3000/users', configObj)
>>>>>>> 9bfaf97c099924b2aa64d095777d8236c8d429fe
}

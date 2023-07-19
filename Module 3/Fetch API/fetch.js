const getAllBtn = document.getElementById('getAll-btn');
const getSingleBtn = document.getElementById('getSingle-btn');
const postBtn = document.getElementById('post-btn');
const deleteBtn = document.getElementById('delete-btn');
const updateBtn = document.getElementById('update-btn');

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: data ? JSON.stringify(data) : null,
    headers: data ? { "Content-Type": "application/json" } : {}
  })
    .then(response => {
      if (response.status >= 400) {
        if (response.status !== 204) {
          return response.json().then(errData => {
            const error = new Error(`${response.status}: Something Went Wrong`);
            error.data = errData;
            throw error;
          });
        }
        throw new Error(`${response.status}: Something Went Wrong`);
      }
      if (response.status === 204) {
        return null; // No content in response for DELETE request
      }
      return response.json();
    });
};


//GET All The Data
const getAllData = () => {
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/users')
  .then(resData => console.log(resData));
};

//GET Single Data
const getSingleData = () => {
  // Get user with id 2
  let UserId = 3;
  sendHttpRequest('GET', `https://jsonplaceholder.typicode.com/users/${UserId}`)
  .then(resData => console.log(resData));
};


//Post The Data
const postData = () => {
  // Get user with id 2
  sendHttpRequest('POST','https://jsonplaceholder.typicode.com/users', {
    username: 'Elon Musk',        //Only this mail address is accepted for this api
    email: 'elonmusk@gmail.com',
  })
    .then(data => console.log(data))
    .catch(err => console.log(err, err.data))
};

//Delete The Data
const deleteData = () => {
  let userIdToDelete = 1;
  sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/users/${userIdToDelete}`)
    .then(() => console.log(`User ${userIdToDelete} deleted`))
    .catch(err => {
      console.log(err);
    });
};


//Update UserDat
const updateData = () => {
  let userIdToUpdate  = 1;
  let updatedUserData = {
    username : "Sandeep Seeram",
    email : "sandeep@example.com"
  };

  sendHttpRequest("PUT", `https://jsonplaceholder.typicode.com/users/${userIdToUpdate}`, updatedUserData)
  .then(resData => console.log(resData))
  .catch(err => console.log(err, err.data))
}




getAllBtn.addEventListener("click", getAllData);
getSingleBtn.addEventListener("click", getSingleData);
postBtn.addEventListener("click", postData);
deleteBtn.addEventListener("click", deleteData);
updateBtn.addEventListener("click", updateData);
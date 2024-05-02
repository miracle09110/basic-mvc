class UserModel {
  constructor() {}

  async getUsers() {
    let response;
    try {
      response = await fetch("http://localhost:3333/v1.0.0/users", {
        headers: {
          "Authorization": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }

    if(response.status === 401) {
      localStorage.removeItem("token");
      throw new Error("Unauthorized access");
    }else if(!response?.ok) {
      throw new Error("Failed to get users");
    }
     
  }

  
  // async getUsers() {

  //   return fetch("http://localhost:3333/v1.0.0/users", {
  //       headers: {
  //         "Authorization": localStorage.getItem("token"),
  //       },
  //     })
  //     .then(response => {
  //       if(response.status === 401) {
  //         localStorage.removeItem("token");
  //         throw new Error("Unauthorized access");
  //       }else if(!response?.ok) {
  //         throw new Error("Failed to get users");
  //       }
  //       return response.json();
  //     })
  //     .then(data =>{
  //       return data;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  
  // }

  async addUser(user) {
    try {
      const response = await fetch("http://localhost:3333/v1.0.0/users", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(user), // body data type must match "Content-Type" header
      });

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }

    if(response.status === 401) {
      localStorage.removeItem("token");
      throw new Error("Unauthorized access");
    }else if(!response?.ok) {
      throw new Error("Failed to get users");
    }
  }

  async login(email, password) {
    try {
      const user = {
        email: email,
        password: password,
      };
      const response = await fetch("http://localhost:3333/v1.0.0/auth/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(user), // body data type must match "Content-Type" header
      });

      const data = await response.text();
      return data;
    } catch (err) {
      throw new Error("Failed to add user", err);
    }
  }
}

const model = new UserModel();
export default model;

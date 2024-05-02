import { useEffect, useState } from 'react';

//views
import CreateUserForm from '../view/CreateUserForm';
import UserList from '../view/UserList';

//models
import userModel from '../model/UserModel';


function UserController() {
  const [currentUsers,  setCurrentUsers] = useState([]);
  const [user, setUser] = useState({
    name: 'default-user',
    email: 'default.email@domain.com',
    password: '12345',
    age: 0,
  });


  useEffect( () => {
    async function fetchData() {
      return userModel.getUsers();
    }
    
    fetchData()
      .then(users => {
        setCurrentUsers(users);
      })
  },[])

  const handleInput = (event) => {
    switch (event.target.name) {
      case 'name':
        setUser({
          ...user,
          name: event.target.value,
        });
        break;
      case 'email':
        setUser({
          ...user,
          email: event.target.value,
        });
        break;
      case 'password':
        setUser({
          ...user,
          password: event.target.value,
        });
        break;
      case 'age':
        setUser({
          ...user,
          age: +event.target.value,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = await userModel.addUser({...user});
    setCurrentUsers([...currentUsers, newUser]);
  }

  return (
    <div>
      <CreateUserForm 
        onChange={handleInput}
        onSubmit={handleSubmit}
        name={user.name}
        email={user.email}
        password={user.password}
        age={user.age}
      />
      <UserList users={currentUsers}/>
    </div>
  );
}

export default UserController;

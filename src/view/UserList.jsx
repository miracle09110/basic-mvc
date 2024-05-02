function UserList(props) {
  const { users } = props;
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

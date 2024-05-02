function CreateUserForm(props) {
  const {
    onSubmit,
    onChange,
    name,
    email,
    password,
    age
  } = props;
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          onChange={onChange}
          id="name"
          name="name"
          type="text"
          value={name}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={onChange}
          id="email"
          name="email"
          type="email"
          value={email}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          onChange={onChange}
          id="password"
          name="password"
          type="password"
          value={password}
        />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          onChange={onChange}
          id="age"
          name="age"
          type="number"
          value={age}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CreateUserForm;

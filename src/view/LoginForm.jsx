function LoginForm(props) {
  const { onSubmit, onChange, email, password } = props;
  return (
    <form onSubmit={onSubmit}>
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
      <input type="submit" value="Login" />

    </form>
  );
}

export default LoginForm;

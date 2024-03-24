import Logo from '../../components/UI/Logo';

const Login = () => {
  return (
    <main className="w-screen h-screen grid place-content-center bg-black text-white">
      <Logo className="w-[300px]" />
      <form className="mx-auto flex flex-col gap-4 w-[300px] p-6 border border-yellow-300 rounded-md">
        <h1 className="text-center text-2xl font-semibold">Login</h1>
        <fieldset className="text-black flex flex-col gap-2 py-4">
          <label htmlFor="email" className="text-white">
            Email:
          </label>
          <input id="email" type="email" />
          <label htmlFor="password" className="text-white">
            Passsword:
          </label>
          <input id="password" type="password" />
        </fieldset>
        <button type="submit" className="border-2 border-yellow-500 rounded-lg p-2">
          Přihlásit se
        </button>
      </form>
    </main>
  );
};

export default Login;

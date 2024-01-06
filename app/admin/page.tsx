import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-screen bg-black text-white">
      <form className="mx-auto flex flex-col gap-4 w-64 p-4 border border-yellow-300 rounded-md">
        <fieldset className="text-black flex flex-col gap-2">
          <input type="email" />
          <input type="password" />
        </fieldset>
        <button type="submit" className="border-2 border-yellow-500 rounded-lg p-2">
          Přihlásit se
        </button>
      </form>
    </main>
  );
}

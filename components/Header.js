// export default function Footer({ reports }) {
//     const totalRows = reports;
//     // const totalRows = reports.length;
//     return (
//         <footer className="text-black-50 bg-green-500 p-4 mt-4 text-gray-800">
//             {totalRows} location world wide
//         </footer>
//     );
// }

import { useAuth } from "../contexts/auth";

export default function Header() {
    const { user, logout } = useAuth();

    return (
      <header className="bg-green-500 text-black-50 p-4 text-gray-800">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
        {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"  onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
      </header>
    );
  }
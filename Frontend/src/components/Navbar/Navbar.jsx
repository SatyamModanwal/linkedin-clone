// const Navbar=()=>{
//     return<h2>Navbar</h2>;

// };
// export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <h2>LinkedIn Clone</h2>

//       <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>

//         <li>
//           <Link to="/network">Network</Link>
//         </li>

//         <li>
//           <Link to="/messages">Messages</Link>
//         </li>

//         <li>
//           <Link to="/notifications">Notifications</Link>
//         </li>

//         <li>
//           <Link to="/profile">Profile</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}

          <div>
            <Link
              to="/"
              className="text-blue-600 font-bold text-3xl"
            >
              in
            </Link>
          </div>

          {/* Search */}

          <div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 px-4 py-2 rounded-md outline-none w-72"
            />
          </div>

          {/* Menu */}

          <div className="flex gap-6">

            <Link to="/">Home</Link>

            <Link to="/network">Network</Link>

            <Link to="/messages">Messages</Link>

            <Link to="/notifications">
              Notifications
            </Link>

            <Link to="/profile">
              Profile
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
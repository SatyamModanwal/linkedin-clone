// function Home() {
//   return <h1>Home Page</h1>;
// }

// export default Home;

//step 20
// function Home() {
//   return (
//     <div className="text-4xl font-bold text-center mt-10">
//       Tailwind Working 🚀
//     </div>
//   );
// }

// export default Home;

//s-22
// import Sidebar from "../components/Sidebar/Sidebar";

// function Home() {
//   return (
//     <div className="max-w-7xl mx-auto mt-6">
//       <div className="grid grid-cols-12 gap-4">

//         <div className="col-span-3 bg-white p-4 rounded shadow">
//           <Sidebar />
//         </div>

//         <div className="col-span-6 bg-white p-4 rounded shadow">
//           Feed Section
//         </div>

//         <div className="col-span-3 bg-white p-4 rounded shadow">
//           News Section
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Home;


// function Home() {
//   return (
//     <h1 className="text-5xl font-bold text-red-500">
//       Tailwind Test
//     </h1>
//   );
// }

// export default Home;
   


// import Sidebar from "../components/Sidebar/Sidebar";
// import CreatePost from "../components/CreatePost/CreatePost";
// //s-27.2
// import PostCard from "../components/PostCard/PostCard";


// function Home() {
//   return (
//     <div className="max-w-7xl mx-auto mt-6">
//       <div className="grid grid-cols-12 gap-4">

//         <div className="col-span-3 bg-white p-4 rounded shadow">
//           <Sidebar />
//         </div>
// {/* 
//         <div className="col-span-6">
//           <CreatePost />
//         </div> */

//         //s-27.4
//         <div className="col-span-6">

//   <CreatePost />

//   <PostCard />

//   <PostCard />

// </div>}

//         <div className="col-span-3 bg-white p-4 rounded shadow">
//           News Section
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Home;

// import Sidebar from "../components/Sidebar/Sidebar";
// import CreatePost from "../components/CreatePost/CreatePost";
// import PostCard from "../components/PostCard/PostCard";

// function Home() {
//   const posts = [
//     {
//       id: 1,
//       name: "John Doe",
//       role: "MERN Stack Developer",
//       content: "Excited to share my LinkedIn Clone Project 🚀",
//     },
//     {
//       id: 2,
//       name: "Rahul Sharma",
//       role: "Frontend Developer",
//       content: "Learning React and Tailwind CSS 🔥",
//     },
//     {
//       id: 3,
//       name: "Aman Kumar",
//       role: "Full Stack Developer",
//       content: "Working on LinkedIn Clone using MERN Stack 💻",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto mt-6">
//       <div className="grid grid-cols-12 gap-4">
        
//         {/* Left Sidebar */}
//         <div className="col-span-3 bg-white p-4 rounded shadow">
//           <Sidebar />
//         </div>

//         {/* Feed Section */}
//         <div className="col-span-6">
//           <CreatePost />

//           {posts.map((post) => (
//             <PostCard
//               key={post.id}
//               name={post.name}
//               role={post.role}
//               content={post.content}
//             />
//           ))}
//         </div>

//         {/* Right Section */}
//         <div className="col-span-3 bg-white p-4 rounded shadow">
//           <h2 className="font-bold text-lg mb-2">LinkedIn News</h2>
//           <ul className="space-y-2">
//             <li>🚀 React 19 Released</li>
//             <li>💼 Hiring for MERN Developers</li>
//             <li>🔥 Tailwind CSS Trending</li>
//             <li>📈 Tech Jobs Growing Fast</li>
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Home;


//s-29.4
// import { useState } from "react";

// import Sidebar from "../components/Sidebar/Sidebar";
// import CreatePost from "../components/CreatePost/CreatePost";
// import PostCard from "../components/PostCard/PostCard";

// function Home() {
//  const [posts, setPosts] = useState([
//   {
//     id: 1,
//     name: "John Doe",
//     role: "MERN Stack Developer",
//     content: "Excited to share my LinkedIn Clone Project 🚀",
//   },
//   {
//     id: 2,
//     name: "Rahul Sharma",
//     role: "Frontend Developer",
//     content: "Learning React and Tailwind CSS 🔥",
//   },
// ]);




//   return (
//     <div className="max-w-7xl mx-auto mt-6">
//       <div className="grid grid-cols-12 gap-4">

//         {/* Left Sidebar */}
//         <div className="col-span-3 bg-white p-4 rounded shadow">
//           <Sidebar />
//         </div>

//         {/* Feed Section */}
//         <div className="col-span-6">
//           <CreatePost />

//           {posts.map((post) => (
//             <PostCard
//               key={post.id}
//               post={post}
//             />
//           ))}
//         </div>

//         {/* Right Section */}
//         <div className="col-span-3 bg-white p-4 rounded shadow">
//           <h2 className="font-bold text-lg mb-2">
//             LinkedIn News
//           </h2>

//           <ul className="space-y-2">
//             <li>🚀 React 19 Released</li>
//             <li>💼 Hiring for MERN Developers</li>
//             <li>🔥 Tailwind CSS Trending</li>
//             <li>📈 Tech Jobs Growing Fast</li>
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Home;


import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import CreatePost from "../components/CreatePost/CreatePost";
import PostCard from "../components/PostCard/PostCard";

function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "MERN Stack Developer",
      content: "Excited to share my LinkedIn Clone Project 🚀",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      content: "Learning React and Tailwind CSS 🔥",
    },
    {
      id: 3,
      name: "Aman Kumar",
      role: "Full Stack Developer",
      content: "Working on LinkedIn Clone using MERN Stack 💻",
    },
  ]);

  const addPost = (content) => {
    const newPost = {
      id: Date.now(),
      name: "You",
      role: "MERN Learner",
      content: content,
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <div className="grid grid-cols-12 gap-4">

        {/* Left Sidebar */}
        <div className="col-span-3 bg-white p-4 rounded shadow">
          <Sidebar />
        </div>

        {/* Feed Section */}
        <div className="col-span-6">

          <CreatePost addPost={addPost} />

          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}

        </div>

        {/* Right Section */}
        <div className="col-span-3 bg-white p-4 rounded shadow">

          <h2 className="font-bold text-lg mb-2">
            LinkedIn News
          </h2>

          <ul className="space-y-2">
            <li>🚀 React 19 Released</li>
            <li>💼 Hiring for MERN Developers</li>
            <li>🔥 Tailwind CSS Trending</li>
            <li>📈 Tech Jobs Growing Fast</li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default Home;
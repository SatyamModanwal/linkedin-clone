// const PostCard = () => {
//   return <h2>Post Card</h2>;
// };

// export default PostCard;


//s-26
// function PostCard() {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow mt-4">

//       <div className="flex items-center gap-3">

//         <img
//           src="https://via.placeholder.com/50"
//           alt=""
//           className="rounded-full"
//         />

//         <div>
//           <h3 className="font-bold">
//             John Doe
//           </h3>

//           <p className="text-gray-500 text-sm">
//             MERN Stack Developer
//           </p>
//         </div>

//       </div>

//       <p className="mt-4">
//         Excited to share my new LinkedIn Clone project built using MERN Stack 🚀
//       </p>

//       <div className="flex justify-around mt-4 border-t pt-3">

//         <button>👍 Like</button>

//         <button>💬 Comment</button>

//         <button>↗ Share</button>

//       </div>

//     </div>
//   );
// }

// export default PostCard;

//s-28.3
// const posts = [
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

//   {
//     id: 3,
//     name: "Aman Kumar",
//     role: "Full Stack Developer",
//     content: "Working on LinkedIn Clone using MERN Stack 💻",
//   },
// ];



// function PostCard({ post }) {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow mt-4">

//       <div className="flex items-center gap-3">

//         <img
//           src="https://via.placeholder.com/50"
//           alt=""
//           className="rounded-full"
//         />

//         <div>
//           <h3 className="font-bold">
//             {post.name}
//           </h3>

//           <p className="text-gray-500 text-sm">
//             {post.role}
//           </p>
//         </div>

//       </div>

//       <p className="mt-4">
//         {post.content}
//       </p>

//       <div className="flex justify-around mt-4 border-t pt-3">
//         <button>👍 Like</button>
//         <button>💬 Comment</button>
//         <button>↗ Share</button>
//       </div>

//     </div>
//   );
// }

// export default PostCard;


function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">

      {/* User Info */}
      <div className="flex items-center gap-3">

        <img
          src="https://via.placeholder.com/50"
          alt="profile"
          className="rounded-full"
        />

        <div>
          <h3 className="font-bold">
            {post.name}
          </h3>

          <p className="text-gray-500 text-sm">
            {post.role}
          </p>
        </div>

      </div>

      {/* Post Content */}
      <p className="mt-4">
        {post.content}
      </p>

      {/* Actions */}
      <div className="flex justify-around mt-4 border-t pt-3">

        <button className="hover:text-blue-500">
          👍 Like
        </button>

        <button className="hover:text-blue-500">
          💬 Comment
        </button>

        <button className="hover:text-blue-500">
          ↗ Share
        </button>

      </div>

    </div>
  );
}

export default PostCard;
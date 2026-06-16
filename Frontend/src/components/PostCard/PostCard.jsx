// const PostCard = () => {
//   return <h2>Post Card</h2>;
// };

// export default PostCard;


//s-26
function PostCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">

      <div className="flex items-center gap-3">

        <img
          src="https://via.placeholder.com/50"
          alt=""
          className="rounded-full"
        />

        <div>
          <h3 className="font-bold">
            John Doe
          </h3>

          <p className="text-gray-500 text-sm">
            MERN Stack Developer
          </p>
        </div>

      </div>

      <p className="mt-4">
        Excited to share my new LinkedIn Clone project built using MERN Stack 🚀
      </p>

      <div className="flex justify-around mt-4 border-t pt-3">

        <button>👍 Like</button>

        <button>💬 Comment</button>

        <button>↗ Share</button>

      </div>

    </div>
  );
}

export default PostCard;
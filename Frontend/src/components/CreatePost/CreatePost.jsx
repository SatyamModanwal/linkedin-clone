// const CreatePost = () => {
//   return <h2>Create Post</h2>;
// };

// export default CreatePost;


function CreatePost() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">

      <input
        type="text"
        placeholder="Start a post..."
        className="w-full border p-3 rounded-full"
      />

      <div className="flex justify-around mt-4">

        <button>📷 Photo</button>

        <button>🎥 Video</button>

        <button>📰 Article</button>

      </div>

    </div>
  );
}

export default CreatePost;
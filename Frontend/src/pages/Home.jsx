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
   


import Sidebar from "../components/Sidebar/Sidebar";
import CreatePost from "../components/CreatePost/CreatePost";
//s-27.2
import PostCard from "../components/PostCard/PostCard";


function Home() {
  return (
    <div className="max-w-7xl mx-auto mt-6">
      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-3 bg-white p-4 rounded shadow">
          <Sidebar />
        </div>
{/* 
        <div className="col-span-6">
          <CreatePost />
        </div> */

        //s-27.4
        <div className="col-span-6">

  <CreatePost />

  <PostCard />

  <PostCard />

</div>}

        <div className="col-span-3 bg-white p-4 rounded shadow">
          News Section
        </div>

      </div>
    </div>
  );
}

export default Home;

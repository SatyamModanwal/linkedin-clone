// const Sidebar=()=>{
//     return<h2>Sidebar</h2>;
// };
// export default Sidebar;

//s-23
function Sidebar() {
  return (
    <div>
      <div className="text-center">

        <img
          src="https://via.placeholder.com/80"
          alt=""
          className="rounded-full mx-auto"
        />

        <h2 className="mt-3 font-bold">
          User Name
        </h2>

        <p className="text-gray-500">
          MERN Developer
        </p>

      </div>
    </div>
  );
}

export default Sidebar;
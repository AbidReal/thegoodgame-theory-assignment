import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="custom-container">
        {/* Search option Start */}
        <div className=" flex justify-center mx-auto mb-10  ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary">
            <FaSearch />
          </button>
        </div>

        {/* Card Start */}
        <div className="flex flex-col gap-4 ">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

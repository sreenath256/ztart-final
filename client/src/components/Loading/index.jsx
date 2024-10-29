import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

function Loader() {
  return (
    <>
      <div className="h-[90vh] w-full grid place-items-center">
        <PuffLoader color="#009A92" size={50} />
      </div>
    </>
  );
}

export default Loader;

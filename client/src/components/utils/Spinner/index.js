import React, { Fragment } from "react";

const Spinner = () => {
  return (
    <Fragment>
      <div className="w-full h-full fixed block bg-white opacity-100 z-50">
        <span
          className="text-primary opacity-100 block relative w-0 h-0"
          style={{
            top: "calc( 50% - ( 80px / 2) )",
            left: "calc( 50% - ( 80px / 2) )",
          }}>
          <i className="fas fa-circle-notch fa-spin fa-5x"></i>
        </span>
      </div>
    </Fragment>
  );
};

export default Spinner;

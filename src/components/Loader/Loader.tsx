import React, { useState, CSSProperties, FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

interface LoaderProps {
  loading: boolean;
}

const Loader: FC<LoaderProps> = ({ loading }) => {
  return (
    <div className="sweet-loading">
      <ClipLoader
        color={"#000"}
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </div>
  );
};

export default Loader;

import React from "react";
import loading from "../../assets/images/loading.gif";
function Loading({ width, height, message, className }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        border: 0,
        height: "100%",
      }}
    >
      <img
        src={loading}
        width={width}
        height={height}
        alt="loading_icon"
        className={className}
      />
      {message && <span>{message}</span>}
    </div>
  );
}

export default Loading;

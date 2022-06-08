import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("me volví a crear");
  const factor = 5;
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(factor);
      }}
    >
      Incrementar
    </button>
  );
});

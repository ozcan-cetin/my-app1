import React from "react";

function layout({ children }) {
  return (
    <div>
      <h1>ben test layoutundan geliyoruom</h1>
      <div>{children}</div>
    </div>
  );
}

export default layout;

import React from "react";

export default function Mobile() {
  const mytVar = 23;
  return (
    <div>
      <p>{mytVar}</p>
    </div>
  );
}

export const NewMobile = () => (
  <div>
    <div>
      <p>New Mobile</p>
    </div>
  </div>
);

export const CompFrag = () => (
  <>
    <div />
    <h1>Fragment</h1>
    <div />
  </>
);

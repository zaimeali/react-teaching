import React from "react";
import "./style.css";

// Component
import Mobile, { NewMobile } from "./component/Mobile";
import Laptop from "./component/Laptop";

export const New = () => <h1>GeForce</h1>;

function Root() {
  return (
    <div>
      <Laptop
        name="Lenovo"
        processor="i7"
        ram={8}
        isGPU={false}
        isSSD={true}
        isGeForce={true}
      />
      <NewMobile />
      <h1>qwertyuio</h1>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Root />
      <Mobile />
      <New />
      <h1>Hello StackBlitz!</h1>
      <p>(: (: Start editing to see some magic happen :) :)</p>
    </div>
  );
}

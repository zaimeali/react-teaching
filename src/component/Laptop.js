import React, { Fragment } from "react";

import { New } from './../App'

export default function Laptop({ name, processor, ram, isGPU, isSSD, isGeForce }) {
  // const { name, processor } = props;
  return (
    <Fragment>
      <p>Laptop Component</p>
      <p>Laptop Name: {name}</p>
      <p>Laptop Processor: {processor} core</p>
      <p>Laptop RAM: { ram } GB</p>
      <p>Laptop GPU: 
        {
          isGPU ? 'NVIDIA' : 'Intel'
        }
      </p>
      <p>Laptop SSD: { isSSD && "M2" }</p>
      <p>{ isGeForce && <New /> }</p>
    </Fragment>
  );
}

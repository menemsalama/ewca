import React from "react";
import InlineSVG from 'svg-inline-react';

import "./index.css"
import CircleLoader from './circle.loader.js';

export const MainLoader = () => {
  return (
    <div className="App-main-loader">
      <InlineSVG src={CircleLoader} />
      <hr />
    </div>
  )
};

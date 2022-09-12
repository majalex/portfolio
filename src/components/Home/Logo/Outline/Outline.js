import * as React from "react";

const SVGComponent = (props, ref) => (
  <svg
    id="Warstwa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 887 850"
    style={{
      enableBackground: "new 0 0 887 850",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {
        "\n\t.st0{fill:none;}\n\t.st1{enable-background:new    ;}\n\t.st2{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}\n"
      }
    </style>
    <rect x={-406.3} y={-94} className="st0 svg-container" width={1861.3} height={1038.7} />
    <g className="st1 svg-container">
      <path
        ref={ref}
        className="st2 svg-container"
        d="M182.6,845.3H11c-6,0-9.6-6-6-12l471.6-816c4.8-7.2,12-12,20.4-12h219.6 M809,845.3H657.8 c-7.2,0-13.2-6-14.4-13.2l-18-200.4H373.1 M613.4,486.5L590,227"
      />
    </g>
    <rect x={-361.3} y={-94} className="st0" width={1861.3} height={1038.7} />
    <g className="st1 svg-container">
      <path
        ref={ref}
        className="st2 svg-container"
        d="M719.9,845.3c-7.2,0-13.2-6-14.4-13.2l-18-200.4H373.1L263.9,833.3c-3.6,7.2-10.8,12-19.2,12H73.1 c-6,0-9.6-6-6-12l471.6-816c4.8-7.2,12-12,20.4-12h219.6c7.2,0,14.4,6,14.4,13.2l90,813.6c0,7.2-4.8,13.2-12,13.2H719.9z  M675.5,486.5l-32.4-358.8l-192,358.8H675.5z"
      />
    </g>
  </svg>
);

export default React.forwardRef(SVGComponent);

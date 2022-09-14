import * as React from "react";

const SVGComponent = (props, ref) => (

  <svg
    id="Warstwa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 895.1 875.4"
    style={{
      enableBackground: "new 0 0 895.1 875.4",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {
        "\n\t.st0{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n"
      }
    </style>
    <g>
      <path
        ref={ref}
        className="st0 svg-container"
        d="M198.6,869.5H8.1L315.3,9H524 M827.2,869.5H631.5l-54.4-177.6l-254.1,0 M416.3,202 M525.2,544.2l-76.9-244.4  M306.2,544.2"
      />
    </g>
    <g>
      <path
        ref={ref}
        className="st0 svg-container"
        d="M694.9,869.5l-54.4-177.6H323l-60.9,177.6H71.6L378.8,9h208.7l303.3,860.5H694.9z M481.1,202.1h-1.3 L369.6,544.2h219L481.1,202.1z"
      />
    </g>
  </svg>
);

export default React.forwardRef(SVGComponent);

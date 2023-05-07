import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}
      style={{width:'100%', height:'100%'}}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#faa916"
        strokeWidth={2}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-1.5333, 52.3]}
        dx={-100}
        dy={30}
        connectorProps={{
          stroke: "#faa916",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#faa916">
          {"I'm Here!"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
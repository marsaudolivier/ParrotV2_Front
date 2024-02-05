
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Slider from "react-slider";

export function RangeSliderYears() {
  const [rangeValues, setRangeValues] = useState([1950, 2024]);

  const handleRangeChange = (values) => {
    setRangeValues(values);
    console.log(values);
  };
  return ( 
        <div className="col-12 col-md-3">
          <div className="p-5 text-danger card_vente">
          <h4>Année :</h4>
            <Slider
              min={1950}
              max={2024}
              values={rangeValues}
              onChange={handleRangeChange}
              minDistance={1}
              maxDistance={10}
              pearling
              ariaLabel={["Lower thumb", "Upper thumb"]}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              ariaLabelledby="mylabel"
              onSlide={handleRangeChange}
              defaultValue={[1950, 2024]}
              renderThumb={(props, state) => (
                <div
                  {...props}
                  style={{
                    // eslint-disable-next-line react/prop-types
                    ...props.style,
                    backgroundColor: "#2f2569",
                    color: "#fff",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    boxSizing: "border-box",
                  }}
                >
                  {state.valueNow}
                </div>
              )}
              renderTrack={(props) => (
                <div
                  {...props}
                  style={{
                    // eslint-disable-next-line react/prop-types
                    ...props.style,
                    background: "#2f2569",
                    height: "8px",
                    width: `${
                      ((rangeValues[1] - rangeValues[0]) / (2024 - 1950)) * 100
                    }%`,
                    left: `${((rangeValues[0] - 1950) / (2024 - 1950)) * 100}%`,
                    borderRadius: "3px",
                  }}
                />
              )}
            />
          </div>
        </div>
  );
}

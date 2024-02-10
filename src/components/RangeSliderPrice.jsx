import React, { useState, useEffect } from "react";
import Slider from "react-slider";

export function RangeSliderPrice({ onChange }) {
  const [rangeValues, setRangeValues] = useState([0, 100000]);
  const [initialized, setInitialized] = useState(false);

  const handleRangeChange = (values) => {
    setRangeValues(values);
    onChange(values);
  };

  useEffect(() => {
    // Mettez à jour les valeurs initiales après le chargement initial (peut être ajusté selon votre logique)
    setInitialized(true);
  }, []);

  return (
    initialized && (
      <div className="col-12 col-md-3">
        <div className="p-2 text-danger card_vente">
        <h4>Prix :</h4>
          <Slider
            min={0}
            max={100000}
            values={rangeValues}
            onChange={handleRangeChange}
            minDistance={1}
            maxDistance={10}
            pearling
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            ariaLabelledby="mylabel"
            onSlide={handleRangeChange}
            defaultValue={[0, 100000]}
            renderThumb={(props, state) => (
              <div
                {...props}
                style={{
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
                  ...props.style,
                  background: "#2f2569",
                  height: "8px",
                  width: `${
                    ((rangeValues[1] - rangeValues[0]) / (100000 - 0)) * 100
                  }%`,
                  left: `${
                    ((rangeValues[0] - 0) / (100000 - 0)) * 100
                  }%`,
                  borderRadius: "3px",
                }}
              />
            )}
          />
        </div>
      </div>
    )
  );
}

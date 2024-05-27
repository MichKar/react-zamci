import React, { useEffect, useState } from "react";

const Work = ({ m, z }) => {
  const [meters, setMeters] = useState("");
  const [hours, setHours] = useState("");
  const btnOdeslat = document.querySelector(".btn-odeslat");
  const metersPerHourTotal = m + z * 0.5;

  const meterChange = (e) => {
    setMeters(e.target.value);
  };

  const hourChange = (e) => {
    setHours(e.target.value);
  };

  useEffect(() => {}, [meters, hours, metersPerHourTotal]);

  const handleSubmit = () => {
    alert("práce zazána");
  };

  return (
    <form>
      <input type="number" placeholder="Počet metrů" onChange={meterChange} />
      <br />
      <input type="number" placeholder="Kolik hodin" onChange={hourChange} />
      <br />
      <button className="btn-odeslat" onClick={handleSubmit}>
        Odeslat
      </button>
    </form>
  );
};

export default Work;

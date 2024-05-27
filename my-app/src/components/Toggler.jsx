import React from "react";

const Toggler = ({ activeBtn }) => {
  const handleToggler = (e) => {
    activeBtn(e.target.name);
  };

  return (
    <div>
      <button name="seznam" onClick={handleToggler}>
        Seznam zaměstnanců
      </button>
      <button name="prace" onClick={handleToggler}>
        Zadání práce
      </button>
    </div>
  );
};

export default Toggler;

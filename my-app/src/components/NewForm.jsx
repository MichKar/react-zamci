import React from "react";

const NewForm = ({ data, onChange, onAdd }) => {
  return (
    <div>
      <form>
        <p>
          <strong>Formulář na přidání zaměstnance</strong>
        </p>
        <input
          type="text"
          name="firstname"
          placeholder="Jméno"
          value={data.firstname}
          onChange={onChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Příjmení"
          value={data.surname}
          onChange={onChange}
        />
        <br />
        <br />
        <div onChange={onChange}>
          <label>
            <input type="radio" name="gender" value="muž" />
            muž
          </label>
          <br />
          <label>
            <input type="radio" name="gender" value="žena" />
            žena
          </label>
        </div>
        <br />
        <br />
        <button onClick={onAdd}>Přidat zaměstnance</button>
      </form>
    </div>
  );
};

export default NewForm;

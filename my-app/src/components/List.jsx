import React from "react";

function List({ data, onDelete }) {
  return (
    <div>
      {data.map((employee) => {
        return (
          <div key={employee.id}>
            <li>
              <span>
                {employee.firstname} {employee.surname} - {employee.gender}
              </span>
              <button onClick={() => onDelete(employee.id, employee.gender)}>
                Smazat
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default List;

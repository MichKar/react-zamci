import { useState } from "react";
import "./App.css";
import NewForm from "./components/NewForm";
import List from "./components/List";
import Toggler from "./components/Toggler";
import Work from "./components/Work";

let muzi = 0;
let zeny = 0;

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id:
      employees.length > 0
        ? Math.max(...employees.map((oneEmployee) => oneEmployee.id)) + 1
        : 1,
    firstname: "",
    surname: "",
    gender: "",
  });
  const [active, setActive] = useState("seznam");

  // zachycení změn ve formuláři
  const handleChange = (e) => {
    const updatedEmployee = {
      ...newEmployee,
      [e.target.name]: e.target.value,
    };
    setNewEmployee(updatedEmployee);
  };

  // přidání nového zamce z formuláře do seznamu
  const handleAdd = (e) => {
    e.preventDefault();

    if (newEmployee.firstname && newEmployee.surname && newEmployee.gender) {
      setEmployees((employees) => {
        return [...employees, newEmployee];
      });
      if (newEmployee.gender === "muž") {
        muzi += 1;
      } else {
        zeny += 1;
      }

      // vynulování hodnot ve formuláři
      setNewEmployee({
        id: newEmployee.id + 1,
        firstname: "",
        surname: "",
      });
      const radio = document.querySelectorAll("input[type='radio']");
      for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
      }
    } else {
      alert("Vyplňte všechna pole.");
    }
  };

  // vymazání zamce
  const handleDelete = (idToDelete, genderToDelete) => {
    if (genderToDelete === "muž") {
      muzi -= 1;
    } else {
      zeny -= 1;
    }
    setEmployees(employees.filter((employee) => employee.id !== idToDelete));
  };

  // změna kliknu na horní tlačítka
  const handleChoose = (source) => {
    switch (source) {
      case "seznam": {
        setActive("seznam");
        break;
      }
      case "prace": {
        setActive("prace");
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="container">
      <Toggler activeBtn={handleChoose} />
      {active === "seznam" && (
        <>
          <List data={employees} onDelete={handleDelete} />
          <NewForm
            data={newEmployee}
            onChange={handleChange}
            onAdd={handleAdd}
          />
        </>
      )}

      {active === "prace" && (
        <>
          <p>
            <strong>Práce</strong>
          </p>
          <p>Počet mužů: {muzi}</p>
          <p>Počet žen: {zeny}</p>
          <Work m={muzi} z={zeny} />
        </>
      )}
    </div>
  );
};

export default App;

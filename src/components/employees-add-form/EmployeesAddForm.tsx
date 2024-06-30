import './employeesAddForm.scss';
import { FC, useState } from 'react';

interface EmployeesAddFormProps {
  addEmployee: (name: string, salary: number) => void;
}

const EmployeesAddForm: FC<EmployeesAddFormProps> = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const handleAddItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (name === '' || salary === '') return;

    addEmployee(name, +salary);
    setName('');
    setSalary('');
  };

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-outline-light"
          onClick={(e) => handleAddItem(e)}
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;

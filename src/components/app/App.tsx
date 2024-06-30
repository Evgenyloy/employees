import React, { useState } from 'react';
import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeesList from '../employees-list/EmployeeList';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';
import data from './employeesData';
import { IEmployeesData } from '../types/types';
import { EmployeeContext } from '../context/EmployeesContext';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [employeesData, setEmployeesData] = useState<IEmployeesData[]>(data);
  const [filter, setFilter] = useState<string>('all');
  const [term, setTerm] = useState<string>('');

  const toggleProps = (
    id: string,
    dataToggleName: keyof IEmployeesData
  ): void => {
    setEmployeesData((employeesData) => {
      return employeesData.map((item) => {
        if (item.id === id) {
          return { ...item, [dataToggleName]: !item[dataToggleName] };
        }
        return item;
      });
    });
  };

  const deleteEmployee = (id: string) => {
    setEmployeesData((employeesData) =>
      employeesData.filter((item) => item.id !== id)
    );
  };

  const addEmployee = (name: string, salary: number) => {
    const newEmployee = {
      name,
      salary,
      id: uuidv4(),
      rise: false,
      increase: false,
    };
    setEmployeesData((employee) => {
      return [...employee, newEmployee];
    });
  };

  const employeesFilter = (filter: string, employeesData: IEmployeesData[]) => {
    switch (filter) {
      case 'rise':
        return employeesData.filter((item) => item.rise);

      case 'moreThen1000':
        return employeesData.filter((item) => item.salary > 1000);

      default:
        return employeesData;
    }
  };

  const employeesSearch = (employeesData: IEmployeesData[], term: string) => {
    if (term.length === 0) {
      return employeesData;
    }

    return employeesData.filter((item) =>
      item.name.toLocaleLowerCase().startsWith(term.toLocaleLowerCase())
    );
  };

  return (
    <div className="App">
      <AppInfo employeesData={employeesData} />
      <div className="search-panel">
        <SearchPanel setTerm={setTerm} />
        <AppFilter setFilter={setFilter} filter={filter} />
      </div>
      <EmployeeContext.Provider
        value={{ toggleProps: toggleProps, deleteEmployee: deleteEmployee }}
      >
        <EmployeesList
          employeesData={employeesSearch(
            employeesFilter(filter, employeesData),
            term
          )}
        />
      </EmployeeContext.Provider>
      <EmployeesAddForm addEmployee={addEmployee} />
    </div>
  );
}

export default App;

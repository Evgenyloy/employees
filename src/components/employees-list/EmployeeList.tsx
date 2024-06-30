import './employeesList.scss';
import { FC } from 'react';
import { IEmployeesListProps } from '../types/types';
import EmployeesListItem from '../employees-list-item/EmployeesLIstItem';

const EmployeesList: FC<IEmployeesListProps> = ({ employeesData }) => {
  const itemsList = employeesData.map((item) => {
    return <EmployeesListItem key={item.id} employeesData={item} />;
  });

  return <ul className="app-list list-group">{itemsList}</ul>;
};

export default EmployeesList;

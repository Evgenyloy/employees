import './appInfo.scss';
import { FC } from 'react';
import { IEmployeesListProps } from '../types/types';

const AppInfo: FC<IEmployeesListProps> = ({ employeesData }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employeesData.length}</h2>
      <h2>
        Премию получат:{employeesData.filter((item) => item.increase).length}{' '}
      </h2>
    </div>
  );
};

export default AppInfo;

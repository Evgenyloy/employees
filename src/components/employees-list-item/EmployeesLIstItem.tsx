import { FC, useContext } from 'react';
import { IEmployeesListItemProps } from '../types/types';
import { EmployeeContext } from '../context/EmployeesContext';
import { IEmployeesData } from '../types/types';
import './employeesListItem.scss';

const EmployeesListItem: FC<IEmployeesListItemProps> = ({ employeesData }) => {
  const { name, salary, rise, increase, id } = employeesData;
  const { toggleProps, deleteEmployee } = useContext(EmployeeContext);

  let className = 'list-group-item d-flex justify-content-between';

  if (rise) {
    className += ' increase';
  }
  if (increase) {
    className += ' like';
  }

  return (
    <li className={className}>
      <span
        className="list-group-item-label"
        data-toggle="rise"
        onClick={(e) =>
          toggleProps(
            id,
            e.currentTarget.getAttribute('data-toggle') as keyof IEmployeesData
          )
        }
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + ' $'}
      />

      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          data-toggle="increase"
          onClick={(e) =>
            toggleProps(
              id,
              e.currentTarget.getAttribute(
                'data-toggle'
              ) as keyof IEmployeesData
            )
          }
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={() => deleteEmployee(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;

import { createContext } from 'react';
import { IEmployeesData } from '../types/types';

interface IEmployeeContext {
  toggleProps: (id: string, dataToggle: keyof IEmployeesData) => void;
  deleteEmployee: (id: string) => void;
}

export const EmployeeContext = createContext<IEmployeeContext>({
  toggleProps: () => {},
  deleteEmployee: () => {},
});

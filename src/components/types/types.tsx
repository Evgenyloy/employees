export interface IEmployeesData {
  name: string;
  salary: number;
  id: string;
  rise: boolean;
  increase: boolean;
}

export interface IEmployeesListProps {
  employeesData: IEmployeesData[];
}

export interface IEmployeesListItemProps {
  employeesData: IEmployeesData;
}

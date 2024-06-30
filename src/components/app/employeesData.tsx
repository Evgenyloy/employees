import { v4 as uuidv4 } from 'uuid';
import { IEmployeesData } from '../types/types';

const data: IEmployeesData[] = [
  {
    name: 'John C.',
    salary: 800,
    id: uuidv4(),
    rise: true,
    increase: false,
  },
  {
    name: 'Alex M.',
    salary: 3000,
    id: uuidv4(),
    rise: false,
    increase: true,
  },
  {
    name: 'Carl W.',
    salary: 5000,
    id: uuidv4(),
    rise: false,
    increase: false,
  },
];

export default data;

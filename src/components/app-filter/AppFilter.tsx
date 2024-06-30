import './appFilter.scss';
import { FC } from 'react';

interface AppFilter {
  setFilter: (arg: string) => void;
  filter: string;
}

const AppFilter: FC<AppFilter> = ({ setFilter, filter }) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000$' },
  ];

  const filterButtons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => setFilter(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{filterButtons}</div>;
};

export default AppFilter;

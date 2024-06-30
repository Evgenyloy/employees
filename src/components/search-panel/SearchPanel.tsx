import './searchPanel.scss';
import { FC, useState } from 'react';

interface SearchPanelProps {
  setTerm: (arg: string) => void;
}

const SearchPanel: FC<SearchPanelProps> = ({ setTerm }) => {
  const [value, setValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setTerm(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={value}
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default SearchPanel;

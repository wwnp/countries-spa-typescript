import { useEffect } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: 'var(--colors-ui-base)',
    color: state.isSelected ? 'red' : 'blue',
    borderRadius: 'var(--radii)',
    padding: '0.25rem',
    border: 'none',
    boxShadow: 'var(--shadow)',
    height: '50px',
    width: '200px',
    "@media (max-width: 767px)": {
      width: '100%',
    },

  }),
  option: (provided: any, state: any) => ({
    ...provided,
    cursor: 'pointer',
    color: 'var(--colors-text)',
    backgroundColor: state.isSelected
      ? 'var(--colors-bg)'
      : 'var(--colors-ui-base)',
  }),
  container: (styles: any) => ({
    ...styles,
    "@media (max-width: 767px)": {
      width: '100%',
    },
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = 'var(--colors-text)'

    return { ...provided, opacity, transition, color };
  }

}


const Filter = ({ handleFilter, region, setRegion }: any) => {
  useEffect(() => {
    const regionValue = region?.value || '';
    handleFilter(regionValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region])
  return (
    <Select
      options={options}
      styles={customStyles}
      value={region}
      onChange={setRegion}
    ></Select>
  )
}

export default Filter
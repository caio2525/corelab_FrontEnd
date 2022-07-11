import styles from "./Search.module.scss";

interface ISearch {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: ISearch) => {
  return (
    <input
      className={styles.Search}
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Search;

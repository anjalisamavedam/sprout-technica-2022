import styles from "./Search.module.css";

const Search = ({ onChange }) => {
  return (
    <input
      className={styles.search}
      type="text"
      onChange={onChange}
      placeholder="keyword search"
    />
  );
};

export default Search;
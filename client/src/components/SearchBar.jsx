const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={onSearch}
      className="border rounded w-full mb-4 p-2"
    />
  );
};

export default SearchBar;

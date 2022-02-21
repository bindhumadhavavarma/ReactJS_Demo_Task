import "./SearchBar.css";
function SearchBar(props) {
  function filterItems(event) {
    props.setFilterKey(event.target.value);
  }
  return (
    <div className="Row">
      <div className="filterOption">
        <select onChange={(event)=>{props.setFilterOption(event.target.value)}} name="searchOption">
            <option value="Name">Name</option>
            <option value="Role">Role</option>
        </select>
      </div>
      <div id="cover">
        <form onSubmit={filterItems}>
          <div className="tb">
            <input
              onChange={filterItems}
              type="text"
              placeholder="Search"
              id="search_input"
              autoComplete="off"
            />
            <i className="bx bx-search-alt s-icon"></i>
          </div>
        </form>
      </div>
      
    </div>
  );
}
export default SearchBar;

import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const Search = ({ listSearch, handleClear, handleDelete }) => (
  <div className="App-search py-3 px-4 bg-white rounded">
    <div className="d-flex gap-3 flex-wrap">
      {listSearch.map((item, index) => (
        <div className="d-flex align-items-center" key={index}>
          <span className="tag px-2 py-1">{item}</span>

          <CloseSharpIcon
            onClick={() => handleDelete(item)}
            sx={{ curson: "pointer" }}
            className="close"
          />
        </div>
      ))}
    </div>
    <p onClick={handleClear}>Clear</p>
  </div>
);

export default Search;

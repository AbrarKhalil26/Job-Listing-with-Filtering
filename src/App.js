import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Job from './data.json'
import Card from './component/Card';
import Search from './component/Search';


function App() {
  const [listSearch, setListSearch] = useState([]);
  const [filteredData, setFilteredData] = useState(Job);

  useEffect(() => {
    // Filter the data based on listSearch
    const newFilteredData = Job.filter((job) => {
      return (
        listSearch.some((item) => item === job.role) ||
        listSearch.some((item) => item === job.level) ||
        listSearch.some((item) => job.languages.includes(item)) ||
        listSearch.some((item) => job.tools.includes(item))
      )
    });

    // Update the filteredData state
    setFilteredData(newFilteredData);
    console.log('newFilteredData',newFilteredData);
  }, [listSearch]);

  const handleClick = (e) => {
    const value = e.target.textContent;
    if (!listSearch.includes(value)) 
      setListSearch([...listSearch, value]);
  }
  
  const handleDelete = (item) => {
    const newList = listSearch.filter(i => i !== item)
    setListSearch(newList);
    console.log(listSearch);
  }

  const handleClear = () => {
    setListSearch([]);
  }
  
  console.log('listSearch',listSearch);
  console.log('filteredData',filteredData);

  
  return (
    <div>
      <picture className="App-header block">
        <source
          media="(max-width: 650px)"
          srcset="images/bg-header-mobile.svg"
        />
        <img src="images/bg-header-desktop.svg" alt="bg-header-desktop" />
      </picture>

      <div
        className="App-main container position-relative"
        style={listSearch.length > 0 ? { top: "-35px" } : { marginTop: "4rem" }}
      >
        {listSearch.length > 0 && (
          <Search
            listSearch={listSearch}
            handleClear={handleClear}
            handleDelete={handleDelete}
          />
        )}


        {/* {filteredData.map((job, index) => (
          <Card
            listSearch={listSearch}
            handleClick={handleClick}
            job={job}
            key={index}
          />
        ))} */}
        {Job.map((job, index) => {
          if (listSearch.length === 0) {
            return(
              <Card listSearch={listSearch} handleClick={handleClick} job={job} key={index} />
            )
          }
          else {
            if (
              listSearch.some((item) => item === job.role) ||
              listSearch.some((item) => item === job.level) ||
              listSearch.some((item) => job.languages.includes(item)) ||
              listSearch.some((item) => job.tools.includes(item))
            ) {
              return(
                <Card listSearch={listSearch} handleClick={handleClick} job={job} key={index} />
              )
            } else {
              return null;
            }
          }
          })}
      </div>
    </div>
  );
}

export default App;

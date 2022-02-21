import React, { useState } from "react";
import TeamCard from "./components/TeamCard";
import SearchBar from "./components/SearchBar";
function App() {
  
  const [filterOption, setFilterOption] = useState("Name");
  const [filterKey, setFilterKey] = useState("");
  return (
    <React.Fragment>
      <section>
        <div className="Container">
          <SearchBar
            setFilterKey={setFilterKey}
            setFilterOption={setFilterOption}
          ></SearchBar>
            <div className="Row">
              <TeamCard
                filterKey={filterKey}
                filterOption={filterOption}
              ></TeamCard>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;

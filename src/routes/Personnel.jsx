import React, { useState } from "react";
import { PageWrapper } from "../components/styles/PageWrapper";
import Title from "../components/utilities/Title";
import PersonnelList from "../components/personnel/PersonnelList";
import data from "../db/personnel-data.json";
import PersonnelDetails from "../components/personnel/PersonnelDetails";
export default function Personnel() {
  // const [personneDetails, setPersonnelDetails] = useState(data);
  const [searchPerson, setSearchPerson] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const searchName = (e) => {
    setSearchPerson(e.target.value);
  };

  const filteredNames = data.filter((person) =>
    `${person.first_name} ${person.last_name}`
      .toLowerCase()
      .includes(searchPerson.toLowerCase())
  );
  const displaySelectedPerson = (person) => {
    setSelectedPerson(person);
  };
  return (
    <PageWrapper className="animate-left">
      <Title text="Personnel" />
      <div className="d-flex" style={{ gap: 30 }}>
        <PersonnelList
          // personnel={personnelDetails}
          personnel={filteredNames}
          searchName={searchName}
          handlePersonClick={displaySelectedPerson}
        />
        {selectedPerson && <PersonnelDetails selectedPerson={selectedPerson} />}
      </div>
    </PageWrapper>
  );
}

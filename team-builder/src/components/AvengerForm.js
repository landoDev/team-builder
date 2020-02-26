import React, { useState } from "react";

const NoteForm = props => {
  // console.log("this is our props",props);
  const [avenger, setAvenger] = useState({
      alias: '',
      identity: '',
    //   isRecruited: false
  });

  return(
    <form>
        <label htmlFor="alias">Avenger:</label>
        <input id="alias" type="text"/>
        <label htmlFor="identity">Real Name:</label>
        <input id="identity" type="text"/>
        {/* <label htmlFor="status">Recruited?</label>
        <input id ="status" type="checkbox"></input>     */}
        <button type='submit'>Add Avenger</button>
    </form>
  );
};

export default NoteForm;
import React, { useState } from "react";

const AvengerForm = props => {
  console.log("this is our props",props);
  const [avenger, setAvenger] = useState({
      alias: '',
      identity: '',
      superpower: '',
      home:'',
      avatar:''
    //   isRecruited: false
  });

  const handleChanges = event => {
    setAvenger({...avenger, [event.target.name]: event.target.value});
    console.log(avenger);
  }

  const submitForm = event => {
      event.preventDefault();
      props.addNewAvenger(avenger)
  }

  return(

    <form onSubmit={submitForm} >
        <label htmlFor="alias">Avenger:</label>
        <input onChange={handleChanges} id="alias" name="alias" type="text" value={avenger.alias}/>

        <label htmlFor="identity">Real Name:</label>
        <input onChange={handleChanges} id="identity" name="identity" type="text" value={avenger.identity}/>

        <label htmlFor="superpower">Power(s):</label>
        <input onChange={handleChanges} id ="superpower" name="superpower" type="text" value={avenger.superpower}></input> 

        <label htmlFor="home">Homeworld:</label>
        <input onChange={handleChanges} id ="home" name="home" type="text" value={avenger.home}></input>

        <label htmlFor="avatar">Image:</label>
        <input onChange={handleChanges} id ="avatar" type="url" name="avatar" placeholder="Enter url" value={avenger.avatar}></input> 

        {/* <label htmlFor="avatar">Image:</label>
        <input onChange={handleChanges} id ="avatar" type="file" name="avatar" accept="image/png, image/jpeg"></input>      */}

        <button type='submit'>Add Avenger</button>
    </form>
  );
};

export default AvengerForm;
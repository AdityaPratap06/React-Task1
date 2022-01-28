import React, { useEffect, useRef, useState } from 'react';
import {nanoid} from 'nanoid';
import "./App.css";


function App() {
  const [studentList, setUpdateList]=useState([]);
  // const [count, setCount] = useState(-1);
  const ref = useRef(0);

  useEffect(() =>{
    ref.current = studentList.length
  }, [studentList]);

  console.log("count " +ref.current)


  // useEffect(() => {
  //     setCount((count)=> count =studentList.length);
  //   }, [studentList.length]);
  // console.log("count"+count)

  const [inputField, setInputField] = useState({
    name: '',
    age: '',
    gender: '',
    fname: '',
    mname: '',
    address: '',
    city: '',
    states: '',
    pincode: '',
    contact: '',
    password: '',
    confPassword: '',
    id: nanoid(),
  });

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setInputField((preval) => ({ ...preval, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    reset();
    if (inputField.password !== inputField.confPassword) {
      alert("password Not Match");
    }
    else {
      alert('A form was submitted with Name :"' + inputField.name +
        '" ,Age :"' + inputField.age + '"and City "' + inputField.city + '"');
    }
    
    console.log("JHDS",inputField);

    if(inputField.edit){
      let newArray = [...studentList]
      const findIndex = newArray.indexOf(inputField);
      newArray.splice(findIndex,1,inputField)
      setUpdateList(newArray)
    }
    else{
      setUpdateList(arr => [...arr, inputField])
    }
  }

  console.log("Student" ,studentList);
  const reset = () => {
    setInputField({
      name: '',
      age: '',
      gender: '',
      fname: '',
      mname: '',
      address: '',
      city: '',
      states: '',
      pincode: '',
      contact: '',
      password: '',
      confPassword: '',
      id: nanoid(),
    })
  }

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }

  const handleRemoveItem = (id)=> {
    const del = [...studentList];
    const delFunction =(value) => value.id !== id;

    const index1 = del.filter(delFunction)
    setUpdateList(index1)
  }

  const update = (id) =>{
    const upd = [...studentList]
    const updFunction = (value) => value.id === id;

    const index2 = upd.find(updFunction);
    index2.edit = 1
    setInputField(index2);
  }


  return (
    <div className="App">
      <header className="App-header">
      <h2><center>Welcome to Our First Tasks</center></h2>
      <h3><center> Sign-up Form </center></h3>
        <form id="form" onSubmit={handleSubmit}>
          <div id="firstrow">
            <div>
            <label >
              Name:
            </label><br />
            <input type="text" id="name" value={inputField.name} required onChange={inputHandler} /><br />
            </div>
            <div>
            <label >
              Age:
            </label><br />
            <input type="number" id="age" value={inputField.age} onChange={inputHandler} /><br />
            </div>
            <div>
              <label >
                Gender:
              </label><br />
              <div value={inputField.gender} required onChange={inputHandler}>
                <input type="radio" id="gender" value={"MALE"} name="gender" onChange={inputHandler}/> Male
                <input type="radio" id="gender" value={"FEMALE"} name="gender" onChange={inputHandler}/> Female
              </div>
            </div>
            </div>
          <div id="secondrow">
            <div>
              <label >
                Father's Name:
              </label><br />
              <input id="fname" type="text" value={inputField.fname}  onChange={inputHandler} /><br />
            </div>
            <div id='mother'>
              <label >
                Mother's Name:
              </label><br />
              <input id="mname" type="text" value={inputField.mname} onChange={inputHandler} /><br />
            </div>          
          </div>
          <div id="thirdrow">
            <div>
            <label>
              Address:
            </label><br />
            <input id="address" type="text" value={inputField.address} onChange={inputHandler} /><br />
            </div>
          </div>
          <div id="fourthrow">
            <div>
              <label>
                City:
              </label><br />
              <input id="city" type="text" value={inputField.city} onChange={inputHandler} /><br />
            </div>
            <div>
              <label>
                States:
              </label><br />
              <select id="states" value={inputField.states} onChange={inputHandler}>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chattisgarh">Chattisgarh</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Harayana">Haryana</option>
                <option value="Himanchal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharastra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttrakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select><br />
            </div>
            <div>
              <label>
                Pincode:
              </label><br />
              <input id="pincode" type="number" value={inputField.pincode} onChange={inputHandler} /><br />
            </div>
          </div>
          <div id="fifthrow">
            <div>
              <label>
                Contact:
              </label><br />
              <label>
                <select id="code">
                  <option>+91</option>
                </select>
                <input id="contact" type="tel" value={inputField.contact} pattern='[6-9]{1}[0-9]{9}' name='contact' maxLength={10} onInput={maxLengthCheck} onChange={inputHandler} /><br />
              </label>
            </div>
            <div>
              <label>
                Password:
              </label><br />
              <input id="password" type="password" value={inputField.password} required onChange={inputHandler} /><br />
            </div>
            <div>
              <label>
                Confirm Pswd:
              </label><br />
              <input id="confPassword" type="password" value={inputField.confPassword} required onChange={inputHandler} /><br />
            </div>
          </div>
          <div id="buttons">
            <input className="button" type="submit" value="Save" />
            <button className="button"type="submit" name="reset" value="Reset" onClick={reset}>Reset</button>
          </div>
        </form>
      </header>
      <center><p style={{border:"2px solid black", fontSize:"20px", fontStyle:"bold", width:"30%", marginLeft:"10px"}}>Total Students in an Array : {ref.current}</p></center>
      <div id="table-div">
        <table id="table">
          <thead>
            <tr>
              <th id='tname'>Name</th>
              <th id='tage'>Age</th>
              <th id='tgender'>Gender</th>
              <th id='tfname'>Father's Name</th>
              <th id='tmname'>Mother's Namr</th>
              <th id='taddress'>Address</th>
              <th id='tcity'>City</th>
              <th id='tstate'>State</th>
              <th id='tpincode'>Pincode</th>
              <th id='tcontact'>Contact</th>
              <th colSpan={2}>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((val, key) => 
              <tr key={val.id}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td>{val.fname}</td>
                <td>{val.mname}</td>
                <td>{val.address}</td>
                <td>{val.city}</td>
                <td>{val.states}</td>
                <td>{val.pincode}</td>
                <td>{val.contact}</td>
                <td><button onClick={() => handleRemoveItem(val.id)} type="button" value="delete">Delete</button></td>
                <td><button onClick={() => update(val.id)} value="Update">Update</button></td>
              </tr>
            )}
          </tbody>
        </table> 
      </div>
    </div>
    


  );
};

export default App;

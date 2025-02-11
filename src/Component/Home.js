import React, { useState } from 'react'
import Header from './Header';

function Home() {

  const [first, setfirst] = useState(0)

  const demo = () => {

    setfirst(first + 1);

  }

  const [text, settext] = useState('');

  const changData = (e) => {
    settext(e.target.value);
  }

  const AllClear = () => {
    settext('');
  }

  const AllUpper = () => {
    let vel = text
    settext(vel.toUpperCase());
  }
  const AllLower = () => {
    let vel = text;
    settext(vel.toLowerCase());
  }

  return (
    <>
      <Header page="GOPAL'S" heading='its Gopal Home page' />

      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Enter Somthing.</label>
                <textarea class="form-control" id="exampleFormControlTextarea1"
                  style={{ resize: 'none' }}
                  rows="7"
                  value={text}
                  onChange={changData}
                ></textarea>
              </div>
              <div>
                {/* <button type="button" className ="btn btn-primary mx-2" onClick={demo}>Clear</button> */}
                <button type="button" className="btn btn-primary mx-2" onClick={AllClear}>Clear</button>
                <button type="button" className="btn btn-primary mx-2" onClick={AllUpper}>UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={AllLower}>LowerCase</button>
              </div>
              <hr />
              <h3>No Of Charecter : {text.length} </h3>
              <h3>No Of Word : {(text.length > 0) ? text.split(" ").length : "0"}</h3>
              {/* <h1>counter :{first}</h1> */}
              <hr />
              <div className="my-2">
                <h3>Preview : </h3>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
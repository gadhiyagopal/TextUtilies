import React from 'react'
import Header from './Header';

 function Home() {
  return (
    <>
    <Header page="GOPAL'S" heading='its Gopal Home page' />

    <div className="content">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Enter Somthing.</label>
                <textarea class="form-control" id="exampleFormControlTextarea1"style={{resize:'none'}} rows="7"></textarea>
                </div>
                <div>
                <button type="button" className ="btn btn-primary mx-2">Clear</button>
                <button type="button" className ="btn btn-primary mx-2">UpperCase</button>
                <button type="button" className ="btn btn-primary mx-2">LowerCase</button>
                </div>
                <hr/>
                <h3>No Of Charecter : </h3>
                <h3>No Of Word : </h3>
                <hr/>
                <div className="my-2">
                <h3>Preview : </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem mollitia odit eum minima porro velit vitae deleniti ipsum debitis. A quidem sequi fuga itaque voluptatem in ullam, ut alias praesentium libero pariatur neque quis qui nobis cum quisquam commodi numquam? Placeat sequi suscipit, doloremque fugit, fugiat eaque unde facilis labore nihil quas et odit. Aliquid saepe error quos quidem explicabo necessitatibus pariatur harum maxime, qui illum nemo dolorem inventore. Ducimus fuga voluptatum aliquam non magni possimus, amet laboriosam nam ipsam obcaecati sunt nobis qui, corrupti atque. Numquam repellat, voluptates molestias quis delectus autem voluptatibus sit quae recusandae debitis placeat.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home;
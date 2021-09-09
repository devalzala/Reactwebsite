import React, { useState } from 'react';


const Contact = () => {
  const [data, setData] = useState({
    fullname:'',
    contact:'',
    email:'',
    msg:'',
  });
  const InputEvent = (event) => {
    const {name,value} = event.target;
    setData((preVal) => {
      return{
        ...preVal,
        [name]: value,
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My contact no. is ${data.contact}. My email is ${data.email}.`)
  };

  return(

    <>
        <div className='my-5'>
          <h1 className='text-center'>Contact US</h1>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Fullname</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" required />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Contact No.</label>
                  <input type="number" class="form-control" id="exampleFormControlInput1" name='contact' value={data.contact} onChange={InputEvent} placeholder="Contact No." required />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="Enter Your Email Address" required />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label" name='msg' value={data.msg}>Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );

}


export default Contact;
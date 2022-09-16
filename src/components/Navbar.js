import React from 'react';
function Present(){
  
    return(
        <navbar className='navbar bg-dark mb-5  '>    
       <div className='container my-3 '>
           <div className='row'>
            <div className='col-12 d-flex text-light'>
               <a href='#header'><h2 className='fw-bold' >Home</h2></a> 
               <a href='#work'> <h2 className=' fw-bold ms-2'>Work</h2></a>
            </div> 
        </div>
       </div>
        </navbar>
    );
}
export default Present;
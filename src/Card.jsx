import React from 'react';
import web from '../src/images/img2.jpg';
import {Link} from 'react-router-dom';



const Card = (props) => {
  return(

    <>
      
      
        <div className='col-md-4 col-10 mx-auto'>
            <div className="card h-100">
                <img src={props.imgsrc} className="card-img-top h-50" alt={props.imgsrc} />
                    <div className="card-body mt-4">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
            </div>
        </div>
    </>
  );

}


export default Card;
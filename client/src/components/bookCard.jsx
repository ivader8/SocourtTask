import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import {get} from '../data/crud'
import { Link } from 'react-router-dom'
// import BookInfoService from '../services/bookInfo-service';


const BookCard = ({ title, _id }) => {
    
  async function submitHandler (event) {
        event.preventDefault();

        try {
            let info =  await get ('http://localhost:5000/api/book/' + _id);
 
            console.log(info)
            
            
        } catch (error) {
            console.log(error)
        }
}
  

    return (
        <Fragment>
            
                        <div className = "cardDiv">
                            <h5 className="card-title">{title}</h5>
                        
                        <button type="submit" onClick={submitHandler} className="btn btn-warning float-right btn-sm">
                            Get more info 
                            </button>
                        </div>
                        
                            
                  
           

        </Fragment>
    );

};

export default  BookCard ;

// const BookCardWithContext = (props) => {
//     return (
//         <UserConsumer>
//             {
//                 ({ username }) => (
//                     <BookCard {...props} username={username} />
//                 )
//             }
//         </UserConsumer>
//     )
// }



import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import {post} from '../data/crud'

const BookCard = ({ title, _id }) => {
    

  

    return (
        <Fragment>
            <form >
                <div className="card-col-4" min-width="150px">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        
                        <button type="submit" className="btn btn-warning float-right btn-sm">
                            Get more info
                            </button>
                    </div>                                   
                </div>
            </form>

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



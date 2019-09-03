import React, { Fragment } from 'react'

const BookCard = ({ title, _id }) => {

    const addressToRedirect = "/book/" + _id;

    return (
        <Fragment >
            <div className="cardDiv">
                <h5 className="card-title">{title}</h5>
                <a href={addressToRedirect} type="submit" className="btn btn-warning float-right btn-sm">
                    Get more info
                </a>
            </div>
        </Fragment>
    );

};

export default BookCard;





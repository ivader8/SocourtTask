import React, { Fragment } from 'react'

const GenreCard = ({ name, _id }) => {

    const addressToRedirect = "/genre/" + _id;

    return (
        <Fragment >

            <div className="cardDiv">
                <h5 className="card-title">{name}</h5>
                <a href={addressToRedirect} type="submit" className="btn btn-warning float-right btn-sm">
                    Get more info
                </a>
            </div>
        </Fragment>
    );

};

export default GenreCard;
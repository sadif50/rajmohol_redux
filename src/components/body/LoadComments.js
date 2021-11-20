import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = props => {
    return (
        props.comment.map(comments =>{
            return(
                <div key={comments.id}>
                    <h3>{comments.author}</h3>
                    <p>{comments.comment}</p>
                    <p>{dateFormat(comments.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                    <hr/>
                </div>
            );
        })
    )
}

export default LoadComments;

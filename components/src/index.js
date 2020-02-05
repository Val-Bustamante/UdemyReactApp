import React from 'react'
import ReactDOM from "react-dom"
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                time="50:45PM"
                commentText="Hey what's up!"
                avatar={faker.image.avatar()} />
        </div>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
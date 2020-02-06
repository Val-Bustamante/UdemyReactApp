import React from 'react'
import ReactDOM from "react-dom"
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    time="50:45PM"
                    commentText="Hey what's up!"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Elliot"
                    time="50:45PM"
                    commentText="Hey what's up!"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
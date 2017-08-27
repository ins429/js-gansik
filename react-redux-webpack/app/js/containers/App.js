import React from 'react';
import AddPost from './AddPost';
import Posts from './Posts';

class App extends React.Component {
    render() {
        return (
            <div>
                <AddPost />
                <Posts />
            </div>
        );
    }
};

export default App;

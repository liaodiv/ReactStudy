import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Clock from './component/Clock';
import Toggle from './component/Event';
import List from './component/List';
import Temperature from './component/BoilingVerdict';
import Counter from './component/Counter';
import Context from './component/Context';
import TodoApp from './component/TodoApp';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/clock">Clock</Link></li>
                <li><Link to="/toggle">Toggle</Link></li>
                <li><Link to="/list">List</Link></li>
                <li><Link to="/temper">Temper</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/context">Context</Link></li>
                <li><Link to="/todo">todolist</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/clock" component={Clock}/>
            <Route path="/toggle" component={Toggle}/>
            <Route path="/list" component={List}/>
            <Route path="/temper" component={Temperature}/>
            <Route path="/counter" component={Counter}/>
            <Route path="/context" component={Context}/>
            <Route path="/todo" component={TodoApp}/>
        </div>
    </Router>
)
export default BasicExample
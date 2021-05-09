/* eslint-disable eqeqeq */
import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import { getAll } from './services/postService';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import About from './components/About';
import style from './App.module.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            selectedPost: null,
        };

        this.onMenuItemClick = this.onMenuItemClick.bind(this);
    }

    componentDidMount() {
        getAll()
            .then(posts => {
                this.setState({ posts });
            })
            .catch(err => {
                console.log(err);
            });
    }

    onMenuItemClick(id) {
        this.setState({ selectedPost: id });
    }

    getPosts() {
        if (!this.state.selectedPost) {
            return this.state.posts;
        } else {
            return [this.state.posts.find(x => x.id == this.state.selectedPost)];
        }
    }

    render() {
        return (
            <div className={style.app}>
                <Header />

                <div className={style.container}>
                    <Menu onMenuItemClick={this.onMenuItemClick} />
                    <Switch>
                        <Route path="/" exact>
                            <Main posts={this.getPosts()} />
                        </Route>
                        <Route path="/about" component={About} />
                        <Route render={() => <h1>Error Page</h1>} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;

// function App() {
//     return (
//         <div className={style.app}>
//             <Header />

//             {/* <div className={style.container}>
//                 <Menu />

//                 <Main />
//             </div> */}
//         </div>
//     );
// }


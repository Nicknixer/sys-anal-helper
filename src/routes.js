import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Welcome from './components/Welcome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';


class Routes extends Component {
    render() {
        return (
            <main>
                <MuiThemeProvider>
                    <div className='main-container'>
                        <Switch>
                            <Route exact path='/' component={Welcome}/>
                            <Route path='*' component={Welcome}/>
                        </Switch>
                    </div>
                    <div className='copy'>
                        Все рекомендации основаны на научном исследовании.
                        <br/>
                        &copy; Николай Сергейчук
                    </div>
                </MuiThemeProvider>
            </main>
        );
    }
}


export default Routes;
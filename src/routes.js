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
                    <h1>Системы веб-аналитики</h1>
                    <div className='main-container'>
                        <Switch>
                            <Route exact path='/' component={Welcome}/>
                            <Route path='*' component={Welcome}/>
                        </Switch>
                    </div>
                    <div className='copy'>
                        &copy; Николай Сергейчук
                    </div>
                </MuiThemeProvider>
            </main>
        );
    }
}


export default Routes;
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Welcome from './components/Welcome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Routes extends Component {
    render() {
        return (
            <main>
                <MuiThemeProvider>
                    <div className="App">
                        <Switch>
                            <Route exact path='/' component={Welcome}/>
                            <Route path='*' component={Welcome}/>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </main>
        );
    }
}


export default Routes;
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Welcome from './components/Welcome';
import Questionnaire from './components/Questionnaire';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './index.css';


class Routes extends Component {
    render() {
        return (
            <main>
                <MuiThemeProvider>
                    <div className='main-container'>
                        <Card>
                            <CardMedia overlay={<CardTitle title="Системы веб-аналитики" subtitle="Персональные рекомендации по выбору системы" />} >
                                <img src="http://wseok.ru/uploads/images/uslugi/big/veb_analitika.jpg" alt="" />
                            </CardMedia>
                            <CardText>
                                <Switch>
                                    <Route exact path='/' component={Welcome}/>
                                    <Route exact path='/questionnaire' component={Questionnaire}/>
                                    <Route path='*' component={Welcome}/>
                                </Switch>
                            </CardText>
                        </Card>
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
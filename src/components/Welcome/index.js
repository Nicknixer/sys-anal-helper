import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';


class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <Card>
                    <CardMedia overlay={<CardTitle title="Системы веб-аналитики" subtitle="Персональные рекомендации по выбору системы" />} >
                        <img src="http://wseok.ru/uploads/images/uslugi/big/veb_analitika.jpg" alt="" />
                    </CardMedia>
                    <CardText>
                        <p>
                            Наш сервис поможет вам определиться с выбором системы веб-аналитики.
                        </p>
                        <p>
                            Пройдите тест и получите рекомендации в соответствии с вашими критериями.
                        </p>
                        <p className='center'>
                            <RaisedButton label="Начать тест" primary={true} />
                        </p>
                        <p>
                            В системе используются критерии и рекомендации разработанные в выпускной квалификационной работе.
                            У вас есть возможность ознакомиться с обзором следующих систем:
                        </p>
                        <List>
                            <ListItem primaryText="Yandex.Metrika"/>
                            <ListItem primaryText="Google Analytics" />
                            <ListItem  secondaryText="Нажмите чтобы показать больше" />
                        </List>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default Welcome;
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';


class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Welcome;
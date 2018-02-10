import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <Card>
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
                        </p>

                    </CardText>
                </Card>
            </div>
        );
    }
}

export default Welcome;
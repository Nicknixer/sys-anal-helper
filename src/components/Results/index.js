import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div style={{textAlign: 'left'}}>
                <img style={{display: 'block', margin: '0 auto'}} width='100' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Antu_task-complete.svg/768px-Antu_task-complete.svg.png" alt=""/>
                <List>
                    <Subheader>Ваши рекомендации</Subheader>
                    <ListItem
                        leftAvatar={<Avatar src="https://free-writing.ru/wp-content/uploads/2014/07/yandex-metrika.jpg" />}
                        secondaryText='95%'
                        primaryText="Yandex.Metrika"
                    />
                    <Divider />
                    <ListItem
                        leftAvatar={<Avatar src="http://www.astekweb.com/wp-content/uploads/2013/09/Orange-google_analytics.jpg" />}
                        secondaryText='72%'
                        primaryText="Google Analytics" />
                    <Divider />
                    <ListItem
                        leftAvatar={<Avatar src="http://dmonsters.ru/system/images/BAhbBlsHOgZmSSItMjAxMy8wNi8wNS8xMF8yN18wM18yNTBfTGl2ZUludGVybmV0LnBuZwY6BkVU/LiveInternet.png" />}
                        secondaryText='57%'
                        primaryText="LiveInternet" />
                </List>
            </div>
        );
    }
}

export default Results;
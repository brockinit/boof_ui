import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="App-header">
          <Card>
            <CardHeader
              title="Without Avatar"
              subtitle="Subtitle"
            />
            <CardMedia>
              <img src="https://s3.amazonaws.com/web-ready-andrea/lisbon-sunset-edited+4+2.png" height="300px" width="500px" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;

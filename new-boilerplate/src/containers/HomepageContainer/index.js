import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';

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
            
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;

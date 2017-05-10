import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BoofRouter from './routes';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
      <BoofRouter />
    </MuiThemeProvider>,
  document.getElementById('root')
);

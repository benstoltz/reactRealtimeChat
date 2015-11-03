import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
//import mui from 'material-ui';


const personalTheme = require('./theme-palette.js');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
let AppBar = require('material-ui/lib/app-bar');


class App extends React.Component {
    constructor() {
        super();
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };



    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(personalTheme)
        };
    }

    render() {
       return (
           <div>
               <AppBar title="Awesome Chat App" />
               <div style={{
                display: 'flex',
                flexFlow: 'row',
                maxWidth: '1200',
                width: '100%',
                margin: '30px auto 30px'
               }}>
                   <ChannelList />
                   <MessageList />
               </div>
               <MessageBox />
           </div>
       );
    }
}


export default App;

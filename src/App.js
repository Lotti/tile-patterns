import React, {Component} from 'react';
import './App.css';

import Tile from './Tile';

class App extends Component {
    render() {
        const a = [0,1,2,3,4,5];
        const tilePerRow = 15;

        const tiles = [];
        for (let i = 0; i < tilePerRow; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            tiles.push(<Tile key={i} />);
        }


        return (
            <div className="container">
                <div className="wall">
                    <div className="row odd">
                        {tiles}
                    </div>
                    <div className="row">
                        {tiles}
                    </div>
                    <div className="row odd">
                        {tiles}
                    </div>
                    <div className="row">
                        {tiles}
                    </div>
                    <div className="row odd">
                        {tiles}
                    </div>
                    <div className="row">
                        {tiles}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';

class Tile extends Component {
    state = {className: 'w'};

    toggle = () => {
        if (this.state.className === 'w') {
            this.setState({className: 'y'});
        } else {
            this.setState({className: 'w'});
        }
    };

    render() {
        return (
            <span className={'tile '+this.state.className} onClick={this.toggle} />
        );
    }
}

export default Tile;

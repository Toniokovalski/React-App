var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('app');


const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);

    let stars = [];
    for (let i=0; i<numberOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>);
    }

    return (
        <div className="col-5">
            {stars}
        </div>
    )
};

const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    )
};

const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((number, i) =>
                <span key={i}>{number}</span>
            )}
        </div>
    )
};

const Numbers = (props) => {
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
};
Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumbers: [2, 5],
        };
    }

    render() {
        return (
            <div className="container">
                <h3>Game Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers} />
                </div>
                <br />
                <Numbers />
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Game />
            </div>
        )
    }
}

ReactDOM.render(<App />, container);
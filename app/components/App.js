var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('app');


const Stars = (props) => {
    let stars = [];
    for (let i=0; i<props.numberOfStars; i++) {
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
            <button className="btn" disabled={props.selectedNumbers.length === 0}>
                =
            </button>
        </div>
    )
};

const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((number, i) =>
                <span key={i} onClick={() => props.unselectNumber(number)}>
                    {number}
                </span>
            )}
        </div>
    )
};

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i} className={numberClassName(number)} onClick={() => props.selectNumber(number)}>
                        {number}
                    </span>
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
            selectedNumbers: [],
            randomNumberOfStars: 1 + Math.floor(Math.random()*9),
        };
        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
    };

    selectNumber(clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    unselectNumber(clickedNumber) {
        this.setState(prevState => ({
            selectedNumbers:prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }));
    };

    render() {
        return (
            <div className="container">
                <h3>Game Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={this.state.randomNumberOfStars} />
                    <Button selectedNumbers={this.state.selectedNumbers} />
                    <Answer selectedNumbers={this.state.selectedNumbers} unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber} />
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
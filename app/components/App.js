var React = require('react');
var ReactDOM = require('react-dom');
import Game from './Game';

var container = document.getElementById('app');

var possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
        var combinationSum = 0;
        for (var j=0 ; j < listSize ; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
        }
        if (n === combinationSum) { return true; }
    }
    return false;
};

class App extends React.Component {
    render() {
        const numberList = [
            {
                number: 1,
                isSelected: false,
                isUsed: false,
            },
            {
                number: 2,
                isSelected: false,
                isUsed: false,
            },
            {
                number: 3,
                isSelected: false,
                isUsed: false,
            },
            {
                number: 4,
                isSelected: false,
                isUsed: false,
            },
            {
                number: 5,
                isSelected: false,
                isUsed: false,
            },
            {
                number: 6,
                isSelected: false,
                isUsed: false,
            },
            {
                number: 7,
                isSelected: false,
                isUsed: false,
            },
            {
                number: 8,
                isSelected: false,
                isUsed: false,
            },
            {
                number: 9,
                isSelected: false,
                isUsed: false,
            },
        ];

        return (
            <Game numberList={numberList} />
        )
    }
}

ReactDOM.render(<App />, container);
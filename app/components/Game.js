import React from 'react';

import Stars from './Stars';
import DoneFrame from './DoneFrame';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumbers: [],
            randomNumberOfStars: 1 + Math.floor(Math.random()*9),
            usedNumbers: [],
            answerIsCorrect: null,
            redraws: 5,
            doneStatus: null,
            numberList: props.numberList,
        };
        this.selectNumber = this.selectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.redraw = this.redraw.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.handleSelectNumber = this.handleSelectNumber.bind(this);
    };

    resetGame() {
        this.setState(prevState => (initialState));
    };

    selectNumber(clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    checkAnswer() {
        const isAnswerCorrect = this.state.randomNumberOfStars === this.getSumNumbers();

        if(isAnswerCorrect) {
            console.log(777, this.state.numberList);
            this.setState({
                answerIsCorrect: isAnswerCorrect,
            });
        } else {
            this.setState({
                answerIsCorrect: isAnswerCorrect,
            });
        }
    };

    acceptAnswer() {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            randomNumberOfStars: 1 + Math.floor(Math.random()*9)
        }), this.updateDoneStatus);
    };

    redraw() {
        if (this.state.redraws === 0) {return;}
        this.setState(prevState => ({
            randomNumberOfStars: 1 + Math.floor(Math.random()*9),
            selectedNumbers: [],
            answerIsCorrect: null,
            redraws: prevState.redraws - 1,
        }), this.updateDoneStatus);
    };

    possibleSolutions({randomNumberOfStars, usedNumbers}) {
        const possibleNumbers = Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(number =>
            usedNumbers.indexOf(number) === -1
        );

        return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
    };

    updateDoneStatus() {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return {doneStatus: 'Done. Nice!'};
            }
            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return {doneStatus: 'Game Over!'}
            }
        });
    };

    handleSelectNumber(number) {
        const { numberList } = this.state;
        const newList = numberList.map((item) => {
            if (item.number === number) {
                return Object.assign({}, item, {
                    isSelected: !item.isSelected
                })
            }

            return item;
        });

        this.setState({
            numberList: newList,
            answerIsCorrect: null,
        });
    }

    getSelectedItems(numbers) {
        return numbers.filter((item) => item.isSelected);
    }

    getSumNumbers() {
        const selectedItems = this.getSelectedItems(this.state.numberList);

        return selectedItems.reduce((newItem, current ) => current.number + newItem, 0);
    }

    // changeUsedParameter(selectedItems) {
    //     const { numberList } = this.state;
    //
    //     numberList.map((item) => {
    //         selectedItems.some(())
    //     });
    // }

    render() {
        const {
            randomNumberOfStars,
            selectedNumbers,
            answerIsCorrect,
            usedNumbers,
            redraws,
            doneStatus,
            numberList
        } = this.state;
        const selectedItems = this.getSelectedItems(numberList);

        return (
            <div className="container">
                <h3>Game Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars} />
                    <Button
                        isActive={selectedItems.length > 0}
                        selectedNumbers={selectedNumbers}
                        checkAnswer={this.checkAnswer}
                        answerIsCorrect={answerIsCorrect}
                        acceptAnswer={this.acceptAnswer}
                        redraw={this.redraw}
                        redraws={redraws}
                    />
                    <Answer
                        selectedNumbers={selectedNumbers}
                        unselectNumber={this.handleSelectNumber}
                        dataList={selectedItems}
                    />
                </div>
                <br />
                {doneStatus ?
                    <DoneFrame resetGame={this.resetGame} doneStatus={doneStatus} /> :
                    <Numbers
                        selectedNumbers={selectedNumbers}
                        selectNumber={this.selectNumber}
                        usedNumbers={usedNumbers}
                        unselectNumber={numberList}
                        dataList={numberList}
                        onSelect={this.handleSelectNumber}
                    />
                }
            </div>
        )
    }
}

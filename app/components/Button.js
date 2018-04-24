import React from 'react';
import classNames from 'classnames';

// const Button = (props) => {
//     let button;
//
//     switch(props.answerIsCorrect) {
//         case true:
//             button =
//                 <button className="btn btn-success" onClick={props.acceptAnswer}>
//                     <i className="fa fa-check" />
//                 </button>;
//             break;
//         case false:
//             button =
//                 <button className="btn btn-danger">
//                     <i className="fa fa-times" />
//                 </button>;
//             break;
//         default:
//             button =
//                 <button className="btn" onClick={props.checkAnswer} disabled={props.selectedNumbers.length === 0}>
//                     <i className="fa">=</i>
//                 </button>;
//             break;
//     }
//
//     return (
//         <div className="col-2 text-center">
//             {button}
//             <br /> <br />
//             <button className="btn btn-warning btn-sm" onClick={props.redraw} disabled={props.redraws === 0}>
//                 <i className="fa fa-refresh"/> {props.redraws}
//             </button>
//         </div>
//     )
// };
//
// export default Button;

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    };

    getCheckButton() {
        switch(props.answerIsCorrect) {
            case true:
                button =
                    <button className="btn btn-success" onClick={props.acceptAnswer}>
                        <i className="fa fa-check" />
                    </button>;
                break;
            case false:
                button =
                    <button className="btn btn-danger">
                        <i className="fa fa-times" />
                    </button>;
                break;
            default:
                button =
                    <button className="btn" onClick={props.checkAnswer} disabled={props.selectedNumbers.length === 0}>
                        <i className="fa">=</i>
                    </button>;
                break;
        }

        return (
            <div className="col-2 text-center">
                {button}
                <br /> <br />
                <button className="btn btn-warning btn-sm" onClick={redraw} disabled={props.redraws === 0}>
                    <i className="fa fa-refresh"/> {props.redraws}
                </button>
            </div>
        )
    }

    render() {
        const { isActive, redraws, checkAnswer, selectedNumbers, answerIsCorrect } = this.props;
        const compareBtnClasses = classNames('btn', {
            disabled: !isActive,
            ['btn-success']: answerIsCorrect,
            ['btn-danger']: answerIsCorrect !== null && !answerIsCorrect
        });

        return (
            <div className="col-2 text-center">
                <button
                    className={compareBtnClasses}
                    onClick={checkAnswer}
                >
                    <i className="fa">=</i>
                </button>
                <br /> <br />
                <button className="btn btn-warning btn-sm" onClick={() => {}} disabled={redraws === 0}>
                    <i className="fa fa-refresh"/> {redraws}
                </button>
            </div>
        )
    }
}

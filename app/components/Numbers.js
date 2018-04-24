import React from 'react';

// const Numbers = (props) => {
//     const { unselectNumber } = props;
//
//     const numberClassName = (number) => {
//         if (props.usedNumbers.indexOf(number) >= 0) {
//             return 'used';
//         }
//         if (props.selectedNumbers.indexOf(number) >= 0) {
//             return 'selected';
//         }
//     };
//
//     return (
//         <div className="card text-center">
//             <div>
//                 {props.unselectNumber.map((item, i) =>
//                     <span key={i} onClick={() => props.selectNumber(item.number)}>
//                         {item.number}
//                     </span>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default Numbers;


export default class Numbers extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { unselectNumber, selectNumber, onSelect } = this.props;

        const numberClassName = (number) => {
            if (props.usedNumbers.indexOf(number) >= 0) {
                return 'used';
            }
        };

        return (
            <div className="card text-center">
                <div>
                    {unselectNumber.map((item, i) => {
                        const classes = item.isSelected ? 'selected' : '';

                        return (
                            <span
                                key={i}
                                className={classes}
                                onClick={() => onSelect(item.number, 'isSelected')}
                            >
                            {item.number}
                        </span>
                        )
                    })}
                </div>
            </div>
        )
    }
}
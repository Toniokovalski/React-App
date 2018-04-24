import React from 'react';

const Answer = (props) => {
    const { dataList, unselectNumber } = props;

    return (
        <div className="col-5">
            {dataList.map((item, i) =>
                <span key={i} onClick={() => unselectNumber(item.number, 'isSelected')}>
                    {item.number}
                </span>
            )}
        </div>
    )
};

export default Answer;
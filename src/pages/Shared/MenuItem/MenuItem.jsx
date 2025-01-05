import React from 'react';

const MenuItem = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='flex space-x-4'>
            <img src={ image } className='w-[120px]' style={ { borderRadius: '0 200px 200px 200px' } } alt="" />
            <div className="text-left">
                <h3 className='uppercase'>{name} -----------------</h3>
                <p>{ recipe }</p>
            </div>
            <p className='text-yellow-400'>${ price }</p>
        </div>
    );
};

export default MenuItem;
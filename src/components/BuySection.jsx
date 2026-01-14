import React, { useState } from 'react';
import BestSellers from './BestSellers';
import DailyDeals from './DailyDeals';

const BuySection = ({ onProductSelect }) => {
    return (
        <div className="bg-white pt-10 pb-20">
            <BestSellers onProductSelect={onProductSelect} />
            <div className="my-8"></div>
            <DailyDeals onProductSelect={onProductSelect} />
        </div>
    );
};

export default BuySection;

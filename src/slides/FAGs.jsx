import React, { useState } from 'react';
import { fag } from '../constant';
import { FaChevronDown } from 'react-icons/fa'; // Importing an arrow icon

const FAGs = () => {
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    const handleQuestionClick = (index) => {
        // Toggle between hiding and showing answers
        setSelectedQuestionIndex(index === selectedQuestionIndex ? null : index);
    };

    return (
        <div className='bg-white min-h-screen p-4 flex flex-col items-center'>
            <h1 className='text-2xl font-bold mb-6'>Frequently Asked Questions (FAQs)</h1>
            
            <div className='w-[90%]'>
                {fag.map((item, index) => (
                    <div key={index} className='mb-4'>
                        {/* Question */}
                        <div 
                            className='flex justify-between items-center cursor-pointer bg-gray-100 p-3 rounded-lg'
                            onClick={() => handleQuestionClick(index)}
                        >
                            <p className='text-lg font-medium'>{item.question}</p>
                            <FaChevronDown
                                className={`transition-transform duration-300 ${index === selectedQuestionIndex ? 'rotate-180' : ''}`}
                            />
                        </div>
                        
                        {/* Answer (shown only when selected) */}
                        {index === selectedQuestionIndex && (
                            <div className='mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200'>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAGs;

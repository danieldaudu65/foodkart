import React, { useState } from 'react';
import { fag } from '../constant';

const FAGs = () => {
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setSelectedQuestionIndex(index === selectedQuestionIndex ? null : index);
    };

    return (
        <div className='bg-black min-h-screen flex justify-center items-center'>
            <div className='w-[90%] bg-white flex'>
                {/* Questions List */}
                <div className='w-1/3 p-4 border-r border-gray-300'>
                    <h1 className='text-lg font-bold mb-4'>FAQs</h1>
                    {fag.map((item, index) => (
                        <div key={index} className='mb-2'>
                            <p
                                className={`cursor-pointer ${index === selectedQuestionIndex ? 'text-blue-500' : 'text-black'}`}
                                onClick={() => handleQuestionClick(index)}
                            >
                                {item.question}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Answer Display */}
                <div className='w-2/3 p-4'>
                    <h1 className='text-lg font-bold mb-4'>Answer</h1>
                    {selectedQuestionIndex !== null ? (
                        <p>{fag[selectedQuestionIndex].answer}</p>
                    ) : (
                        <p>Please select a question to see the answer.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAGs;

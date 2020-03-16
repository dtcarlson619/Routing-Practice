import React from 'react';

export default function Word({word}){
    return (
        <div>
            {isNaN(+word)? <h1>The word is: {word}</h1>:<h1>The number is: {word}</h1>}
        </div>
    );
}

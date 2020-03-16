import React from 'react';

export default function WordColor({word, textcolor, backgroundcolor})
{
    return (
        <div>
            <h1 style={{color:textcolor, backgroundColor:backgroundcolor}}>The Word is: {word}</h1>
        </div>
    );
}
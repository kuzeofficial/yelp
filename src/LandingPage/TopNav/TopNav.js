import React from 'react';
import  './TopNav.css';

export default function TopNav () {
    return (
        <div className='top-nav'>
            <div className='left'>
                <span>Write a review</span>
                <span>Events</span>
            </div>
            <div className='right'>
                <span>Login</ span>
                <button className='button'>Sign up</button>
            </div>
        </div>
    )
}

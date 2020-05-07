import React from 'react'

export const Logo = () => (
    <div id='logo' className='pb-3 mb-3'>
        <div className='text-center'>
            <h1 id='logoH1'>Flex Time</h1>
        </div>
        <div className='d-flex justify-content-center ml-3'>
            <img id='leftImg' src="/images/female.svg" alt=""/>
            <img id='centerImg' src="/images/time.svg" alt=""/>
            <img id='rightImg' src="/images/male.svg" alt=""/>
        </div>
    </div>
)
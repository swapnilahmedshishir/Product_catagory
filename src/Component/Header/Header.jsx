import React from 'react';
import { Button } from 'react-bootstrap';


const Header = (props) => {
    
    const {catagory, setCatagory} = props;
    return (
        <div className='m-3'>
            <Button className='m-2' variant='success' onClick={() => setCatagory('camera')}>Camera</Button>
            <Button className='m-2' variant='success' onClick={() => setCatagory('laptop')}>Laptop</Button>
            <Button className='m-2' variant='success' onClick={() => setCatagory('mobile')}>Mobile</Button>
            <hr/>
        </div>
    );
};

export default Header;
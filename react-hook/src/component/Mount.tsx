import {useState} from 'react';
import Effect from './Effect';

const Mount = () => {
    //Mount - Unmount
    // Gắn component dô - tháo component ra

    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Effect></Effect>}
        </div>
    );
};

export default Mount;

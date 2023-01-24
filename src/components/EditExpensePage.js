import React from "react";
import { useLocation, useParams } from 'react-router-dom';

const EditExpensePage = ()=> {
    let location = useLocation();
    let p = useParams();
    console.log('waffle');
    console.log(location);
    console.log(p);
    var out;
    if (p.eid){
        out = (
            <p>
                Editing {p.eid}
            </p>
        )
    } else {
       out =  (
    <p>
        Enough about me. Let's talk about me.
    </p>
    );
    }
    return out;

};

export default EditExpensePage;

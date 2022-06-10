import React from 'react';
import expart1 from '../../../images/experts/expert-1.jpg'
import expart2 from '../../../images/experts/expert-2.jpg'
import expart3 from '../../../images/experts/expert-3.jpg'
import expart4 from '../../../images/experts/expert-4.jpg'
import expart5 from '../../../images/experts/expert-5.jpg'
import expart6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts =[
    {id: 1, name: 'Nur noby', img: expart1 },
    {id: 2, name: ' Nasim', img: expart2 },
    {id: 3, name: 'Pronoy', img: expart3 },
    {id: 4, name: 'emon khan', img: expart4 },
    {id: 5, name: 'Rakib', img: expart5 },
    {id: 6, name: 'Ayon', img: expart6 } 
]

const Experts = () => {
   
    return (
        <div id='Experts' className='container'>
            <h1 className='text-primary text-center mt-5'>Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>

        </div>
    );
};

export default Experts;
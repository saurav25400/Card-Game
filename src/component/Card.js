import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Card = () => {
    const [data, setData] = useState(null);
   
    useEffect(() => {
        async function fetchedData() {
            try {
                const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
                const results = response.data.results;
                setData(results);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchedData();
    }, []);
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex justify-center items-center my-32'>
            <div className='h-[300px] w-[450px] flex justify-around items-center  text-white rounded-md bg-chocolateBg'>
                <div className='image'>
                    <img className='rounded-md' src={data[0].picture.large} alt='not found'/>
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-around'>
                        <h4>{data[0].name.first}</h4>
                        <h4 className='mr-[52px] ml-[26px]'>{data[0].name.last}</h4>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='mr-32 my-3'>{data[0].gender}</h4>
                        <h4 className='mr-20'>{data[0].phone}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

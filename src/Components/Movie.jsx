import React from 'react';

const Movie = ({movie}) => {
    return (
        <div className='w-full h-fit'>
            <img className='w-full h-auto' src={movie?.moviemainphotos[0]} alt="" />
            <p className='text-base md:text-xl font-semibold'>{movie?.movietitle}</p>
        </div>
    );
};

export default Movie;
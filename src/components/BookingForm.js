import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm =(props)=>{
    const [date, setDate]= useState("");
    const [times, setTimes]= useState("");
    const [guests, setGuest]= useState("");
    const [occasion, setOccasion]= useState("");
    const navigate = useNavigate()


    const handleSubmit =(e)=>{
        e.preventDefault();
        navigate("/bookingConfirmed")
        // props.SubmitForm(e);
    }
    const handleChange = (e) =>
    {
         setDate(e);
         props.dispatch(e);
    }
    return(
           <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e)=> handleChange(e.target.value)} type='date' required/>
                        </div>

                        {/* for time selection */}
                        <div>
                        <label htmlFor='book-time'>Choose Time:</label> 
                        <select id="book-time" value={times} onChange={(e)=> setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                             {
                                props.availableTimes.availableTimes.map(availableTimes=>{return<option key=
                                    {availableTimes}>{availableTimes}</option>})
                             }
                        </select>
                        </div>
                        {/* for number of guest */}

                        <div>
                            <label htmlFor='book-guests'>Number of Guest:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e)=> setGuest(e.target.value)}/>

                        </div>
                        {/* Occation */}
                        <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
                            <option value="#">Select a occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="aviversary">Aniversary</option>

                            </select>
                        </div>
                        {/* sumbit button */}

                        <button type="submit" className='btnReceive'>
                        Make a Resevation
                        </button>
                    </fieldset>
                </form>
            </section>
           </header>
    );
}

export default BookingForm;

import axios from 'axios';
import {useState} from 'react';
function GuestForm(props){
    const [newGuestName, setNewGuestName] = useState('');
    const [newGuestMeal, setNewGuestMeal] = useState('false');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/guests',
            data: {
                name: newGuestName,
                kidsMeal: newGuestMeal,
            }
            })  
            .then(response => {
                props.getGuests();
                //clear inputs
                setNewGuestName('');
                setNewGuestMeal(false);
                
            })
            .catch(err => {
                alert('Error adding guest');
                console.log(err);
            })
        // if (newGuestName) {
        //     addGuest());
        // }
        // else {
        //     alert('The new guest needs a name!');
        // }
    }

    return (
        <>
        <h2>Add a new guest</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name
            </label>
            <input 
                type="text"
                placeholder="Name"
                value={newGuestName}
                onChange={(evt) => setNewGuestName(evt.target.value)}
            />
            <div>
                Would this guest like a kid's meal?
                <div>
                    <label>
                        <input
                            type="radio"
                            value={true}
                            checked={newGuestMeal === 'true'}
                            name="kidsMeal"
                            onChange={(evt) => setNewGuestMeal(evt.target.value)}
                        />
                        Yes, this quest would like a Kid's Meal
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value={false}
                            checked={newGuestMeal === 'false'}
                            name="kidsMeal"
                            onChange={(evt) => setNewGuestMeal(evt.target.value)}
                        />
                        No, this quest would not like a Kid's Meal
                    </label>
                </div>
            </div>
            <button type="submit">Add Guest</button>
        </form>
        </>

    )
}

export default GuestForm;
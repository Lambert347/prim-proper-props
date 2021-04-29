import GuestItem from '../GuestItem/GuestItem';

function GuestList(props){
    return (
        <>
        <h2>Guest List</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Kid's Meal</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(guest => 
                    (<GuestItem key={guest.id} guest={guest} />)
                )}
            </tbody>
        </table>
        </>
    )
}

export default GuestList;
function GuestItem(props){
    const guest = props.guest;
    return (
        <tr key={guest.id}>
            <td>{guest.name}</td>
            <td>{String(guest.kidsMeal)}</td>
        </tr>
    )
}

export default GuestItem;
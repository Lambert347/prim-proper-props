function DinnerSupplies (props){
    return (
        <>
        <h2>Dinner Supplies</h2>
        <div>
            Spoons: {Number(props.list.length * 2)}
        </div>
        <div>
            Forks : {Number(props.list.length * 2)}
        </div>
        <div>
            Knives: {Number(props.list.length * 2)}
        </div>
        </>
    )
}
export default DinnerSupplies;
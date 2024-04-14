

function List(props){
    const fruits = props.items;
    const category = props.category;
    // fruits.sort((a,b)=>a.name.localeCompare(b.name));
    // fruits.sort((a,b)=>b.name.localeCompare(a.name));
    // fruits.sort((a,b) =>a.calories-b.calories)
    // fruits.sort((a,b) =>b.calories-a.calories)

    // const lowCalFruit = fruits.filter( fruit => fruit.calories<100)
    // const lowCalFruits = lowCalFruit.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp; <b>{fruit.calories}</b></li>)
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp; <b>{fruit.calories}</b></li>)
    return(
        <>
        <h2 className="type">{category}</h2>
        <ol>{listItems}</ol>
        </>
    )

}

export default List;
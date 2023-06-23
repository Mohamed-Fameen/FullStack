import React, { useState } from 'react'

function Shop81() {

    const[items,setItemsPrice] = useState({
        Shoes : 999,
        Sock : 299,
        Polish : 99,
        Sandal : 699
    })
    const [checkedList, setCheckedList] = useState([])

    const[addItem, setAddItem] = useState(false)

     const addItemFunc = () => {
        let val = document.getElementsByName('items')
        let array = []
        for(let item of val){
            if(item.checked){
                array.push({ id:item.value, value:item.value})
            }
        }      
        setCheckedList(([...array]))

    }

    
  return (
    <div>
        <div>
        <h1>Shop81</h1>

        <label>
            <input type='checkbox' value="Shoes" name="items"></input>
            Shoes - ${items.Shoes}
        </label>

        <label>
            <input type='checkbox' value="Sock" name="items"></input>
            Sock - ${items.Sock}
        </label>

        <label>
            <input type='checkbox' value="Polish" name="items"></input>
            Polish - ${items.Polish}
        </label>

        <label>
            <input type='checkbox' value="Sandal" name="items"></input>
            Sandal - ${items.Sandal}
        </label>

        <button onClick={addItemFunc}>Add Item</button>

        <ul>
            {checkedList.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
        </div>
    </div>
  )

}
export default Shop81
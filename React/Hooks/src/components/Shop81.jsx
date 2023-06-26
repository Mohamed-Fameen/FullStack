import React, { useEffect, useState } from 'react'

function Shop81() {

    const[items,setItemsPrice] = useState({
        Shoes : 999,
        Sock : 299,
        Polish : 99,
        Sandal : 699
    })
    const [checkedList, setCheckedList] = useState([])

    const[addItem, setAddItem] = useState(false)

    useEffect(() => {
      const interval =  setInterval(() => {
            Object.keys(items).forEach(function(key){
                setItemsPrice(prevState => {
                    return {...prevState, [key] : Math.floor(Math.random() * 1000)}
                })
            })
        }, 3000);

        return () => {
            clearInterval(interval);
          };
    })

     const addItemFunc = () => {
        let val = document.getElementsByName('items')
        console.log(val[0])
        console.log(typeof val)
        
        let array = Array.from(val).filter(data => data.checked)
        console.log(typeof val)
        console.log(array)
        // for(let item of val){
        //     if(item.checked){
        //         array.push({ id:item.value, value:item.value})
        //     }
        // }      
        setCheckedList(array)

        // let selected = array.map(data => (<li key={data}> {data} </li>))
        // console.log(selected)
        //  setCheckedList(selected)
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
                <li key={item.value}>{item.value}</li>
            ))}

        </ul>
        </div>
    </div>
  )

}
export default Shop81
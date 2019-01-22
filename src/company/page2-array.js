import React from 'react';
const numbers = [1,2,3,4,5,6];
const obj =[
    {id:1,name:'aaa'},
    {id:2,name:'bbb'},
    {id:3,name:'ccc'},
    {id:4,name:'ddd'}
    
]
function ItemList(props){
    return <li id={props.items.id}>{props.items.name}</li>
}
const ItemLists = obj.map((item) => 
    <ItemList key={item.id} items={item} />
)
export default ItemLists
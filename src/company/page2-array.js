import React from 'react';
const numbers = [1,2,3,4,5,6];
const obj =[
    {id:11,name:'aaa'},
    {id:22,name:'bbb'},
    {id:33,name:'ccc'},
    {id:44,name:'ddd'},
]
function ItemList(props){
    return <li id={props.items.id}>{props.items.name}</li>;
}
function Ullists(props){
    return <li ids={props.value}>{props.value}</li>
}
function NumberList(props){
    const numbers = props.numbers;
    console.log(numbers)
    return(
        <ul>
            {
                numbers.map((number,index) => 
                    <Ullists key={index} value={number}></Ullists>
                )
            }
        </ul>
    )
}
const Lists = obj.map((item) => 
    <ItemList key={item} items={item} />
)
const Ullist = (
    <div>
        <NumberList numbers={numbers} />
    </div>
);
export {Lists,Ullist}
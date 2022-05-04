import { useRef, useState } from "react"
import styled from 'styled-components'


const Input=styled.input`

width:70px;
height:70px;
margin-left:20px;
font-size:30px

`



export const InputCompo=(props)=>{

const [numbers,setnumbers]=useState(new Array(props.numbers).fill(0))
const references=useRef(new Array(props.numbers).fill(0))
const [collection,setcollection]=useState(new Array(props.numbers).fill(0))

console.log(collection)

function handlechange(even,index)
{
     const val=[...collection]
      val[index]=even.target.value
setcollection(val)

if(val[index].length>0&&val[index].length==props.maximumvalue&&index<props.numbers-1)
{
    references.current[index+1].focus()

}

}

function backspacehandler(e,index)
{
    
    if(index>0&&e.key=="Backspace")
    {
       console.log(e.key)
       console.log(e)
    const val=[...collection]
      val[index]=""
      setcollection(val)
      console.log(collection[index].length,props.maximumvalue,"thiis")
      if(collection[index].length==0)
      {
        references.current[index-1].focus()

      }
    }
 
}

function onpastehandler(xx)
{
    const thevalue=xx.target.value
    const val=[...collection]
     
setcollection(val)
    for(let i=0;i<props.maximumvalue;i=i+5)
    {
        val[i]=""
        for(let j=i;j<i+props.numbers;j++)
        {
            val[i]=val[i]+thevalue[j]
           

        }
console.log(val,"value")
        setcollection(val)


    }


}

return (

<>

<h1>Please write input below</h1>

{numbers.map((e,index)=><Input ref={n=>references.current[index]=n}  onPaste={(xx)=>{onpastehandler(xx)}} onKeyDown={(x)=>{backspacehandler(x,index)}} onChange={(even)=>{handlechange(even,index)}} key={index} maxLength={props.maximumvalue}/>)}
</>

)




}
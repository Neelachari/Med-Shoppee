import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import {  useSearchParams } from 'react-router-dom'

export const SideBar = () => {
    // const initialCategory=searchParms.getAll("category")
    const [searchParm,setSearchParam]=useSearchParams()
    const initialcategory=searchParm.getAll("category")
    const [category,setCategory]=useState( initialcategory || [])
    const initialGender=searchParm.getAll("gender")
    const [gender,setGender]=useState(initialGender || [])
    const initialOrder=searchParm.getAll("order")
    const [order,setOrder]=useState(initialOrder|| "")
    const initialRating=searchParm.getAll("rating")
    const [rating,setRating]=useState(initialRating|| "")
    

    useEffect(()=>{
        let Parms={
            category,
            gender,
            rating
           
            
        }
        order && (Parms.order=order)

        setSearchParam(Parms)
        

    },[category, gender, order, rating ])


    const handleCategory =(e)=>{
        const {value}=e.target
       let newCategory=[...category]
       if(newCategory.includes(value)){
        newCategory =newCategory.filter((el)=> el !== value )

       }
       else{
        newCategory.push(value)
       
       }
       setCategory(newCategory)
       console.log(newCategory)
    }

    const handleGender = (e)=>{
        const {value}=e.target
        let newGender=[...gender]
        if(newGender.includes(value)){
            newGender =newGender.filter((el)=> el !== value )
 
        }
        else{
            newGender.push(value)
        
        }
        setGender(newGender)
        console.log(newGender)
    }

    const handleSort = (e)=>{
        const {value}=e.target
        setOrder(value)
        console.log(value);
    }

    const handleRating=(e)=>{
        const {value}=e.target
        let newRating=[...rating]
        if(newRating.includes(value)){
            newRating =newRating.filter((el)=> el !== value )
 
        }
        else{
            newRating.push(value)
        
        }
        setRating(newRating)
        console.log(newRating)
    }
   

    
  return (
    <DIV>
         <h1>Filter By category</h1>
        <div className='inputbox'>
            <input type="checkbox" value={"Tablets"}  checked={category.includes("Tablets")} onChange={handleCategory} />
            <label> Tablets</label>
        </div>
        <div className='inputbox'>
            <input type="checkbox" value={"Syrups"}  checked={category.includes("Syrups")} onChange={handleCategory}/>
            <label> Syrups</label>
        </div>
        <div className='inputbox'>
            <input type="checkbox" value={"Antibiotics"}  checked={category.includes("Antibiotics")} onChange={handleCategory}/>
            <label> Antibiotics</label>
        </div>
        <div className='inputbox'>
            <input type="checkbox" value={"Inhalers"}  checked={category.includes("Inhalers")} onChange={handleCategory}/>
            <label> Inhalers</label>
        </div>
        <br />
        <br />
        <h1>Filter By Care</h1>
        <div className='inputbox'>
        <input type="checkbox" value={"Diabetes_Care"}  checked={category.includes("Diabetes_Care")} onChange={handleCategory}/>
            <label> Diabetes Care</label>
        </div>
        <div className='inputbox'>
            {/* <input type="checkbox" value={"Ear_Care"}  checked={gender.includes("Ear_Care")} onChange={handleGender}  /> */}
            <input type="checkbox" value={"Ear_Care"}  checked={category.includes("Ear_Care")} onChange={handleCategory}/>
            <label> Ear Care</label>
        </div>
        <div className='inputbox'>
        <input type="checkbox" value={"Respiratory_Care"}  checked={category.includes("Respiratory_Care")} onChange={handleCategory}/>
            <label> Respiratory Care</label>
        </div>
        {/* <div>
            <input type="checkbox" value={"rating"}  checked={rating.includes("rating")} onChange={handleRating} />
            <label> Sort Rating</label>
        </div> */}
        <br />
        <br />
        <h1>Filter By Devices</h1>
        <div className='inputbox'>
            <input type="checkbox" value={"Medical_Devices"}  checked={category.includes("Medical_Devices")} onChange={handleCategory} />
            <label> Medical Devices</label>
        </div>
        <br />
        <br />
        <h1>Sort By Price</h1>
        <div onChange={handleSort}>
        <div className='inputbox'>
        <input type="radio" name="order" value={"asc"}  defaultChecked={order == "asc"} />
        <label >Low to High</label>  
        </div>
        <div className='inputbox'>
        <input type="radio" name="order" value={"desc"} defaultChecked={order == "desc"} />
        <label >High to Low</label>
        </div>
        </div>
    </DIV>
  )
}

const DIV=styled.div`
  padding: 20px;
  display: flex;
  font-size: medium;
  flex-direction: column;
  align-items: baseline;
  border-right: 0.5px solid orange;
  min-height: 180vh;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  
  h1{
    color: red;
    font-size: 18px;
  }
  @media (max-width: 768px) {
  padding: 20px;
  display: flex;
  font-size: medium;
  flex-direction: column;
  align-items: baseline;
  border-right: 0.5px solid orange;
  min-height: 180vh;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  h1{
    color: red;
    font-size: 10px;
  }
  .inputbox label{
    font-size: 8px;
}
.inputbox input{
    width: 10px;
}
}
@media (max-width: 550px) {
  padding: 20px;
  display: flex;
  font-size: medium;
  flex-direction: column;
  align-items: baseline;
  border-right: 0.5px solid orange;
  min-height: 180vh;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  h1{
    color: red;
    font-size: 10px;
  }
  .inputbox label{
    font-size: 8px;
}
.inputbox input{
    width: 8px;
}
}
`

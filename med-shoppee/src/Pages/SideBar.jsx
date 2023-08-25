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
    

    useEffect(()=>{
        let Parms={
            category,
            gender,
           
            
        }
        order && (Parms.order=order)

        setSearchParam(Parms)
        

    },[category, gender, order ])


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

   

    
  return (
    <DIV>
         <h1>Filter By category</h1>
        <div>
            <input type="checkbox" value={"Tablets"}  checked={category.includes("Tablets")} onChange={handleCategory} />
            <label> Tablets</label>
        </div>
        <div>
            <input type="checkbox" value={"Syrups"}  checked={category.includes("Syrups")} onChange={handleCategory}/>
            <label> Syrups</label>
        </div>
        <div>
            <input type="checkbox" value={"Antibiotics"}  checked={category.includes("Antibiotics")} onChange={handleCategory}/>
            <label> Antibiotics</label>
        </div>
        <div>
            <input type="checkbox" value={"Inhalers"}  checked={category.includes("Inhalers")} onChange={handleCategory}/>
            <label> Inhalers</label>
        </div>
        <br />
        <br />
        <h1>Filter By Products</h1>
        <div>
            <input type="checkbox" value={"male"}  checked={gender.includes("male")} onChange={handleGender}  />
            <label>Men</label>
        </div>
        <div>
            <input type="checkbox" value={"female"}  checked={gender.includes("female")} onChange={handleGender} />
            <label>Women</label>
        </div>
        <div>
            <input type="checkbox" value={"kids"}  checked={gender.includes("kids")} onChange={handleGender} />
            <label>Kids</label>
        </div>
        <br />
        <br />
        <h1>Sort By Price</h1>
        <div onChange={handleSort}>
        <div>
        <input type="radio" name="order" value={"asc"}  defaultChecked={order == "asc"} />
        <label >Low to High</label>  
        </div>
        <div>
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
  border-right: 1px solid gray;
  min-height: 200vh;
 
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  h1{
    color: red;
    font-size: 18px;
  }
`

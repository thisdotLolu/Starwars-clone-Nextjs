import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import Character from '../components/Character'
import styles from '../styles/Home.module.css'

export default function Characters({characters}) {
  // console.log(characters)
  const[value, setValue]=useState(12)

  const handleShowMore=()=>{
    setValue(value + 12);
  }

  return (<div>
    <Head>
      <title>STARWARS API CLONE</title>
    </Head>
    <HomeScreenContainer>
      <StarfieldLeft/>
      <CharactersContainer>
        {/* {characters.filter({character})} */}
        {characters.filter(character=>character.id !== 28 && character.id!==77).map((character,index)=>{
          return index < value && (
            <Character character={character} key={character.id}/>
          )
        })}
      </CharactersContainer>
      {value < characters.length && (
        <Button onClick={handleShowMore}>
          Show More
        </Button>
      )}
      <StarfieldRight/>
    </HomeScreenContainer>
  </div>
  )
}


export async function getStaticProps(context){
  const characters= await fetch ('https://akabab.github.io/starwars-api/api/all.json')
  .then(res=>res.json())

  return{
    props:{
      characters,      
    },
  }
}

const HomeScreenContainer= styled.div``

const CharactersContainer= styled.div`
display:flex;
border:1px solid;
margin-top:200px;
justify-content:center;
gap:25px;
flex-wrap: wrap;
background-color: #151515;
`
const Starfield=styled.div`
position:fixed;
width:200px;
border: 1px solid;
top:0;
background-repeat: repeat-y;
`
const StarfieldLeft= styled(Starfield)`
left:0;
height: 1700px;
background-position: left center;
background-size: 100% auto;
background-image: url('https://images.unsplash.com/photo-1636470946219-3be20d48519f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RhciUyMGZpZWxkfGVufDB8fDB8fA%3D%3D&w=1000&q=80');
`
const StarfieldRight= styled(Starfield)`
right:0;
height: 1700px;
background-position: left center;
background-size: auto 100%;
background-image: url('https://wallpaperaccess.com/full/2534802.jpg');
/* image-resolution: contain; */
`
const Button = styled.button`
color:#aaa;
background-color:transparent;
border:none;
font-family:inherit;
margin-left: auto;
margin-right:auto;
margin-top:20px;
margin-bottom:40px;
font-size: 18.4px;
display:block;
transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

:hover{
  color:#fff;
  cursor:pointer;
}
:hover::after{
  border-bottom-color: #fff;
  width:100%;
}
::after{
  content:'';
  display:block;
  width:40%;
  margin:0 auto;
  opacity:.9;
  border-bottom:1px solid transparent;

  /* Animations */
  -webkit-transition: border-color 200ms width 250ms;
  -moz-transition: border-color 200ms, width 250ms;
  transition : border-color 200ms, width 250ms;
}
`


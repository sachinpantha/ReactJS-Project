import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import books from './files'
import Typewriter from "typewriter-effect"
const Booklist=()=>{
  return(
    <div>
    <div id='type'>
    <App/>
    </div>
    <section className='Booklist'>
      {
        books.map((book)=>{
          const {image,title,author}=book;
          return(
            <Book book={book}/>
          );
        })
      }
    </section>
    </div>
  );
}
function App(){
  return(
  <div className='App'>
   <Typewriter loop={true} onInit={(typewriter)=>{
      typewriter.typeString("Presenting BamTech Library").pauseFor(2000).deleteAll().typeString('Created By Sachin pantha').start();
   }}
   />
  </div>
  );
}
const Book=(props)=>{ //Props destructuring
  const {image,title,author,location}=props.book; //Accessing book object via props
  return(
    <article>
     <img src={image} width="195px" height="300px" alt="" />
     <h3 style={{marginTop:'0.5rem',fontSize:"1.2rem",color:"red"}}>{title}</h3>
     <h4 style={{fontSize:"0.75rem"}}>{author}</h4>
     <a type="button" className="btn btn-success" href={location} target="_blank">Read Now!</a>
    </article>
  );
}
ReactDom.render(<Booklist/>,document.getElementById('root'));
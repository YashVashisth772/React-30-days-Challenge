import React, { useEffect, useCallback, useState, useMemo } from "react";
import {Suspense} from 'react';
import Header from './Header';
import Button from './Button';
import Fallback from './Fallback';
// import Footer from './Footer';
const Footer = React.lazy(()=> import('./Footer-LazyLoaded'));

export default function App() {
  const [name, setName] = useState("Home Page");
  const [nameAbout, setnameAbout] = useState('About Page')

  const handler =useCallback(() =>{
      setName('Header Updated');
  },[name]);
  const Abouthandler =useCallback(() =>{
    setnameAbout('About Header Updated');
},[nameAbout])


  return (
    <div>
      <div>
        <h1>useCallback hooks</h1>
        <Header type='home' name={name} /><br/>
        <Button clickEvent={handler}>Update Home Header</Button>
        <hr/>
        <Header type='about' name={nameAbout} /><br/>
        <Button clickEvent={Abouthandler}>Update About Header</Button><br/>
        <hr/>
        <Suspense fallback={<Fallback/>}>
          <Footer/>
        </Suspense>
      </div>
    </div>
  );
}

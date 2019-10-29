import React, { useRef, useState, useEffect } from 'react';
import { withContext } from 'react-dims';
import ThePattern from './ThePattern';

const ReactNode = ({dims})=>{
  const domNode = useRef(null);
  const [ canvas, createCanvas ] = useState(null);

  useEffect(()=>{
    createCanvas(()=>new ThePattern(domNode.current))
  },[]);

  return (
    <div ref={domNode} style={{display: 'grid', height: '100%'}}/>
  )
};

export default withContext(ReactNode);

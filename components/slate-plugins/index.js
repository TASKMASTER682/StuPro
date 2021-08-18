import React,{useState,useLayoutEffect} from 'react';

import { 
    SlatePlugins ,
    HeadingToolbar,

  
} from '@udecode/slate-plugins';

import Toolbar from './Toolbar';
import { styledComponents,options,pluginsBasic,initialValueBasicElements } from './utils';
import BalloonToolbarMarks from './BalloonToolbarMarks';


const SlatePlugin = ({handleChange,newValue}) => {
const [debugValue, setDebugValue] = useState(false);

useLayoutEffect(() => {
  const timeout = setTimeout(() => {
     setDebugValue(true);
   }, 1000);

  return () => clearTimeout(timeout);
 },[debugValue]);




const editableProps={

              placeholder: 'Type…',
              style: {
               padding: '15px',
               border:'1px solid  #00cdbb',
               borderRadius:'0.5rem'
             }
}

const showComponent=()=>{
    return(
        debugValue ? <BalloonToolbarMarks /> : ''
    )
}
    return (
        <>
    {showComponent()}
        <HeadingToolbar>
        <Toolbar/>
        </HeadingToolbar>

        <SlatePlugins  id='basic-elements' plugins={pluginsBasic}  initialValue={initialValueBasicElements} onChange={handleChange} components={styledComponents} options={options} editableProps={editableProps} >{JSON.stringify(newValue)}</SlatePlugins>
    </>
    )
}
export default SlatePlugin;



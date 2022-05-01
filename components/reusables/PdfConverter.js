import React,{useRef} from 'react';
import { useReactToPrint } from 'react-to-print';


const PdfConverter = ({children}) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  return (
    <>
    <div ref={componentRef} >
    {children}
    </div>
      <button id="pdfconverter" className='p-2 my-1 font-bold text-white bg-black rounded-md ' onClick={handlePrint}>Download Now</button>
    </>
  );
}

export default PdfConverter;
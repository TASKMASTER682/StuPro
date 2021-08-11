import React,{useRef} from 'react';
import { useReactToPrint } from 'react-to-print';


const PdfConverter = ({children}) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  return (
    <div>
    <div ref={componentRef} >
    {children}
    </div>
      <button id="pdfconverter" className='job bg-light btn nbtn btn-dark my-1' onClick={handlePrint}>Download Now</button>
    </div>
  );
}

export default PdfConverter;
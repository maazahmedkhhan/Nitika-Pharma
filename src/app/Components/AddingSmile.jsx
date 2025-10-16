import React from 'react'

const AddingSmile = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="AddSmileBg d-flex align-items-center justify-content-center">
          <div className="bg-layer d-flex flex-column justify-content-center align-items-center text-center p-4">
            <p className="addSmileText-1">
              ADDING SMILES TO YOUR FORMULATION
            </p>
            <p className="addSmileText-2 px-3 px-md-5">
              NITIKA provides a wide range of high quality pharmaceutical
              excipients across the spectrum of the pharmaceutical industry
              worldwide
            </p>
            <p className="addSmileText-3 px-3 px-md-5">
              NITIKA is one of the largest exporter of excipients to a diverse
              number of markets in South Asia, Middle East, US.
            </p>
            <button className='btn btn-primary'>Explore our Products</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddingSmile

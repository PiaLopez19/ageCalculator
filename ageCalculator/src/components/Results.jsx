const Results = ({ resultado }) => {
    return (
      <div className="flex flex-col justify-center items-center mx-auto lg:ms-0 my-auto py-auto">
        <div className='italic text-5xl lg:text-8xl font-black flex flex-col'>
          <p><span className='font-extrabold text-purple'>{resultado && resultado.ageYear !== undefined ? resultado.ageYear : '--'}</span>years</p>
          <p><span className='font-extrabold text-purple'>{resultado && resultado.ageMonth !== undefined ? resultado.ageMonth : '--'}</span> months</p>
          <p><span className='font-extrabold text-purple'>{resultado && resultado.ageDay !== undefined ? resultado.ageDay : '--'}</span> days</p>
        </div>
  
      </div>
    )
  }
  
  export default Results
  
  
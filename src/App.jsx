import './App.css'
import Calculator from './components/Calculator'
import Results from './components/Results'
import { differenceInYears } from "date-fns";
import { differenceInMonths } from "date-fns";
import { differenceInDays } from "date-fns";
import { useState } from 'react';



function App() {

  const [resultado, setResultado] = useState({})

  const ageCalculte = (day, month, year) => {
    const today = new Date()
    const birthDayObj = new Date(year, month -1, day)
    const ageYear = differenceInYears(today, birthDayObj)
    const ageMonth = differenceInMonths(today, birthDayObj)
    const ageDay = differenceInDays(today, birthDayObj)

    setResultado({
      ageYear:ageYear,
      ageMonth:ageMonth,
      ageDay:ageDay
    })
  }

  console.log(resultado);


  return (
    <div className='w-full h-screen bg-offWhite flex flex-col justify-center items-center mx-auto my-auto py-auto'>
      <div className="rounded-br-[150px] rounded-tr-[5%] rounded-tl-[5%] rounded-bl-[5%] py-[50px] px-[24px] lg:px-[50px] bg-white h-[485px] w-[345px] lg:w-[840px] lg:h-[600px] flex flex-col justify-center items-center lg:items-start mx-auto my-auto py-auto">
        <Calculator ageCalculte={ageCalculte} />
        <Results resultado={resultado} />
      </div>
    </div>
  )
}

export default App
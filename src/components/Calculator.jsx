import { useState } from 'react';
import imgPlus from '../assets/icon-plus.svg';
import imgArrow from '../assets/icon-arrow.svg';


const Calculator = ({ageCalculte}) => {

  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    ageCalculte(day, month, year)
  }


  return (
    <div className='lg:w-full' >
      <form className='lg:w-full' onSubmit={handleSubmit}>

        <div className='flex justify-araound items-center w-full mb-6'>

          <div className='mr-[16px]'>
            <p className="text-slate-500 font-bold mb-[10px] text-xs">DAY  <span className={day === "" ? 'text-[9px] text-red-500' : 'text-[9px] text-red-500 hidden'}>must fill</span></p>
            <input max={31} className={day >= 32 ? "lg:h-[70px] lg:text-2xl px-[10px] w-[87px] lg:w-[160px] h-[50px] border-solid border-2 border-red-400 rounded-lg" : "lg:text-2xl px-[10px] w-[87px] lg:w-[160px] h-[50px] lg:h-[70px] border-solid border-2 border-lightGrey rounded-lg"} type="number" placeholder='DD' value={day} onChange={(e) => setDay(e.target.value)} />
          </div>


          <div>
            <p className="text-slate-500 font-bold mb-[10px] text-xs">MONTH <span className={month === "" ? 'text-[9px] text-red-500' : 'text-[9px] text-red-500 hidden'}>must fill</span></p>
            <input max={12} className={month >= 13 ? "lg:h-[70px] lg:text-2xl px-[10px] w-[87px] lg:w-[160px] h-[50px] border-solid border-2 border-red-400 rounded-lg" : "lg:text-2xl px-[10px] w-[87px] lg:w-[160px] h-[50px] lg:h-[70px] border-solid border-2 border-lightGrey rounded-lg"} type="number" placeholder='MM' value={month} onChange={(e) => setMonth(e.target.value)} />
          </div>

          <div className='ml-[16px]'>
            <p className="text-slate-500 font-bold mb-[10px] text-xs">YEAR <span className={year === "" ? 'text-[9px] text-red-500' : 'text-[9px] text-red-500 hidden'}>must fill</span></p>
            <input max={2023} className={year >= 2024 ? "lg:h-[70px] lg:text-2xl px-[10px] w-[87px] lg:w-[160px] h-[50px] border-solid border-2 border-red-400 rounded-lg" : "lg:text-2xl px-[10px] w-[87px] lg:w-[160px] h-[50px] lg:h-[70px] border-solid border-2 border-lightGrey rounded-lg"} type="number" placeholder='YYYY' value={year} onChange={(e) => setYear(e.target.value)} />
          </div>
        </div>

        <button disabled={day === 0 && month === 0 && year === 0 } type='submit' className='hover:bg-offBlack flex flex-col bg-purple rounded-full w-[60px] h-[60px] lg:w-[96px] lg:h-[96px] mx-auto lg:me-0 items-center justify-center'>
          <img className='py-auto ' src={imgArrow} alt="" />
        </button>

      </form>

    </div>
  )
}

export default Calculator;
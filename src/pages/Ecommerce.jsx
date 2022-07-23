import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine} from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy' 
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
  const { currentColor } = useStateContext()

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
        h-44 rounded-x1 w-full lg:w-85 p-8 pt-9 m-3 bg-hero-pattern
         bg-no-repeat bg-cover bg-center'>
          <div>
            <p className='font-bold text-gray-400'>Ganhos</p>
            <p className='text-2x1'>R$65.000,50</p>

          </div>
          <div className='mt-6'>
          <Button 
             color='white'
             bgColor={currentColor}
             text='Download'
             borderRadius='10px'
             size='md'
             >

          </Button>
        </div>
        </div>       

        </div>
      <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div 
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
              p-8 pt-9 rounded-2x1 md:w-56 '
              >
                <button type='button' className='text-2x1 opacitity-0.9 
                rounded-full p-4 hover:drop-shadow-x1'
                 style={{ color: item.iconColor,
                   backgroundColor: item.iconBg}}>
                    {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>
                    {item.amount}
                  </span>
                  <span className={`text-${item.pcColor} text-sm  ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>
                  {item.title}
                </p>
            </div>
          ))}
          </div>

          <div className='flex gap-10 flex-wrap justify-content'>
            <div className='bg-white dark:text-gray-200 
            dark:bg-secondary-dark- m-3 p-4 rounded-2x1 md:w-780'>
              <div className='flex justify-between'>
                <p className='font-semibold text-x1'>
                  Receita atualizada
                  </p>
                  <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2 
                    text-gray-600 hover:drop-shadow-x1'>
                      <span> <GoPrimitiveDot /> </span>
                      <span>Gastos </span>
                    </p>
                    <p className='flex items-center gap-2 
                    text-green-400 hover:drop-shadow-x1'>
                      <span> <GoPrimitiveDot /> </span>
                      <span>Orçamentos</span>
                    </p>
                  </div>
                </div>

                <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                  <div className='border-r-1 border-color- m-4 pr-10'>
                      <div>
                        <p>
                          <span className='text-3x1 font-semibold'>
                            R$93,438
                          </span>
                          <span className='p-1.5 hover:drop-shadow-x1 
                          cursor-pointer rounded-full text-white 
                          bg-green-400 ml-3 text-xs'>23%</span>
                        </p>
                        <p className='text-gray-500 mt-1 '>Orçamento</p>
                      </div>

                      <div className='mt-8'>
                        <p>
                          <span className='text-3x1 font-semibold'>
                            R$48,500
                          </span>
                        </p>
                        <p className='text-gray-500 mt-1 '>Gastos</p>
                      </div>

                      <div className='mt-5'>
                          <SparkLine 
                          currentColor={currentColor}
                           id='line-sparkline'
                           type='Line'
                           height='80px'
                           width='250px'
                           data={SparklineAreaData}
                           color={currentColor}
                             />
                      </div>
                       <div className='mt-10'>
                          <Button
                              color='white'
                              bgColor={currentColor}
                              text='Download dos dados'
                              borderRadius='10px'
                               />
                       </div>    
                  </div>

                  <div>
                     <Stacked width='320px' height='360px' />
                  </div>
                     
                </div>
            </div>
          </div>
   </div>
     
  )
}

export default Ecommerce
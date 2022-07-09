import React from 'react'
import { MdOutlineCancel, MdOutLineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent  } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'

const ThemeSettins = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 
    right-0">
      <div className='float-right h-screen dark:text-gray-200 bg-white 
      dark:[#484B52] w-400 '>
        <div className='flex justify-between items-center p-4 
        ml-4 '>
          <p className='font-semibold text-xl'>Configurações</p>
          <button
            type='button'
            onClick={() => {}}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
            className="text-2x1 p-3 hover:drop-shadow-x1
             hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Opções de tema</p>

          <div className='mt-4'>
            <input
               type='radio'
               id='light'
               name='theme'
               value='Light'
               className="cursor-pointer"
               onChange={() => {}}
               chacked={true}
                />
                <label htmlFor='light' className='ml-2 text-md cursos-pointer'>
                    Light
                </label>
          </div>
          <div className='mt-4'>
            <input
               type='radio'
               id='dark'
               name='theme'
               value='Dark'
               className="cursor-pointer"
               onChange={() => {}}
               chacked={true}
                />
                <label htmlFor='dark' className='ml-2 text-md cursos-pointer'>
                    Dark
                </label>
          </div>
        </div>

        <div className="flex-col border-t-1 border-color p-4 
        ml-4 ">
          <p className="font-semibold text-lg">Temas coloridos</p>
          <div className='flex gap-3'>
              {themeColors.map((item, index) => (
                <TooltipComponent key={index}
                   content={item.name}
                   position="topCenter">
                    <div className='relative mt-2 cursor-pointer flex 
                    gap-5 items-center'>
                      <button>
                       <BsCheck />
                      </button>
                    </div>

                </TooltipComponent>
              ))}   
          </div> 

        </div>

      </div>

    </div>
  )
}

export default ThemeSettins
import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor =
   args.currentValue.hex
}

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3x1">
    <Header category='Aplicativo' title='Color Picker' />

    <div className="text-center">
      <div id="preview">
        <div className="flex justify-center items-center 
        gap-20 flex-wrap">
          <div>
            <p className="text-2x1 font-semibold mt-2 mb-14">
              cores</p>
              <ColorPickerComponent 
                  id="inline-pallete"
                  mode="Pallete"
                  modeSwitcher={false}
                  inline
                  showButtons={false}
                  change={change}
               />
          </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default ColorPicker
import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea, Avatar, Button } from '@windmill/react-ui'

import { MailIcon } from '../icons'


function Profile() {
  return (
    <>

      <PageTitle>Perfil</PageTitle>
   
      

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className='flex justify-center m-2'>
                 <Avatar
                    size="extra-large"
                    className="align-middle"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    aria-hidden="true"
                />
            </div>
        <Label>
          <span>Name</span>
          <Input className="mt-1" placeholder="Jhorman gonzalez" />
        </Label>

        <Label className="mt-2">
          <span>Email</span>
          {/* <!-- focus-within sets the color for the icon when input is focused --> */}
          <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
            disabled
              className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
              <MailIcon  className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </Label>

        <Label className="mt-2">
          <span>Fechas de nacimiento</span>
          <Input type='date' className="mt-1" />
        </Label>

        <Label className="mt-2">
          <span>Numero Telefonico</span>
          <Input type='tel' className="mt-1" placeholder="321-301-8687" />
        </Label>

        <div className='flex justify-center'>
        <Label className=" mt-6" check>
                    <Input type="checkbox" />
                    <span className="ml-2">
                    I agree to the <span className="underline">privacy policy</span>
                    </span>
                 </Label>
        </div>

        <div className='flex justify-center mt-2'>
              

              <Button className="mt-4" >
                Actualizar
              </Button>
         </div>
        

        


   
      </div>

     

   
      

    </>
  )
}

export default Profile

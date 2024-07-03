import React, { FC, PropsWithChildren, useEffect, useLayoutEffect, useState } from 'react'
import { IPasswordGen, defaultPasswordGen } from './types'
import { PasswordContextProvider } from './password-context'

const PasswordGenContainer:FC<PropsWithChildren> = ({children}) => {
    const [state, setState] = useState<IPasswordGen>(defaultPasswordGen)
    let str = ''
    const uppercaseSet = 'QWERTYUIOPASFGHJKLZXCVBNM'
    const lowercaseSet = 'qwertyuiopasdfghjklzxcvbnm'
    const numbersSet = '1234567890'
    const specialCharSet = '~!@#$%^&*()'

    function passwordGen(uppercase: boolean=false, lowercase: boolean=true, num: boolean=true, specialChar: boolean=false, length: number=8){
        let genPass = ''
        if(uppercase){
            str +=uppercaseSet
        }
        if(lowercase){
            str += lowercaseSet
        }
        if(num){
            str+= numbersSet
        }
        if(specialChar){
            str+= specialCharSet
        }

        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random() * str.length);
            genPass += str[randomIndex];
        }
        setState(function(prev){
            return {
                ...prev,
                password: genPass
            }
        })
    }

    useLayoutEffect(function(){
        passwordGen()
    }, [])

  return (
    <PasswordContextProvider value={{...state, passwordGen}}>{children}</PasswordContextProvider>
  )
}

export default PasswordGenContainer
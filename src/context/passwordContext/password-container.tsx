import React, { FC, PropsWithChildren, useEffect, useLayoutEffect, useState } from 'react'
import { IPasswordGen, defaultPasswordGen } from './types'
import { PasswordContextProvider } from './password-context'

const PasswordGenContainer:FC<PropsWithChildren> = ({children}) => {
    const [state, setState] = useState<IPasswordGen>(defaultPasswordGen)
    console.log(state)
    let str = ''
    const uppercaseSet = 'QWERTYUIOPASFGHJKLZXCVBNM'
    const lowercaseSet = 'qwertyuiopasdfghjklzxcvbnm'
    const numbersSet = '1234567890'
    const specialCharSet = '~!@#$%^&*()'

    function setLower(val:boolean){
        setState(function(prev){
            return {
                ...prev,
                lowercase:val
            }
        })
    }

    function setUpper(val:boolean){
        setState(function(prev){
            return {
                ...prev,
                uppercase:val
            }
        })
    }

    function setNum(val:boolean){
        setState(function(prev){
            return {
                ...prev,
                num:val
            }
        })
    }

    function  setSpecialCh(val:boolean){
        setState(function(prev){
            return {
                ...prev,
                specialChar:val
            }
        })
    }

    function  setLength(val:number){
        setState(function(prev){
            return {
                ...prev,
                length:val
            }
        })
    }

    function passwordGen(){
        let genPass = ''
        if(state.uppercase){
            str +=uppercaseSet
        }
        if(state.lowercase){
            str += lowercaseSet
        }
        if(state.num){
            str+= numbersSet
        }
        if(state.specialChar){
            str+= specialCharSet
        }

        for(let i=0; i<state.length; i++){
            const randomIndex = Math.floor(Math.random() * str.length);
            genPass += str[randomIndex];
        }
        setState(function(prev){
            return {
                ...prev,
                password: genPass
            }
        })
        str = ''
    }

    useLayoutEffect(function(){
        passwordGen()
    }, [state.length, state.lowercase, state.uppercase, state.num, state.specialChar])

  return (
    <PasswordContextProvider value={{...state, passwordGen, setLower, setUpper, setSpecialCh, setNum, setLength}}>{children}</PasswordContextProvider>
  )
}

export default PasswordGenContainer
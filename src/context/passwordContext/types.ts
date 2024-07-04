export interface IPasswordGen {
    passwordGen: ()=> void
    password:string
    length:number
    uppercase:boolean
    lowercase:boolean
    num:boolean
    specialChar:boolean
    setLower:(val:boolean)=>void
    setUpper:(val:boolean)=>void
    setNum:(val:boolean)=>void
    setSpecialCh:(val:boolean)=>void
    setLength:(val:number)=>void
}

export const defaultPasswordGen:IPasswordGen={
    passwordGen: function (): void {
        throw new Error("Function not implemented.")
    },
    password: "",
    length: 8,
    uppercase: false,
    lowercase: true,
    num: true,
    specialChar: false,
    setLower: function (): void {
        throw new Error("Function not implemented.")
    },
    setUpper: function (): void {
        throw new Error("Function not implemented.")
    },
    setNum: function (): void {
        throw new Error("Function not implemented.")
    },
    setSpecialCh: function (): void {
        throw new Error("Function not implemented.")
    },
    setLength: function (): void {
        throw new Error("Function not implemented.")
    }
}
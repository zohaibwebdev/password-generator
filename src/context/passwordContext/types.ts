export interface IPasswordGen {
    passwordGen: (uppercase:boolean,lowercase:boolean,num:boolean, specialChar:boolean, length: number)=> void
    password:string
}

export const defaultPasswordGen:IPasswordGen={
    passwordGen: function (uppercase: boolean, lowercase: boolean, num: boolean, specialChar: boolean, length: number): void {
        throw new Error("Function not implemented.")
    },
    password: ""
}
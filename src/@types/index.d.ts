interface IUser {
    name:String
    email:String
    lastNames:String
    password:String
    rol: "administrator" | "client";
}

declare namespace Express{
    export interface Request{
        user?:IUser
        }
}    

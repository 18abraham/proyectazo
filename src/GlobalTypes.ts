import{ Schema } from "mongoose"

export interface IUser {
    name:String
    email:String
    lastNames:String
    password:String
    rol: "administrador" | "client";
}

export interface IQuestionnaire {
    title: String;
    description: String;
    userId: Schema.Types.ObjectId | String; 
}

export interface IQuestion{
    title: String;
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    questionnaireId: Schema.Types.ObjectId | String;
}

export interface IOption {
    title: String;
    questionId: Schema.Types.ObjectId | String; 
}

export interface IAnswer{
    questionnaireId:Schema.Types.ObjectId | String;
    questionId:Schema.Types.ObjectId | String;
    answer:String;
}
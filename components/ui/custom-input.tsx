import { Input } from "./input"
import { ChangeEvent } from "react"
interface CustomInputProps {
    name : string
    placeholder : string
    type : string
    disabled : boolean
    value? : string | number;
    handleChange?: (e : ChangeEvent<HTMLInputElement>) => void;
    className? : string; 
}
export function CustomInput({name,placeholder, type, disabled, value, handleChange, className} : CustomInputProps) {
    return(
        <Input
            name={name}
            disabled={disabled}  
            placeholder={placeholder}
            type={type}
            value = {value}
            onChange={handleChange}
            className={className || "h-10 focus:border-purple-500 border-gray-300"}
        />
    )
}
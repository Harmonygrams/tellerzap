import { Label } from "./label"
interface CustomLabelProps {
    name : string
}
export function CustomLabel ( { name } : CustomLabelProps) {
    return(
        <Label className="text-[18px] font-medium text-left w-full inline-block text-gray-700">{name}</Label>
    )
}
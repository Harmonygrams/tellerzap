interface FormTitleProps {
    title : string
}
export function FormTitle ({title} : FormTitleProps) {
    return <span className="text-2xl md:text-3xl">{title}</span>
}
interface PageTitleProps {
    title : string
}
export function PageTitle ({title} : PageTitleProps) {
    return <span className="text-xl md:text-2xl font-semibold text-gray-600">{title}</span>
}
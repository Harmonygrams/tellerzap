import { PackageSearch } from "lucide-react"
export function EmptySearch() {
    return(
        <div className="flex justify-center items-center flex-col mt-5">
            <PackageSearch size={100} className="text-purple-500"/>
            <h2 className="text-xl text-center mt-5">Nothing here</h2>
        </div>
    )
}
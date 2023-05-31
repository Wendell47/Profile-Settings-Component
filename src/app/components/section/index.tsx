
export default function Section({title, children}){
    return(
        <div className="py-3 border-t border-gray-100 flex flex-col gap-1 text-gray-900 text-base">
            <span className="text-gray-400 text-xs">
                {title} 
            </span>
            {children}
        </div>
    )
}
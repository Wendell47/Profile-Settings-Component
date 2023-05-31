import {HiChevronRight} from 'react-icons/hi'
export default function ProfileButton({icon: Icon, title, ...rest}){
    return(
        <a {...rest} className="text-gray-700 inline-flex justify-between items-center rounded-lg p-2 transition hover:bg-slate-200 hover:text-gray-700/90" href="#">
            <span className='inline-flex items-center gap-2'> {Icon && <Icon size={20}/>} {title}</span> <HiChevronRight className='fill-gray-400' /> </a>
    )
}
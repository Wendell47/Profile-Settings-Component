import {HiChevronRight} from 'react-icons/hi'

export default function ProfileButtonSecondary({icon: Icon, title, ...rest}) {


    return(
        <a {...rest}  className="inline-flex  justify-between items-center p-2 hover:opacity-80" href="#" >
            <span className='inline-flex items-center gap-2'> {Icon && <Icon size={20}/>} {title}</span> </a>
    )
}
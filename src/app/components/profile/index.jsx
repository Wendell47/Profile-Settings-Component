import Image from "next/image"
import perfil from "../../assets/Avatar.png"
export default function ProfileHeader(){
    return(
        <div className="flex h-full gap-4 items-center">
            <Image
             src={perfil}
             alt="profile" 
             width={50}
             height={50}
             />
             <div>
                <h2 className="font-bold text-lg text-gray-700">Wendel Araujo</h2>
                <span className="text-gray-600 text-sm">wendellAraujo@example.com</span>
             </div>
        </div>
    )
}
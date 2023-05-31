import ProfileHeader from "../profile";
import ProfileButton from "../profileButton";
import ProfileButtonExit from "../profileButtonSecondary";
import Section from "../section";
import {LuUser, LuHelpCircle,LuBell, LuLogOut} from 'react-icons/lu'
import{IoAccessibilityOutline, IoKeyOutline} from 
'react-icons/io5'
import {TbDevices} from 'react-icons/tb'
import {BsArrowRepeat} from 'react-icons/bs'
import ProfileButtonSecondary from "../profileButtonSecondary";
export default function Profile() {

    return(
        <div className="flex  p-5  bg-white rounded-2xl shadow-lg w-[375px] flex-col gap-5">
            <ProfileHeader/>
            <Section title="CONTA">
            <ProfileButton
            icon={LuUser}
            title="Dados pessoais"
            />
            <ProfileButton
            icon={IoKeyOutline}
            title="Informação de login"
            />
            </Section>
            <Section title="PREFERÊNCIAS">
            <ProfileButton
            icon={LuBell}
            title="Notificações"
            />
            <ProfileButton
            icon={IoAccessibilityOutline}
            title="Acessibilidade"
            />
            </Section>
            <Section title="PRIVACIDADE">
            <ProfileButton
            icon={TbDevices}
            title="Aparelhos conectados"
            />
            <ProfileButton
            icon={BsArrowRepeat}
            title="Contas vinculadas"
            />
            </Section>
            <Section title="">
            <ProfileButtonSecondary
            icon={LuHelpCircle}
            title="Central de Ajuda"
            />
            <ProfileButtonSecondary
            icon={LuLogOut}
            title="Sair"
            style={{color:"#AA2222"}}
            />
            </Section>
            
      </div>
    )
      
    
}
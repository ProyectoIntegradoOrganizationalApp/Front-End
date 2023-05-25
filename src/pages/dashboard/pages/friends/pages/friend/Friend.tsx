// React / Router
import { useParams } from 'react-router-dom';

// Componentes
import { DirectMessages } from '../../components/DirectMessages';
import { Chat } from '../../components/Chat';

function toggleMessages() {
    document.getElementById("directMessages")?.classList.toggle("max-[839.50px]:hidden");
    document.getElementById("dropdownArrow")?.classList.toggle("rotate-[270deg]");
    document.getElementById("dropdownArrow")?.classList.toggle("translate-x-[0.220rem]");
}

export function Friend() {

    const friend = useParams();

    return (
        <>
            <div className="bg-gray-200 dark:bg-slate-800 w-full rounded-xl flex min-[839.50px]:flex-wrap content-start max-[839.50px]:flex-col">
                <div onClick={toggleMessages} className="h-full max-[839.50px]:h-[unset] min-[839.50px]:flex-1 bg-gray-200 dark:bg-slate-800 min-[1085px]:rounded-l-xl p-4 flex flex-col gap-10 max-[839.50px]:cursor-pointer">
                    <DirectMessages selected={friend.name} />
                </div>
                <div className="h-full max-[839.50px]:h-[unset] flex-[4.5] bg-gray-300 dark:bg-slate-700 min-w-fit rounded-r-xl p-4 max-[500px]:p-2">
                    <Chat friend={friend.name} />
                </div>
            </div>
        </>
   )
}
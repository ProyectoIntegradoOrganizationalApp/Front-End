// React / Router
import { useParams } from 'react-router-dom';

// Componentes
import { DirectMessages } from '../../components/DirectMessages';
import { Chat } from '../../components/Chat';

export function Friend() {

    const friend = useParams();

    return (
        <>
            <div className="bg-gray-200 dark:bg-slate-800 w-full rounded-xl flex flex-wrap content-start">
                <div className="h-full max-[575px]:h-[unset] flex-1 bg-gray-200 dark:bg-slate-800 rounded-l-xl p-4 flex flex-col gap-10">
                    <DirectMessages selected={friend.name} />
                </div>
                <div className="h-full max-[575px]:h-[unset] flex-[4.5] bg-gray-300 dark:bg-slate-700 min-w-fit rounded-r-xl p-4 max-[500px]:p-2">
                    <Chat friend={friend.name} />
                </div>
            </div>
        </>
   )
}
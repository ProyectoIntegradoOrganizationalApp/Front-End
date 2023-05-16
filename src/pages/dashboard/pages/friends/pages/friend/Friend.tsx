// React / Router
import { useParams } from 'react-router-dom';

// Componentes
import { DirectMessages } from '../../components/DirectMessages';
import { Chat } from '../../components/Chat';

export function Friend() {

    const friend = useParams();

    return (
        <>
            <div className="bg-slate-800 w-full rounded-xl flex">
                <div className="bg-slate-800 w-1/5 rounded-l-xl p-4 flex flex-col gap-10">
                    <DirectMessages selected={friend.name} />
                </div>
                <div className="bg-slate-700 w-4/5 rounded-r-xl p-4">
                    <Chat friend={friend.name} />
                </div>
            </div>
        </>
   )
}
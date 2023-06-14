import React, { ChangeEvent, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { useModal } from '../../../../../../../hooks/useModal';
import { SaveImage } from '../../../../../../../components/image-kit/SaveImage';

interface Board {
    title: string,
    photo: string,
    updated_at: string,
    id: string,
    iduser: string,
    idproject: string,
    idapp: string
}

export const BoardsElement: React.FC<{ board: Board, index: number }> = ({ board, index }) => {
    // DELETE AND EDIT BOARD
    const [toInput, setToInput] = useState(false);
    const [inputValue, setInputValue] = useState(board.title);
    const { openModal } = useModal();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            document.getElementById('editButton')?.classList.add('fa-edit');
            document.getElementById('editButton')?.classList.remove('fa-xmark', 'scale-125');
            setInputValue(event.currentTarget.value);
            setToInput(false);
        }
    };

    const changeIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        if (!toInput) {
            setToInput(true);
            button.classList.remove('fa-edit');
            button.classList.add('fa-xmark', 'scale-125');
        } else {
            setInputValue(board.title);
            setToInput(false);
            button.classList.add('fa-edit');
            button.classList.remove('fa-xmark', 'scale-125');
        }
    }

    // BACKGROUND
    const [photo, setPhoto] = useState<string>('');

    const photoUpdate = (url: string) => {
        setPhoto(url);
    }

    return (
        <li key={index} className={`relative bg-[url(${board?.photo})] bg-cover bg-no-repeat bg-center box-border board rounded-xl min-[839.50px]:flex-1 basis-[33%] min-w-fit min-[839.50px]:max-w-sm h-1/4 cursor-pointer`}>
            <Link to={`${board.id}`} className="w-full h-full relative">
                <div className="bg-black/30 w-full h-full rounded-xl transition-all"></div>
            </Link>
            <section className="absolute top-3.5 flex justify-between items-center pl-3">
                {!toInput ? (
                    <h2 className="text-black dark:text-white font-bold select-none leading-none">{inputValue}</h2>
                ) : (
                    <input value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} minLength={1} maxLength={22} className="input input-bordered border-none text-black max dark:text-white bg-gray-300 dark:bg-[#28292d] p-2 h-6" onClick={() => setToInput(true)} type="text" />
                )}
            </section>
            <aside className="absolute top-3.5 right-0 hidden items-center gap-2 pr-3">
                <i className="fa-solid fa-trash cursor-pointer text-red-700 hover:text-red-800" onClick={() =>
                    openModal({
                        isOpen: true,
                        type: "confirmation",
                        action: "remove",
                        target: board.title,
                        submitText: "Remove Column",
                        submitAction: () => { }
                    })}></i>
                <i id="editButton" className="fa-solid fa-edit cursor-pointer text-green-700 hover:text-green-800" onClick={changeIcon}></i>
            </aside>
            <section className="absolute bottom-4 w-full justify-end px-3 hidden">
                <SaveImage
                    cb={photoUpdate}
                    title="Change Background"
                    blue
                />
            </section>
        </li>
    )
}
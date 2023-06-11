// React
import { useState } from 'react';

/**
 * Componente Account, que representa la ruta /account en la cual podremos
 * ver y configurar nuestra cuenta
 * @returns React.FC
 */
export function Security() {
    const [oldPassword, setOldPassword] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmpass, setConfirmPass] = useState<string>('');

    return (
        <div className="flex-1 flex flex-col justify-between min-[811px]:mt-9">
            <div className="flex flex-wrap gap-5 text-black dark:text-white">
                <div className="flex-1 basis-full flex flex-col gap-2">
                    <label htmlFor="oldpassword">Old Password</label>
                    <input
                        type="password"
                        name="oldpassword"
                        placeholder="Enter old password"
                        minLength={8}
                        maxLength={80}
                        className={`flex-1 input input-bordered border-none bg-gray-300 dark:bg-[#28292d] p-4`}
                        required={true}
                        value={oldPassword}
                        onChange={event => {
                            setOldPassword(event.target.value);
                        }}
                    />
                </div>
                <div className="flex-1 flex flex-wrap gap-5">
                    <div className="flex-1 flex flex-col gap-2">
                        <label htmlFor="password">New Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter new password"
                            minLength={8}
                            maxLength={80}
                            className={`flex-1 input input-bordered border-none bg-gray-300 dark:bg-[#28292d] p-4`}
                            required={true}
                            value={password}
                            onChange={event => {
                                setPassword(event.target.value);
                            }}
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <label htmlFor="confirmpass">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmpass"
                            placeholder="Enter old password"
                            minLength={8}
                            maxLength={80}
                            className={`flex-1 input input-bordered border-none bg-gray-300 dark:bg-[#28292d] p-4`}
                            required={true}
                            value={confirmpass}
                            onChange={event => {
                                setConfirmPass(event.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-2">
                <button className="btn btn-primary w-fit !bg-green-700 hover:!bg-green-800">
                    Update
                </button>
                <button className="btn btn-primary w-fit">
                    Cancel
                </button>
            </div>
        </div>
    )
}
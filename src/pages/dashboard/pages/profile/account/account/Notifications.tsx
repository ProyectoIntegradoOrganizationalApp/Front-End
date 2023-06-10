// React
import { useState } from 'react';

/**
 * Componente Account, que representa la ruta /account en la cual podremos
 * ver y configurar nuestra cuenta
 * @returns React.FC
 */

export function Notifications() {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.checked;
        setIsChecked(value);
        // Petición backend
    };

    return (
        <div className="flex-1 flex flex-col justify-between mt-9">
            <div className="flex flex-wrap gap-5 text-black dark:text-white">
                <div className="flex-1 basis-full flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-2 select-none">
                        <label htmlFor="allownotifications">Allow Notifications</label>
                        <p className="leading-none text-black/50 dark:text-white/50">Check to allow notifications to reach your inbox</p>
                    </div>
                    <input
                        type="checkbox"
                        id="allownotifications"
                        name="allownotifications"
                        className="scale-125"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
            </div>
        </div>
    )
}
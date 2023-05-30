// React
import { ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import { DescriptionBottom } from "./DescriptionBottom";
import { DescriptionTop } from "./DescriptionTop";

interface ItemInfo {
    name: string,
    description?: string,
    icon: string
}

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function MainItem( props: { item: ItemInfo, descriptionBottom?: boolean, children: ReactNode } ) {

    const navigate = useNavigate();

    const doAction = ( target: string | undefined ) => {
        if( target ) {
            navigate(target);
        }
    }

    return (
        <div className="bg-white dark:bg-slate-800 w-full h-fit px-4 py-3 flex max-[499px]:flex-wrap justify-between items-center rounded-xl gap-2.5">
            {/* Info */}
            { props.item.description && props.descriptionBottom == true ? 
                (
                    <DescriptionBottom
                        title={props.item.name}
                        description={props.item.description}
                        icon={props.item.icon}
                    />
                ): 
                (
                    <DescriptionTop
                        title={props.item.name}
                        description={props.item.description}
                        icon={props.item.icon} 
                    />
                )
            }

            {/* Buttons */}
            <div className="flex items-center gap-2">
                { props.children }
            </div>
        </div>
    )
}
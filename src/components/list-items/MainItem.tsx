// React
import { ReactNode } from "react";

// Componentes de Cajas de descripcion de items
import { DescriptionBottom } from "./DescriptionBottom";
import { DescriptionTop } from "./DescriptionTop";

interface ItemInfo {
    name: string,
    description?: string,
    icon?: string
}

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function MainItem(props: { item: ItemInfo, descriptionBottom?: boolean, children: ReactNode }) {

    // Comprobamos que tipo de caja hay que renderizar
    let description: ReactNode;
    if (props.item.description && props.descriptionBottom == true) {
        description = <DescriptionBottom title={props.item.name} description={props.item.description} icon={props.item.icon ? props.item.icon : ""} />
    } else {
        description = <DescriptionTop title={props.item.name} description={props.item.description} icon={props.item.icon ? props.item.icon : ""} />
    }

    return (
        <div className="bg-white dark:bg-[#202124] w-full h-fit px-4 py-3 flex max-[499px]:flex-wrap justify-between items-center rounded-xl gap-2.5">
            {/* Info */}
            {description}

            {/* Buttons */}
            <div className="flex items-center gap-2">
                {props.children}
            </div>
        </div>
    )
}
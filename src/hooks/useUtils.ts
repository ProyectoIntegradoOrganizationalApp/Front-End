import { UserActivity } from "../domain/user/UserActivity.interface";

export const useUtils = ( activity: Array<UserActivity>) => {
    
    const getUserWork = (): { commitsWeekly: number, commitsDaily: number} => {
        // Contadores en los que vamos sumando la cantidad de commits realizados
        let commitsWeekly: number = 0;
        let commitsDaily: number = 0;

        // Bucle en el que recorremos las actividades y calculamos si se han realizado durante la semana y/o día 
        activity.map((act: UserActivity) => {
            let fechaActual = new Date();

            let primerDiaSemana = new Date(fechaActual);
            primerDiaSemana.setDate(fechaActual.getDate() - fechaActual.getDay());

            let ultimoDiaSemana = new Date(fechaActual);
            ultimoDiaSemana.setDate(fechaActual.getDate() + (6 - fechaActual.getDay()));

            let aVerificar = new Date(act.date);

            if (aVerificar.getDate() == fechaActual.getDate()) {
                commitsDaily += act.commits;
            }

            if (aVerificar >= primerDiaSemana && aVerificar <= ultimoDiaSemana) {
                commitsWeekly += act.commits;
            }
        })

        return { commitsWeekly, commitsDaily };
    }

    return { getUserWork };    

}


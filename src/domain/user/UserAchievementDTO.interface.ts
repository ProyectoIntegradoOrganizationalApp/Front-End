export interface UserAchievementDTO {
    id: string,
    title: string,
    description: string,
    icon: string,
    progress: number,
    percentage: string,
    current_state: number,
    completed: boolean
}
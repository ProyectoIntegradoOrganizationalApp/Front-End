export interface UserAchievementInfo {
    id: string,
    title: string,
    description: string,
    icon: string,
    category: string,
    progress: number,
    completed: boolean,
    current_state: number,
    percentage: number
}
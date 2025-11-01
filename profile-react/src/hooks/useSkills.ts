import skills from "../data/skills";

export interface Skill{
    name: string;
    skillPoints: number;
    level: string;
}

const useSkills = () => ({data: skills , isLoading: false, error: null});

export default useSkills;
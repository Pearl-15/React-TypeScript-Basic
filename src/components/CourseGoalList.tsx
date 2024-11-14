import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalProps } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalListProps = { 
    goals: CourseGoalProps[];
    onDeleteGoal: (id: number) => void; 
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps){

    if(goals.length === 0){
        return (
            <InfoBox mode="hint">
                There is no Goals yet, Add Some !
            </InfoBox>
        )
    }

    let warningBox: ReactNode; //does not have initial value only know type - will pass as a children so use "ReactNode" type
    if(goals.length >= 4){
        warningBox = (
            <InfoBox mode='warning'>
                You're collecting a lot of goals. Don't put so hard on yourself.
            </InfoBox>
        )
    }


    return(
        <>
        {warningBox}
        <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDelete={onDeleteGoal}
            />
            <p>{goal.description}</p>
          </li>
        ))}
        </ul>
        </>
    )
};
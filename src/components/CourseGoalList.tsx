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
            // here only need "mode" & children props
            <InfoBox mode="hint">
                There is no Goals yet, Add Some !
            </InfoBox>
        )
    }

    let warningBox: ReactNode; //does not have initial value only know type - will pass as a children so use "ReactNode" type
    let severityStyle: 'low' | 'medium' | 'high' | undefined;
    if (goals.length === 3){
        severityStyle='low';
    }else if(goals.length > 3 && goals.length <= 5){
        severityStyle='medium';
    }else if(goals.length >5){
        severityStyle='high';
    }
    if(goals.length >= 3){
        warningBox = (
            // here need "mode" "severity" & children props
            <InfoBox mode='warning' severity={severityStyle}>
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
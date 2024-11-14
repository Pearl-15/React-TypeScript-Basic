import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {

    const goal = useRef<HTMLInputElement>(null); //don't have the value yet so is null, useRef is Generic type so need to put <> , entered value will be "HTMLInputElement" type
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // retrieve from "form ref"
        const enteredGoal = goal.current!.value; // if goal.current not null (goal.current!)
        const enterSummary = summary.current!.value;

        // reset Form
        event.currentTarget.reset();

        // add mew goal
        onAddGoal(enteredGoal, enterSummary);


    }


    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal: </label>
                <input id="goal" type="text" ref={goal}></input>
            </p>
            <p>
                <label htmlFor="summary">Summary: </label>
                <input id="summary" type="text" ref={summary}></input>
            </p>
            <button>Add Goal</button>
        </form>
    )
}
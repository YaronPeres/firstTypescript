import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

function NewGoal({ onAddGoal }: NewGoalProps) {
  // null means we dont have a value yet. while undefined means we dont have value at all.
  // adding extra type information using the <> to pass extra information about the related type of useRef
  // the related type of useRef is the type of value that will be managed by useRef.
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // we use this to extract the values from the form event.
    // new FormData(event.currentTarget);
    //but using ref to do it:
    // useRef gives an object with a current propery.
    // ! means the object will never be null. telling type script it will never be null and if it will be null app will crush
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    //reset form
    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;

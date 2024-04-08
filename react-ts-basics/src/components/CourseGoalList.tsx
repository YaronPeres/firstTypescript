import CourseGoal from "./CourseGoal";
import { type CourseGoal as copiedGoal } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: copiedGoal[];
  onDeleteGoal: (id: number) => void;
};
function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no course goals yet</InfoBox>;
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You have to many goals.
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGoalList;

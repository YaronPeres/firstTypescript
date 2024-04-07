import CourseGoal from "./CourseGoal";
import { type CourseGoal as copiedGoal } from "../App";

type CourseGoalListProps = {
  goals: copiedGoal[];
  onDeleteGoal: (id: number) => void;
};
function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;

import { type PropsWithChildren } from "react";

// type CourseGoalProps = { title: string; description: string };
// both type and interface are ok to use better interface
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }
//import {type ReactNode} from "react" needs to be used.
// function CourseGoal({ title, children }: CourseGoalProps) {
//     return (
//       <article>
//         <div>
//           <h2>{title}</h2>
//           {children}
//         </div>
//         <button>Delete</button>
//       </article>
//     );
//   }

// another way of defining props using children
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

// both ways of using this function is ok.
// this approach need import {type FC} from 'react'
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };
function CourseGoal({ title, id, children, onDelete }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;

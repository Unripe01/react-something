import { Row } from "../data/data";

const Component: React.FC<Row> = (props) => (
  <tr>
    <th>{props.age}</th>
    {props.answers.map(
      (
        answer,
        i // answer:number
      ) => {
        if(answer == null) return <td key={i}>{'-'}</td>
        return <td key={i}>{`${(answer) * 100}%`} </td>
      }
    )}
  </tr>
);
export default Component;

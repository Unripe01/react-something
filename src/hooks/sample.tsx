import * as React from "react";
//React 18からは React.FC から children プロパティが外されている（自動で入るのはデメリットのほうが多い）

type Props = {
  children?: React.ReactNode
}

const Child:React.FC<Props> = props => (
<div>{props.children}</div>
);

const Parent:React.FC<{label:string}> = (props) => (
  <Child>{props.label}</Child>
);

export default Parent
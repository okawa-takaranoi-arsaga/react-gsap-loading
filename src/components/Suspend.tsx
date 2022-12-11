import { ReactElement } from "react";

type SuspensedProps = {
  children: ReactElement;
};

const Suspend = (props: SuspensedProps) => {
  const { children } = props;

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  if (Math.random() < 0.3) {
    throw sleep(3000);
  }
  return <div>{children}</div>;
};

export default Suspend;

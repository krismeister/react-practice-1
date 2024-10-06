import { memo } from "react";

const LongWaitButton = memo<{ onClick: () => void }>((props) => {
  console.log("inside of longWait");

  const x = new Date().getTime();
  while (new Date().getTime() - x < 1000) {}
  return (
    <button {...props} style={{ color: "red" }}>
      Log Value
    </button>
  );
});

export default LongWaitButton;

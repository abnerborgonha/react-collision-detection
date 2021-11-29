import React, {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
} from "react";

import "./style.css";

interface IBoxProps {
  name: string;
}

export interface IBoxHandles {
  handleVisible: (state: boolean) => void;
  getBoundingClientRect(): DOMRect;
}

const Box: React.ForwardRefRenderFunction<IBoxHandles, IBoxProps> = (
  { name },
  ref
) => {
  const [visable, setVisable] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  const handleVisible = useCallback((state: boolean) => {
    setVisable(state);
  }, []);

  useImperativeHandle(ref, () => ({
    handleVisible,
    getBoundingClientRect() {
      return divRef.current!.getBoundingClientRect();
    },
  }));

  return (
    <div
      ref={divRef}
      className={`container ${!visable && "container-disable"}`}
    >
      <p>{name}</p>
    </div>
  );
};

export default forwardRef(Box);

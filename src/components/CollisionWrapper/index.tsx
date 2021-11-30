import * as React from 'react'
import { forwardRef, useRef, useImperativeHandle, HTMLAttributes } from "react";

import handleCollisionDetected from '../../utils/handleCollisionDetected';

export interface ICollisionWrapperHandles {
  getBoundingClientRect(): DOMRect;
}

export type ICollisionWrapperProps = HTMLAttributes<HTMLDivElement>;

const CollisionWrapper: React.ForwardRefRenderFunction<
  ICollisionWrapperHandles,
  ICollisionWrapperProps
> = ({ children }, ref) => {
  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    getBoundingClientRect() {
      return divRef.current!.getBoundingClientRect();
    },
  }));

  return <div ref={divRef}>{children}</div>;
};

export { handleCollisionDetected}
export default forwardRef(CollisionWrapper);

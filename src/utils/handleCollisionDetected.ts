interface ICollisionDetectedProps {
  element1Rect: DOMRect | undefined;
  element2Rect: DOMRect | undefined;
}

function handleCollisionDetected(data: ICollisionDetectedProps) {
  const { element1Rect, element2Rect } = data;

  if (!element1Rect || !element2Rect) return;

  return !(
    element1Rect.top + element1Rect.height < element2Rect.top ||
    element1Rect.top > element2Rect.top + element2Rect.height ||
    element1Rect.left + element1Rect.width < element2Rect.left ||
    element1Rect.left > element2Rect.left + element2Rect.width
  );
}

export default handleCollisionDetected;

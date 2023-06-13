import { IBackgroundAnimationProps } from "./types";
import * as S from "./styles";

function BackgroundAnimation({ objectsQuantity }: IBackgroundAnimationProps) {
  const objectsArray: S.IObjectStyleProps[] = Array(objectsQuantity)
    .fill({})
    .map(() => {
      const sideSize = Math.floor(Math.random() * 100) + 20;

      return {
        width: sideSize,
        height: sideSize,
        left: Math.random() * 100,
        animationDelay: Math.random() * 10,
        animationDuration: Math.floor(Math.random() * 20) + 10,
      };
    });

  return (
    <S.Container>
      {objectsArray.map((object, index) => (
        <S.Object {...object} key={index}></S.Object>
      ))}
    </S.Container>
  );
}

export { BackgroundAnimation };

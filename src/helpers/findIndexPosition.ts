import _ from "lodash";

export type IndexPosition = {
  index: number;
  letter: string;
};

type findIndexPositionArgs = {
  data: any[];
  path: string;
};

export default function findIndexPosition({
  data,
  path,
}: findIndexPositionArgs): IndexPosition[] {
  return data.reduce((acc: IndexPosition[], cur, index) => {
    const firstLetter = Array.from(_.get(cur, path))[0] as string;

    if (index === 0 || acc[acc.length - 1].letter !== firstLetter) {
      acc.push({ index, letter: firstLetter });
    }

    return acc;
  }, []);
}

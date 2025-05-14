type AnyArr = unknown[]; //task-1

type NotEmptyArr<e = unknown> = [e, ...e[]]; //task-2

type ComplexObj = {
  arr: [
    number,
    {
      obj: {
        name: string;
        value: string;
      };
    },
    {
      hello: number;
    }
  ];
  value: number;
}; //task-3

type ComplexObj2 = {
  arr: [
    number,
    {
      obj: {
        name: string;
        value: string;
      };
    },
    {
      hello: number;
    }
  ];
  value: number;
  [key: string]: unknown; //task-4
};

type Original<T> = T & unknown; //task-5

type AlwaysNever<T> = T & never; //task-6

type OriginalUnion<T> = T | never; //task-7

type AlwaysUnknown<T> = T | unknown; //task-8

type RemoveNumbers<T> = T & Exclude<T, Number>; //task-9

type FindEventByIntersection<T, K> = T extends { type: K } ? T : never; //task-10

function structureUnion(
  ...params:
    | [{ isOne: true }, number]
    | [{ isTwo: true }, number, number]
    | [{ isThree: true }, number, number, number]
) {} //task-11

function anyCallback(cb: (...args: unknown[]) => unknown) {} //task-12

type SuperRef = Ref<unknown>; //task-13

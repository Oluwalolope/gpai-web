declare module "javascript-lp-solver" {
  interface Variable {
    [key: string]: number;
  }

  interface Model {
    optimize: string;
    opType: "min" | "max";
    constraints: Record<string, { max?: number; min?: number }>;
    variables: Record<string, Variable>;
  }

  interface Solution {
    feasible: boolean;
    bounded: boolean;
    result: number;
    [key: string]: any;
  }

  const solver: {
    Solve: (model: Model) => Solution;
  };

  export default solver;
}
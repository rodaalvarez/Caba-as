declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

declare namespace __WebpackModuleApi {
  interface RequireContext {
    keys(): string[];
    (id: string): string;
  }
}

declare const require: {
  context: (path: string, deep?: boolean, filter?: RegExp) => __WebpackModuleApi.RequireContext;
};

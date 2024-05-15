import deepmerge from 'deepmerge';
export declare function merge<I, F>(into: Partial<I>, from: Partial<F>, mergeOption: deepmerge.Options): I & F;

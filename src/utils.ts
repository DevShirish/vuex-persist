import deepmerge from 'deepmerge'

export function merge<I, F>(into: Partial<I>, from: Partial<F>, mergeOption: deepmerge.Options): I & F {
  return deepmerge(into, from, mergeOption)
}

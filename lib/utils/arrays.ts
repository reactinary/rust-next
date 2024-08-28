export const Arrays = {
  isNotEmpty<T>(arr: readonly T[] | null | undefined): arr is readonly T[] {
    return Array.isArray(arr) && arr.length > 0;
  },
  isEmpty<T>(arr: readonly T[] | null | undefined): arr is null | undefined {
    return !Arrays.isNotEmpty(arr);
  },
  sum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
  },
};

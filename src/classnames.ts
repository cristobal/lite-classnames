/*
  The `classNames` function is designed to be simple and have a small footprint.
  It does some performance optimizations like:
    1. Only mutates the `output` variable, and avoids creating additional strings.
    2. It uses a single loop to iterate through the input classes, rather than a `for of` construct.
    3. It uses a `for in` construct to evaluate the keys of the input objects, rather than use `Object.entries()`.
*/
export default function classNames(
  ...classes: (string | Record<string, boolean>)[]
) {
  let output = '';
  for (let index = 0, size = classes.length; index < size; index++) {
    // handle single string values
    if (typeof classes[index] === 'string') {
      output += (output && ' ') + classes[index];
    }
    // otherwise we assume it's a Record<string, boolean>
    else {
      for (const key in classes[index] as Record<string, boolean>) {
        if ((classes[index] as Record<string, boolean>)[key]) {
          output += (output && ' ') + key;
        }
      }
    }
  }

  return output;
}

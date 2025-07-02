export default function classNames(
  ...classes: (string | Record<string, boolean> | undefined)[]
) {
  let output = '';
  let separator = '';
  for (const value of classes) {
    if (!value) {
      continue;
    }

    if (typeof value === 'string') {
      output += separator + value;
      separator = ' ';
      continue;
    }

    for (const [key, predicate] of Object.entries(value)) {
      if (predicate) {
        output += separator + key;
        separator = ' ';
      }
    }
  }

  return output;
}

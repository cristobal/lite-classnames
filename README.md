# `lite-classnames`

> A lightweight ("lite") classnames generation utility function.

This is a simpler alternative to the [classnames](https://www.npmjs.com/package/classnames) package with a smaller API surface for lean classnames string generation.

It's not meant to be a 1-to-1 drop-in replacement, but rather a more opinionated lightweight approach that encourages intentional usage. It only supports the following types as input:

- `string` and
- `Record<string, boolean>`

Instead of supporting various input types and conditionally checking every user input, the responsibility shifts to the user to handle this programmatically. This leaves the function with less work to do, resulting in a smaller footprint and better performance.

## Usage

```ts
import classNames from 'lite-classNames';
classNames('foo', 'bar', 'quux');                 // => 'foo bar quux'
classNames({ foo: true, bar: true, quux: true }); // => 'foo bar quux'
classNames('foo', { bar: true }, 'quux');         // => 'foo bar quux'

classNames('foo', { bar: false }, 'quux');         // => 'foo quux'
classNames({ foo: true, bar: false, quux: true }); // => 'foo quux'
```

## Background

At my previous workplace, we frequently used the [classnames](https://www.npmjs.com/package/classnames) utility function, but it became difficult to reason about due to varying preferences for how arguments were passed to the function.

We also noticed performance issues on low-end devices that caused janky CSS animations and poor user experience, since the classnames evaluation could be skipped on some animation frames.

We needed something with better performance that enforced consistent usage with fewer input options, resulting in code that was easier to understand and more performant.

This is the result of that effort.
## FAQ

### Why only support `string` and `Record<string, boolean>`?

To discourage multiple ways of expressing the same result in code. The current API surface provides the minimum functionality we needed to get things done.

### Why no `null`, `undefined`, or `number` support?

Less is more. While `numbers` can be coerced to strings, we leave this to be handled at the call site rather than within the function itself. CSS classes are rarely numeric values alone without some string prefix/suffix.

### Why no support for arrays of strings or records?

This is by design - we wanted to avoid complex and/or nested structures and prevent the need for a recursive function. You can always destructure directly in your code:

```ts
classNames(...list);
```

However, this approach makes code less readable in our opinion.

> You could always wrap the function yourself to add array support 🤷

### Will you accept feature requests?

Most likely no. If you don't like the opinionated approach of this library, you can always use the original [classnames](https://www.npmjs.com/package/classnames) library or other alternative libraries that are available such as:

- [clsx](https://www.npmjs.com/package/clsx)
- [classcat](https://www.npmjs.com/package/classcat)
- [light-classnames](https://www.npmjs.com/package/light-classnames)

Alternatively, you can copy/paste the code itself (about 20 lines) and modify it to suit your needs.

# `lite-classnames`

> A lightweight ("lite") classnames generation utility function.

This is a simpler alternative to the [classnames](https://www.npmjs.com/package/classnames) package, with a smaller API surface for faster class name string generation.

It isn't meant to be a 1-to-1 drop-in replacement, but rather a more lightweight approach that encourages intentional usage. By supporting only a limited set of parameter types instead of accepting various input types and conditionally checking every user input, the responsibility shifts to the user to handle this programmatically. This leaves the function with less work to do, resulting in a smaller footprint and better performance.

## Usage

```ts
import classNames from 'lite-classNames';
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
classNames('foo', bar ? 'bar' : undefined); // => 'foo bar'
```

## Background

At my previous workplace, we frequently used the [classnames](https://www.npmjs.com/package/classnames) utility function, but it became difficult to reason about due to varying preferences for how arguments were passed to the function.

We also noticed performance issues on low-end devices that caused janky CSS animations and poor user experience.

We needed something with better performance that enforced consistent usage with fewer input options, resulting in code that was easier to understand and more performant.

This is the result of that effort.

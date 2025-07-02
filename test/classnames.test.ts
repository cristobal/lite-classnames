import { expect } from 'chai';

import classNames from '../src/classnames.ts';

describe(classNames.name, () => {
  it('returns class with no optional classes', () => {
    expect(classNames('class-one')).to.equal('class-one');
  });

  it('returns all classes with optional classes where the conditions are valid', () => {
    expect(
      classNames(
        'foo',
        {
          bar: true,
        },
        undefined,
        {
          qux: true,
        },
        'quux',
        {
          corge: false,
          garply: true,
        },
      ),
    ).to.equal('foo bar qux quux garply');
  });

  it('handles multiple true conditions', () => {
    expect(
      classNames({
        foo: true,
        bar: true,
      }),
    ).to.equal('foo bar');
  });
});

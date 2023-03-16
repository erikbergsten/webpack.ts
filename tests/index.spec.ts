import { foo } from '../src/index';
import { describe, it, expect } from '@jest/globals';

describe("main suite", () => {
  it('foo returns 123', () => {
    expect( foo() ).toBe(123);
  })
});

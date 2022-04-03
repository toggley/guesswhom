describe('jest foo example', () => {
  test('foo: 2 + 2 = 4', () => {
    let sum = 0
    sum += 2
    sum += 2
    expect(sum).toBe(4);
    expect(sum).not.toBe(3);
  });
});
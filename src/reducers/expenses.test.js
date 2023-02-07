import expensesReducer from "./expenses";

test('expensesReducer @@INIT (undef state)', () => {
    const result = expensesReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual([]);
});
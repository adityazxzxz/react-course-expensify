const add = (a,b) => a + b;
const generateGreeting = (name='Anonymous') => `Hallo ${name}!`;

test('should add two numbers',() => {
    const result = add(1,1);
    expect(result).toBe(2);
})


test('should generate greeting from name',() => {
    const result = generateGreeting('Adit');
    expect(result).toBe('Hallo Adit!');
})

test('should generate greeting for no name',() => {
    const result = generateGreeting();
    expect(result).toBe('Hallo Anonymous!');
})
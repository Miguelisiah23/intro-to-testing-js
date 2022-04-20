// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be defined as a function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return a string saying "Hello, Jane!" to the passed in string of Jane', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });

    it('should return a string saying "Hello, Alex!" to the passed in string of alex', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return a string saying "Hello, Pat!" to the passed in string of Pat', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when no inputs are passed in', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when true is passed in', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when false is passed in', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when input is null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should always return a boolean', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return "true" when 5 is passed in', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when pqssed in a string', function () {
        expect(isFive()).not.toBe("string")
    });
});
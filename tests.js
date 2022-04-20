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

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when "2" is passed in', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when "-4" is passed in', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when "3" is passed in', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when "banana" is passed in', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return true when "8" is passed in', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when "infinity" is passed in', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a boolean "true" value is passed in', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when a boolean "false" value is passed in', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false if no input is passed', function () {
        expect(isEven()).toBe(false);
    });
})

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when "a" is passed in', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when "A" is passed in', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when "y" is passed in', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when "4" is passed in', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when true is passed in', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when false is passed in', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when "banana" is passed in', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when nothing is passed in', function () {
        expect(isVowel()).toBe(false);
    });
})
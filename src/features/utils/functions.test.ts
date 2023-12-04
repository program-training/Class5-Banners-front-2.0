import { validateEmail, validatePassword } from "./functions";

describe("validate Password", () => {
  test("without anything", () => {
    const bool = validatePassword("");
    expect(bool).toBeFalsy();
  });

  test("without 4 numbers", () => {
    const bool = validatePassword("Aaa!111");
    expect(bool).toBeFalsy();
  });

  test("without 1 symbol", () => {
    const bool = validatePassword("Aaa1111");
    expect(bool).toBeFalsy();
  });

  test("without 1 uppercase", () => {
    const bool = validatePassword("aaa!1111");
    expect(bool).toBeFalsy();
  });

  test("without 1 lowercase", () => {
    const bool = validatePassword("AAA!1111");
    expect(bool).toBeFalsy();
  });

  test("with correct Password", () => {
    const bool = validatePassword("Aa!1111");
    expect(bool).toBeTruthy();
  });

  it("should handle non-string input correctly", () => {
    // Boolean
    expect(validatePassword(true as unknown as string)).toBeFalsy();

    // Number
    expect(validatePassword(123 as unknown as string)).toBeFalsy();

    // Object
    expect(validatePassword({ foo: "bar" } as unknown as string)).toBeFalsy();

    // Undefined
    expect(validatePassword(undefined as unknown as string)).toBeFalsy();

    // Null
    expect(validatePassword(null as unknown as string)).toBeFalsy();

    // Array
    expect(validatePassword(["a", "b", "c"] as unknown as string)).toBeFalsy();

    //String
    expect(validatePassword("Aa!1111")).toBeTruthy();
  });
});

describe("validate Email", () => {
  test("without anything", () => {
    const bool = validateEmail("");
    expect(bool).toBeFalsy();
  });

  test("without username", () => {
    const bool = validateEmail("@gmail.com");
    expect(bool).toBeFalsy();
  });

  test("without @ ", () => {
    const bool = validateEmail("usernamegmail.com");
    expect(bool).toBeFalsy();
  });

  test("without domain", () => {
    const bool = validateEmail("username@.com");
    expect(bool).toBeFalsy();
  });

  test("without top level domain", () => {
    const bool = validateEmail("username@gmail.");
    expect(bool).toBeFalsy();
  });

  test("with correct email", () => {
    const bool = validateEmail("username@gmail.com");
    expect(bool).toBeTruthy();
  });

  it("should handle non-string input correctly", () => {
    // Boolean
    expect(validateEmail(true as unknown as string)).toBeFalsy();

    // Number
    expect(validateEmail(123 as unknown as string)).toBeFalsy();

    // Object
    expect(validateEmail({ foo: "bar" } as unknown as string)).toBeFalsy();

    // Undefined
    expect(validateEmail(undefined as unknown as string)).toBeFalsy();

    // Null
    expect(validateEmail(null as unknown as string)).toBeFalsy();

    // Array
    expect(validateEmail(["a", "b", "c"] as unknown as string)).toBeFalsy();

    //String
    expect(validateEmail("username@gmail.com")).toBeTruthy();
  });
});

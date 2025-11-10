// Kopie von https://deno.land/std@0.203.0/assert/mod.ts
// Nur die Funktion assertEquals für lokale Nutzung

/**
 * Asserts that actual and expected are equal (using Object.is).
 * Throws AssertionError if not.
 */
export function assertEquals(actual: unknown, expected: unknown, msg?: string) {
  if (!Object.is(actual, expected)) {
    throw new Error(
      msg || `Assertion failed: actual (${actual}) !== expected (${expected})`
    );
  }
}

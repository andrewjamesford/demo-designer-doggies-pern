// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { TextDecoder, TextEncoder } from "util";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;
globalThis.fetch = vi.fn(() => new Promise(() => {}));

vi.mock("@auth0/auth0-react", () => ({
  __esModule: true,
  Auth0Provider: ({ children }) => children,
  useAuth0: () => ({
    isAuthenticated: false,
    isLoading: false,
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  }),
  withAuthenticationRequired: (Component) => Component,
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  globalThis.fetch = vi.fn(() => new Promise(() => {}));
});

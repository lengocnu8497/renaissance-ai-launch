import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// ---------------------------------------------------------------------------
// Mocks (must be hoisted before component import)
// ---------------------------------------------------------------------------

const { mockInvoke, mockToastError } = vi.hoisted(() => ({
  mockInvoke: vi.fn(),
  mockToastError: vi.fn(),
}));

vi.mock("@/integrations/supabase/client", () => ({
  supabase: { functions: { invoke: mockInvoke } },
}));

vi.mock("sonner", () => ({
  toast: { error: mockToastError, success: vi.fn() },
}));

// Render framer-motion components as plain elements to avoid animation noise
vi.mock("framer-motion", () => {
  const forward = (tag: string) =>
    ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      // Strip framer-specific props so the DOM doesn't warn
      const {
        initial, animate, whileInView, viewport, transition, // eslint-disable-line
        ...rest
      } = props as any;
      return React.createElement(tag, rest, children);
    };
  return {
    motion: {
      div: forward("div"),
      p: forward("p"),
      form: forward("form"),
    },
  };
});

import React from "react";
import { PricingSection } from "../PricingSection";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const STRIPE_URL = "https://checkout.stripe.com/pay/cs_test_example";

function successResponse(url = STRIPE_URL) {
  return { data: { url }, error: null };
}
function errorResponse(message = "Something went wrong") {
  return { data: null, error: { message } };
}
function noUrlResponse() {
  return { data: { url: null }, error: null };
}

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

beforeEach(() => {
  vi.clearAllMocks();
  // Reset location so we can track redirects
  Object.defineProperty(window, "location", {
    writable: true,
    value: { href: "" },
  });
});

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

describe("PricingSection — rendering", () => {
  it("renders all three plan names", () => {
    render(<PricingSection />);
    expect(screen.getByText("Silver")).toBeInTheDocument();
    expect(screen.getByText("Gold")).toBeInTheDocument();
    expect(screen.getByText("Annual")).toBeInTheDocument();
  });

  it("renders founding prices for all plans", () => {
    render(<PricingSection />);
    expect(screen.getByText("$15.99")).toBeInTheDocument();
    expect(screen.getByText("$23.99")).toBeInTheDocument();
    expect(screen.getByText("$172.79")).toBeInTheDocument();
  });

  it("renders regular (strikethrough) prices", () => {
    render(<PricingSection />);
    expect(screen.getByText(/Regular \$19\.99/)).toBeInTheDocument();
    expect(screen.getByText(/Regular \$29\.99/)).toBeInTheDocument();
    expect(screen.getByText(/Regular \$215\.99/)).toBeInTheDocument();
  });

  it("marks Gold as Most Popular", () => {
    render(<PricingSection />);
    expect(screen.getByText("Most Popular")).toBeInTheDocument();
  });

  it("renders a Pre-order Now button for each plan", () => {
    render(<PricingSection />);
    expect(screen.getAllByRole("button", { name: /pre-order now/i })).toHaveLength(3);
  });

  it("renders the trust line with Stripe mention", () => {
    render(<PricingSection />);
    expect(screen.getByText(/secured by stripe/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Happy paths
// ---------------------------------------------------------------------------

describe("PricingSection — happy paths", () => {
  it("calls create-checkout with plan=silver when first button clicked", async () => {
    mockInvoke.mockResolvedValue(successResponse());
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalledWith("create-checkout", {
        body: { plan: "silver" },
      });
    });
  });

  it("calls create-checkout with plan=gold when second button clicked", async () => {
    mockInvoke.mockResolvedValue(successResponse());
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[1]);

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalledWith("create-checkout", {
        body: { plan: "gold" },
      });
    });
  });

  it("calls create-checkout with plan=annual when third button clicked", async () => {
    mockInvoke.mockResolvedValue(successResponse());
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[2]);

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalledWith("create-checkout", {
        body: { plan: "annual" },
      });
    });
  });

  it("redirects to Stripe checkout URL on success", async () => {
    mockInvoke.mockResolvedValue(successResponse(STRIPE_URL));
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() => {
      expect(window.location.href).toBe(STRIPE_URL);
    });
  });

  it("calls invoke exactly once per click", async () => {
    mockInvoke.mockResolvedValue(successResponse());
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() => expect(mockInvoke).toHaveBeenCalledTimes(1));
  });
});

// ---------------------------------------------------------------------------
// Loading state
// ---------------------------------------------------------------------------

describe("PricingSection — loading state", () => {
  it("shows Redirecting... on the clicked plan's button", async () => {
    let resolveInvoke!: (v: unknown) => void;
    mockInvoke.mockReturnValue(new Promise((r) => (resolveInvoke = r)));

    render(<PricingSection />);
    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() =>
      expect(screen.getByText("Redirecting...")).toBeInTheDocument()
    );

    // Clean up: resolve the promise so the component settles
    resolveInvoke(successResponse());
  });

  it("disables all buttons while a request is in-flight", async () => {
    let resolveInvoke!: (v: unknown) => void;
    mockInvoke.mockReturnValue(new Promise((r) => (resolveInvoke = r)));

    render(<PricingSection />);
    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[1]);

    await waitFor(() => {
      screen.getAllByRole("button").forEach((btn) => expect(btn).toBeDisabled());
    });

    resolveInvoke(successResponse());
  });

  it("prevents double-clicking the same plan", async () => {
    let resolveInvoke!: (v: unknown) => void;
    mockInvoke.mockReturnValue(new Promise((r) => (resolveInvoke = r)));

    render(<PricingSection />);
    const buttons = screen.getAllByRole("button", { name: /pre-order now/i });

    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[0]); // second click while loading

    await waitFor(() => expect(mockInvoke).toHaveBeenCalledTimes(1));

    resolveInvoke(successResponse());
  });
});

// ---------------------------------------------------------------------------
// Non-happy paths
// ---------------------------------------------------------------------------

describe("PricingSection — non-happy paths", () => {
  it("shows error toast when invoke returns an error object", async () => {
    mockInvoke.mockResolvedValue(errorResponse("Stripe unavailable"));
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith("Stripe unavailable");
    });
  });

  it("shows 'Failed to create checkout' when URL is missing from response", async () => {
    mockInvoke.mockResolvedValue(noUrlResponse());
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith("Failed to create checkout");
    });
  });

  it("shows error toast when invoke throws a network error", async () => {
    mockInvoke.mockRejectedValue(new Error("Failed to fetch"));
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith("Failed to fetch");
    });
  });

  it("shows generic message for non-Error thrown values", async () => {
    mockInvoke.mockRejectedValue("unexpected string error");
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith("Something went wrong");
    });
  });

  it("does not redirect on error", async () => {
    mockInvoke.mockResolvedValue(errorResponse("Bad request"));
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() => expect(mockToastError).toHaveBeenCalled());
    expect(window.location.href).toBe("");
  });

  it("re-enables all buttons after an error so the user can retry", async () => {
    mockInvoke.mockResolvedValue(errorResponse("Timeout"));
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);

    await waitFor(() => {
      screen
        .getAllByRole("button", { name: /pre-order now/i })
        .forEach((btn) => expect(btn).not.toBeDisabled());
    });
  });

  it("shows error toast for each failed plan independently", async () => {
    mockInvoke.mockResolvedValue(errorResponse("Error"));
    render(<PricingSection />);

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[0]);
    await waitFor(() => expect(mockToastError).toHaveBeenCalledTimes(1));

    await userEvent.click(screen.getAllByRole("button", { name: /pre-order now/i })[2]);
    await waitFor(() => expect(mockToastError).toHaveBeenCalledTimes(2));
  });
});

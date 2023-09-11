"use client";

import { useState, useCallback } from "react";

export default function ConvertKitForm() {
  const onSubmit = useCallback(async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      await fetch(`/api/convert-kit/subscribe`, {
        method: "POST",
        body: JSON.stringify({
          formId: "5591074",
          email,
        }),
      });

      alert("Success! Check your email to confirm your subscription.");
    } catch {
      alert("Error subscribing. Please try again.");
    }
  }, []);

  return (
    <div className="flex flex-col w-full p-10 bg-white content-center">
      <p className="">Subscribe to our newsletter to receive updates</p>
      <form className="flex max-w-2xl" onSubmit={onSubmit}>
        <input
          id="email"
          type="email"
          className="mr-4 border rounded bg-white w-full py-2 px-3 focus:outline-none focus:shadow-outline focus:border-red-600"
          aria-label="Your email address"
          placeholder="your@email.com"
          required
        />
        <button className="btn bg-red-600 text-white">Sign up</button>
      </form>
    </div>
  );
}

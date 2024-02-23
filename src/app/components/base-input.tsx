"use client";

import { OTPInput } from "input-otp";
import { cn } from "../lib/utils";
import { useState } from "react";
import Footer from "./FooterComponent";

export function BaseOTPInput(
  overrideProps: Partial<React.ComponentProps<typeof OTPInput>> = {}
) {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const status :Boolean  =  true
  return (
   <div className="flex  flex-col gap-4 items-center justify-center h-full w-full">
     <OTPInput
      data-testid="input-otp-wrapper"
      value={value}
      onChange={setValue}
      disabled={disabled}
      containerClassName={cn("group flex items-center", {
        "opacity-50": disabled,
      })}
      maxLength={6}
      render={({ slots, isFocused, isHovering }) => (
        <div
          className={cn("flex items-center gap-1", {
            "opacity-50": overrideProps.disabled ?? disabled,
          })}
          data-testid="input-otp-renderer"
          data-test-render-is-hovering={isHovering ? "true" : undefined}
          data-test-render-is-focused={isFocused ? "true" : undefined}
        >
          {slots.map((slot, idx) => (
            <div
              data-testid={`slot-${idx}`}
              data-test-char={slot.char ?? undefined}
              key={idx}
              className={cn(
                "transition-all duration-300 rounded-md border-gray-500 bg-white text-black w-14 h-20 border-2 bg-transparent text-3xl flex items-center justify-center font-bold",
                {
                  "border-blue-500": isFocused,
                  "border-red-500": slot.isActive,
                }
              )}
            >
              {slot.char !== null ? slot.char : " "}
            </div>
          ))}
        </div>
      )}
      {...overrideProps}
    />
    <pre>
      
    </pre>
    <Footer/>
   </div>
  );
}

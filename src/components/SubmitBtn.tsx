"use client";

import React, { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type SubmitBtnProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function SubmitBtn({ children, className, ...props }: SubmitBtnProps) {
  
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={`btn btn-info btn-block ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-infinity" />}
      {children}
    </button>
  );
}

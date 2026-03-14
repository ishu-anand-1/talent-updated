import React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";
import { cn } from "../../utils/cn";

export function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return (
    <OTPInput
      containerClassName={cn(
        "flex items-center gap-2",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

export function InputOTPGroup({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

export function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const slot = inputOTPContext?.slots[index];

  const char = slot?.char;
  const isActive = slot?.isActive;
  const hasFakeCaret = slot?.hasFakeCaret;

  return (
    <div
      data-active={isActive}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border text-sm",
        "first:rounded-l-md last:rounded-r-md",
        isActive && "ring-2 ring-blue-500",
        className
      )}
      {...props}
    >
      {char}

      {hasFakeCaret && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-4 w-[1px] bg-black animate-pulse" />
        </div>
      )}
    </div>
  );
}

export function InputOTPSeparator(props) {
  return (
    <div role="separator" {...props}>
      <Minus size={16} />
    </div>
  );
}
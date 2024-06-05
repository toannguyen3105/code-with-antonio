import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const convertAmountFromMiliunits = (amount: number) => {
  return amount / 1000;
};

const convertAmountToMiliunits = (amount: number) => {
  return Math.round(amount * 1000);
};

export { cn, convertAmountFromMiliunits, convertAmountToMiliunits };

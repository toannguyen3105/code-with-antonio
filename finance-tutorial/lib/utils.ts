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

const formatCurrency = (value: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
};

export {
  cn,
  convertAmountFromMiliunits,
  convertAmountToMiliunits,
  formatCurrency
};


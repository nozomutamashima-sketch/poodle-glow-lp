"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
    value?: string;
    onValueChange: (value: string) => void;
}>({
    value: undefined,
    onValueChange: () => { },
});

export const Accordion = ({
    children,
    type = "single",
    collapsible = false,
    className,
    ...props
}: {
    children: React.ReactNode;
    type?: "single" | "multiple";
    collapsible?: boolean;
    className?: string;
}) => {
    const [value, setValue] = React.useState<string>("");

    const handleValueChange = (newValue: string) => {
        setValue(newValue === value && collapsible ? "" : newValue);
    };

    return (
        <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
            <div className={cn("space-y-1", className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

export const AccordionItem = ({
    children,
    value,
    className,
}: {
    children: React.ReactNode;
    value: string;
    className?: string;
}) => {
    return (
        <div className={cn("border-b", className)} data-value={value}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<{ itemValue: string }>, { itemValue: value });
                }
                return child;
            })}
        </div>
    );
};

export const AccordionTrigger = ({
    children,
    className,
    itemValue,
}: {
    children: React.ReactNode;
    className?: string;
    itemValue?: string;
}) => {
    const { value, onValueChange } = React.useContext(AccordionContext);
    const isOpen = value === itemValue;

    return (
        <button
            onClick={() => itemValue && onValueChange(itemValue)}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                className
            )}
            data-state={isOpen ? "open" : "closed"}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
    );
};

export const AccordionContent = ({
    children,
    className,
    itemValue,
}: {
    children: React.ReactNode;
    className?: string;
    itemValue?: string;
}) => {
    const { value } = React.useContext(AccordionContext);
    const isOpen = value === itemValue;

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                >
                    <div className={cn("pb-4 pt-0", className)}>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

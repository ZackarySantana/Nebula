import { VariantProps, cva } from "class-variance-authority";
import { JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { cn } from "./cn";

export interface TextProps
    extends JSX.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof variants> {}

export function Text(props: TextProps) {
    const [, rest] = splitProps(props, ["class", "variant", "as"]);

    return (
        <Dynamic
            component={props.as ?? "p"}
            class={cn(
                variants({ as: props.as, variant: props.variant }),
                props.class,
            )}
            {...rest}
        />
    );
}

const variants = cva("", {
    variants: {
        as: {
            h1: "text-4xl font-bold",
            h2: "text-2xl font-bold",
            h4: "text-lg font-bold",
            p: "",
        },
        variant: {
            default: "",
            error: "text-error text-sm italic",
        },
    },
    defaultVariants: {
        as: "p",
        variant: "default",
    },
});

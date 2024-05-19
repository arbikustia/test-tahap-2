import { IconVariant } from "@/Lib/Variants/Icon.variants";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<SVGSVGElement>, VariantProps<typeof IconVariant> {}

import { HTMLAttributes, ElementType } from "react";
import { AnimatedProps } from "./animation";
import { BackgroundColorProps, ColorProps } from "./colors";
import { FontWeightProps } from "./font-weight";
import { PositionProps } from "./position";
import { ResponsiveProps } from "./responsive";
import { ScreenProps } from "./screen";
import { isSizedProps, SizeProps } from "./size";
import { StyleOrStateProps } from "./status";
import { HasTextProps, TextHelpersProps } from "./text";

export interface BulmaProps<T>
  extends HTMLAttributes<T>,
    AnimatedProps,
    BackgroundColorProps,
    ColorProps,
    FontWeightProps,
    HasTextProps,
    isSizedProps,
    PositionProps,
    ResponsiveProps,
    ScreenProps,
    SizeProps,
    StyleOrStateProps,
    TextHelpersProps {

}
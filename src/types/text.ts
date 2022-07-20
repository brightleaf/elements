export interface TextHelpersProps {
  isClearfix?: boolean
  isPulledLeft?: boolean
  isPulledRight?: boolean
  isMarginless?: boolean
  isPaddingless?: boolean
  isOverlay?: boolean
  isClipped?: boolean
  isRadiusless?: boolean
  isShadowless?: boolean
  isUnselectable?: boolean
  isInvisible?: boolean
  isHidden?: boolean
  isScreenReaderOnly?: boolean
  isRelative?: boolean
  isCentered?: boolean
}

export interface HasTextProps  {
    hasTextWhite?: boolean
    hasTextBlack?: boolean
    hasTextLight?: boolean
    hasTextDark?: boolean
    hasTextPrimary?: boolean
    hasTextInfo?: boolean
    hasTextLink?: boolean
    hasTextSuccess?: boolean
    hasTextWarning?: boolean
    hasTextDanger?: boolean
    hasTextBlackBis?: boolean
    hasTextBlackTer?: boolean
    hasTextGreyDarker?: boolean
    hasTextGreyDark?: boolean
    hasTextGrey?: boolean
    hasTextGreyLight?: boolean
    hasTextGreyLighter?: boolean
    hasTextWhiteTer?: boolean
    hasTextWhiteBis?: boolean
    hasTextCentered?: boolean
  }

  export interface TextWeightProps  {
    hasTextWeightLight?: boolean
    hasTextWeightNormal?: boolean
    hasTextWeightMedium?: boolean
    hasTextWeightSemiBold?: boolean
    hasTextWeightBold?: boolean
  }
  interface TextSize1 {
    isSize1: boolean
    isSize2?: never
    isSize3?: never
    isSize4?: never
    isSize5?: never
    isSize6?: never
    isSize7?: never
  }
  interface TextSize2 {
    isSize1?: never
    isSize2: boolean
    isSize3?: never
    isSize4?: never
    isSize5?: never
    isSize6?: never
    isSize7?: never
  }

  interface TextSize3 {
    isSize1?: never
    isSize2?: never
    isSize3: boolean
    isSize4?: never
    isSize5?: never
    isSize6?: never
    isSize7?: never
  }
  interface TextSize4 {
    isSize1?: never
    isSize2?: never
    isSize3?: never
    isSize4: boolean
    isSize5?: never
    isSize6?: never
    isSize7?: never
  }
  interface TextSize5 {
    isSize1?: never
    isSize2?: never
    isSize3?: never
    isSize4?: never
    isSize5: boolean
    isSize6?: never
    isSize7?: never
  }
  interface TextSize6 {
    isSize1?: never
    isSize2?: never
    isSize3?: never
    isSize4?: never
    isSize5?: never
    isSize6: boolean
    isSize7?: never
  }

  interface TextSize7 {
    isSize1?: never
    isSize2?: never
    isSize3?: never
    isSize4?: never
    isSize5?: never
    isSize6?: never
    isSize7: boolean
  }

  export type TextSizesProps = TextSize1 | TextSize2 | TextSize3 | TextSize4 | TextSize5 | TextSize6 | TextSize7
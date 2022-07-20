export interface ButtonProps {
    isAnchor?: boolean
    isSubmit?: boolean
    isReset?: boolean
    isHovered?: boolean
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  }
  
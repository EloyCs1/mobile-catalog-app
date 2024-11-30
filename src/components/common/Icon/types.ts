export enum IconName {
  MBST_LOGO,
  BAG_ACTIVE,
  BAG_INACTIVE,
}

export interface IconProps {
  testId?: string;
  name: IconName;
  width?: number;
  height?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type TitleType = {
  id?: string;
  title?: string;
};

export type DescType = {
  id?: string;
  desc?: string;
};

export interface BaseProps {
  size?: string;
  role?: string;
  color?: string;
  variation?: "solid" | "outline";
  strokeWidth?: string;
  withEvents?: boolean;
  onclick?: (event: MouseEvent) => void;
  onkeydown?: (event: KeyboardEvent) => void;
  onkeyup?: (event: KeyboardEvent) => void;
  class?: string;
}

export interface CtxType extends BaseProps {}

export interface Props extends BaseProps{
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
}
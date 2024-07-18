import type { SVGAttributes } from 'svelte/elements';
export type TitleType = {
  id?: string;
  title?: string;
};
export type DescType = {
  id?: string;
  desc?: string;
};
export interface BaseProps extends SVGAttributes<SVGElement>{
  size?: string;
  role?: string;
  color?: string;
  variation?: "solid" | "outline";
  strokeWidth?: string;
}

export interface CtxType extends BaseProps {}

export interface Props extends BaseProps{
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
}
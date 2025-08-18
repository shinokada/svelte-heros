import type { Component } from 'svelte';
import { type ListType, sidebarList } from 'runes-webkit';
import { ExpandOutline, CogOutline, GridPlusOutline } from 'runes-webkit';

const extra: ListType[] = [
  {
    name: 'Outline',
    Icon: ExpandOutline as Component,
    href: '/outline'
  },
  {
    name: 'Solid',
    Icon: CogOutline as Component,
    href: '/solid'
  },
  {
    name: 'Icon sets',
    Icon: GridPlusOutline as Component,
    href: 'https://svelte-svg-icons.codewithshin.com/'
  }
];

export const newSidebarList: ListType[] = [
  ...(Array.isArray(sidebarList) ? sidebarList : []),
  ...extra
];

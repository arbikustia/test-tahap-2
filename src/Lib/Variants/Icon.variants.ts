import { cva } from "class-variance-authority";

export const IconVariant = cva('', {
  variants: {
    mode: {
      success: 'fill-green-500',
      danger: 'fill-red-500',
      info: 'fill-blue-500',
      warning: 'fill-yellow-600 dark:fill-yellow-500',
      default: 'fill-grey-500 dark:fill-white-800'
    },
    strokeMode: {
      success: 'stroke-green-500',
      danger: 'stroke-red-500',
      info: 'stroke-blue-500',
      warning: 'stroke-yellow-600 dark:stroke-yellow-500',
      default: 'stroke-grey-500 dark:stroke-white-200'
    }
  }
});

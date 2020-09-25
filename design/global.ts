export const colors = {
  text: ['text-gray-900', 'text-gray-700', 'text-gray-600', 'text-gray-500'],
  background: ['bg-white', 'bg-gray-100', 'bg-gray-200'],
} as const;

export const border = 'border border-gray-300' as const;

export const borderRadius = 'rounded-lg' as const;

export const spacing = {
  button: 'px-4 py-1',
  textInput: 'px-2 py-1',
  container: 'p-4',
} as const;

export const focus = {
  default: 'focus:outline-none focus:shadow-focus-neutral focus:border-blue-500',
  variants: {
    error: 'focus:outline-none focus:shadow-focus-error focus:border-red-500',
    success: 'focus:outline-none focus:shadow-focus-success focus:border-green-500',
  },
} as const;

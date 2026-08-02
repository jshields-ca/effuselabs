import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * tailwind-merge, taught about this project's type scale.
 *
 * WHY THIS IS NOT THE DEFAULT `twMerge`
 *
 * tailwind-merge resolves conflicts by grouping classes and keeping the last
 * one in each group. It knows Tailwind's built-in scale, so `text-sm` is a
 * font-size and `text-red-500` is a colour, and both survive a merge.
 *
 * It does not know ours. `text-h1`, `text-body-lg` and `text-eyebrow` are
 * custom `fontSize` keys, and with no rule saying otherwise tailwind-merge
 * files them under text-*colour*. Two "colours" in one class string means the
 * earlier one loses:
 *
 *   twMerge('text-effuse-off-black', 'text-body-lg')  =>  'text-body-lg'
 *   twMerge('text-effuse-white',     'text-h2')       =>  'text-h2'
 *   twMerge('text-effuse-off-black', 'text-sm')       =>  both kept
 *
 * The consequence shipped to a preview build: `Button`'s primary variant sets
 * `bg-effuse-gold text-effuse-off-black`, and its `lg` size sets
 * `text-body-lg`. The colour was silently stripped, the button inherited light
 * grey from its section, and every primary call to action rendered near-white
 * text on gold — about 1.6:1, unreadable.
 *
 * Registering the scale as font-sizes fixes it everywhere at once. Anything
 * added to `typeScale` in lib/design/tokens.ts must be added here too, or it
 * will start eating colours the same way.
 *
 * `check:tokens` passed throughout, and was not wrong: it verifies the contrast
 * of pairs we *declare*, and the declared pair was correct. What broke was
 * which classes survived to the browser — which is why there is now a check
 * that reads contrast off the rendered page.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display',
            'h1',
            'h2',
            'h3',
            'h4',
            'body-lg',
            'body',
            'body-sm',
            'eyebrow',
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

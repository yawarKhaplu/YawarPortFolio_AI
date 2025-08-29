'use server';

/**
 * @fileOverview Provides AI-powered theme customization suggestions while respecting accessibility contrast rules.
 *
 * - suggestThemeColors - A function that generates theme color suggestions.
 * - ThemeCustomizationInput - The input type for the suggestThemeColors function, defining the user's color preferences.
 * - ThemeCustomizationOutput - The return type for the suggestThemeColors function, providing a palette of suggested colors.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ThemeCustomizationInputSchema = z.object({
  baseColor: z.string().describe('The user-selected base color in hex format, e.g., #RRGGBB.'),
});
export type ThemeCustomizationInput = z.infer<typeof ThemeCustomizationInputSchema>;

const ThemeCustomizationOutputSchema = z.object({
  suggestedPalette: z
    .array(z.string())
    .describe('An array of suggested color hex codes that complement the base color and ensure accessibility.'),
});
export type ThemeCustomizationOutput = z.infer<typeof ThemeCustomizationOutputSchema>;

export async function suggestThemeColors(input: ThemeCustomizationInput): Promise<ThemeCustomizationOutput> {
  return themeCustomizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'themeCustomizationPrompt',
  input: {schema: ThemeCustomizationInputSchema},
  output: {schema: ThemeCustomizationOutputSchema},
  prompt: `You are an expert UI/UX designer specializing in color accessibility.

The user has chosen the following base color: {{{baseColor}}}.

Suggest a color palette of 5 color hex codes that complement the base color and ensures sufficient contrast for readability, especially for text elements. The palette should include lighter and darker variations suitable for backgrounds, text, and accent elements. Always ensure the color suggestions are valid hex codes.

Return an array of hex codes that will serve as the suggested color palette.

Example:
{
  "suggestedPalette": ["#FFFFFF", "#F0F0F0", "#DDDDDD", "#333333", "#000000"]
}
`,
});

const themeCustomizationFlow = ai.defineFlow(
  {
    name: 'themeCustomizationFlow',
    inputSchema: ThemeCustomizationInputSchema,
    outputSchema: ThemeCustomizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

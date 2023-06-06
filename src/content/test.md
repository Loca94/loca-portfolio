---
title: Theming
description: Use CSS Variables to customize the look and feel of your application.
---

We use CSS variables for styling. This allows you to easily change the colors of components without having to update class names.

**CSS variables must be defined without the color space function**. See the [Tailwind CSS documentation](https://tailwindcss.com/docs/customizing-colors#using-css-variables) for more information.

## Hex -> Color Channel

You can use this tool to convert your HEX color to HSL without the color space function. Simply add your color in hex format, copy one of the generated values, then add them to the CSS variable.

## Convention

We use a simple `background` and `foreground` convention for colors. The `background` variable is used for the background color of the component and the `foreground` variable is used for the text color.

The `background` suffix can be omitted if the variable is used for the background color of the component.

Given the following CSS variables:

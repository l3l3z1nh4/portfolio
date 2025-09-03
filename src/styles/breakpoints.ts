const size = {
  mobile: '784px',
  desktop: '785px',
  smartphone: '500px'
};

export const breakpoint = {
  mobile: `@media (max-width: ${size.mobile})`,
  desktop: `@media (min-width: ${size.desktop})`,
  smartphone: `@media (max-width: ${size.smartphone})`
};
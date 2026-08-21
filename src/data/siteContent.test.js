import { navigation, routeMetadata, siteConfig } from './siteContent';

test('navigation paths are unique and have metadata', () => {
  const paths = [...navigation.primary, ...navigation.divisions].map(({ path }) => path);

  expect(new Set(paths).size).toBe(paths.length);
  paths.forEach((path) => expect(routeMetadata[path]).toBeDefined());
});

test('public organisation details are production ready', () => {
  expect(siteConfig.siteUrl).toMatch(/^https:\/\//);
  expect(siteConfig.email).toMatch(/@lkic\.africa$/);
  expect(siteConfig.name).toContain('Lenny Kivuti');
});

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Más Salud',
  description: 'Más Salud.',
  queries: {
    defaultLimit: 15,
    modalLimit: 5,
    defaultPage: 1,
    defaultSort: 'id',
    defaultOrder: 'asc',
  },
  links: {
    github: 'https://github.com/heroui-inc/heroui',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};

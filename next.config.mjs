import withNextra from 'nextra';
/**
 * @type {import('next').NextConfig}
 */
const nextConfig= {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',

};
 
export default withNextra(nextConfig)
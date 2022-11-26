const isLocal = process.env.NODE_ENV !== 'production';
const sitePrefix = isLocal ? process.env.PUBLIC_URL : '';

export { isLocal, sitePrefix }
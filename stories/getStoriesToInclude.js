export default function() {
  if (process.env.NODE_ENV === 'test') {
    return {
      excludeStories: ['Secondary']
    };
  }
  return {};
}
/**
 * Common utility functions for formatting and calculations
 */

/**
 * Formats duration in seconds to a human-readable mm:ss format
 */
export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const paddedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
  return `${minutes}:${paddedSeconds}`;
}

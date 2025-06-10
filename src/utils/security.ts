
/**
 * Security utilities for input sanitization and protection
 */

// Basic HTML entity encoding to prevent XSS
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

// Validate search input
export const validateSearchInput = (input: string): boolean => {
  if (typeof input !== 'string') return false;
  
  // Allow alphanumeric, spaces, common punctuation, and Turkish characters
  const allowedPattern = /^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9\s\-_.,!?()]+$/;
  
  return input.length <= 100 && allowedPattern.test(input);
};

// Clean and validate search term
export const sanitizeSearchTerm = (searchTerm: string): string => {
  if (!validateSearchInput(searchTerm)) {
    return '';
  }
  
  return sanitizeInput(searchTerm);
};

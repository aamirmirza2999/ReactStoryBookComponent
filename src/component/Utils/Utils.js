// Define all color constants in a central place
const Colors = {
    defaultText: '#000000',
    ghostText: '#76767699',
    errorText: '#A8000B',
    disabledText: '#999999',
    borderDefault: '#D7D8D6',
    borderError: '#A8000B',
    borderActive:'#767676',
    backgroundDisabled: '#f0f0f0',
    borderFilled: '#767676',
  };
  
  // Helper function to get placeholder color based on state
  export const getPlaceholderColor = (state, error, disabled, value) => {
    if (disabled) return Colors.disabledText;
    if (error) return Colors.errorText;
    if (state === 'ghost' && value === '') return Colors.borderFilled;
    return Colors.defaultText;
  };
  
  // Helper function to get font weight based on state
  export const getFontWeight = (state, value, error) => {
    if (error || (state === 'filled' && value !== '')) return 'bold';
    return 'regular';
  };
  
  // Helper function to get border color based on state
  export const getBorderColor = (error, disabled, value) => {
    if (disabled) return Colors.borderDefault;
    if (error) return Colors.borderError;
    return value === '' ? Colors.borderActive : Colors.borderDefault;
  };
  
  // Helper function to get background color for disabled state
  export const getBackgroundColor = (disabled) => {
    return disabled ? Colors.backgroundDisabled : 'white';
  };
  
  // Helper function for text opacity (optional)
  export const getTextOpacity = (disabled) => {
    return disabled ? 0.5 : 1;
  };

  export const InputSizes = {
    small: {
      fontSize: '14px',
    },
    medium: {
      fontSize: '16px',
    },
    mediumlarge: {
      fontSize: '18px',
    },
    large: {
      fontSize: '20px',
    },
  };
  
  
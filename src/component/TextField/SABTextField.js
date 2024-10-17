import React, { useState } from 'react';
import { getBorderColor, getBackgroundColor,getFontWeight,getPlaceholderColor,getTextOpacity, InputSizes } from '../Utils/Utils'
import './SABTextField.css';

const SABTextField = ({ label, placeholder,helperText, value, onChange, error, disabled,isArabic, theme }) => {
  const [isActive, setIsActive] = useState(false);
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);
  const currentState = isActive ? 'active' : value ? 'filled' : 'default';
  const inputColor = theme === 'dark' ? '#ffffff' : '#000000';
  const labelColor = disabled ? '#999' : error ? '#A8000B' : theme === 'dark' ? '#ffffff' : '#666';
  const backgroundColor = theme === 'dark' ? '#333' : '#fff';
  return (
    <div className="container" dir={isArabic ? 'rtl' : 'ltr'} style={{ backgroundColor }} >
      {label &&  <label
          style={{
            color: labelColor,
            textAlign: isArabic ? 'right' : 'left',
          }}
        >
          {label}
        </label>}
        <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        style={{
          ...InputSizes.medium,
          borderColor: getBorderColor(error, disabled, value), // Use utility for border color
          backgroundColor: getBackgroundColor(disabled), // Use utility for background color
          color: getPlaceholderColor(currentState, error, disabled, value), // Use utility for placeholder color
          fontWeight: getFontWeight(currentState, value, error), // Use utility for font weight
          opacity: getTextOpacity(disabled), // Use utility for text opacity
          textAlign: isArabic ? 'right' : 'left',
        }}
        className={`input placeholder-${error ? 'error' : isActive ? 'active' : 'default'}`}
        placeholder={isActive && value === '' ? ' ' : placeholder}
      />
     
      {helperText && (
        <div className="helperTextContainer">
        <p style={{
            color: error ? '#A8000B' : '#666',
            fontFamily: 'Univers Next for HSBC',
            fontSize: 'var(--fontSize-Small)',
            fontWeight: 400,
            lineHeight: 'var(--lineHeight-Small)',
            textAlign: isArabic ? 'left' : 'right',
            margin: 0,
          }}>
          {'Default'}
        </p>
      </div>
      )}
    </div>
  );
};

export default SABTextField;

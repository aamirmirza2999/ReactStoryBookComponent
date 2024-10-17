import React, { useState } from 'react';
import './DumyComponent.css';
import ArrowIcon from '../assests/icon/chevron/right.svg';

const DumyComponent = ({
    label,
    placeholder,
    helperText,
    value,
    onChange,
    error,
    disabled,
    hideLinkButton,
    link = { text: 'Link Here', iconRight: false, iconLeft: false, type: 'default', size: 'medium' }, // Default values
}) => {
    const [isActive, setIsActive] = useState(false);
    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(false);
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        console.log(newValue); // Log the new value to the console
        if (onChange) {
            onChange(newValue); // Call the original onChange function if provided
        }
    };
    const currentState = disabled
        ? 'disabled'
        : error
            ? 'error'
            : isActive
                ? 'active'
                : value
                    ? 'filled'
                    : 'default';

    // Define style changes based on the input state
    const getStylesByState = (state) => {
        switch (state) {
            case 'active':
                return {
                    borderColor: '#767676',
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000',
                    fontWeight: 'regular',
                };
            case 'filled':
                return {
                    borderColor: '#D7D8D6',
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000',
                    fontWeight: 'bold',
                };
            case 'error':
                return {
                    borderColor: '#E5B2B5',
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000',
                    fontWeight: 'regular',
                };
            case 'fetched':
                return {
                    borderColor: '',
                    backgroundColor: '#EEEEEE',
                    textColor: '#000000',
                    fontWeight: 'bold',
                };
            case 'disabled':
                return {
                    borderColor: '#D3D3D3',
                    backgroundColor: '#EEEEEE',
                    textColor: '#808080',
                    fontWeight: 'bold',
                };
            default:
                return {
                    borderColor: '#D7D8D6',
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000',
                    fontWeight: 'regular',
                };
        }
    };

    const { borderColor, backgroundColor, textColor, fontWeight } = getStylesByState(currentState);

    const getLinkStyles = (type) => {
        switch (type) {
            case 'active':
                return {
                    color: '#FF0000', // Red color for active link
                    fontWeight: 'bold', // Bold weight for active link
                };
            case 'inactive':
                return {
                    color: '#666', // Black color for inactive link
                    fontWeight: 'bold', // Regular weight for inactive link
                };
            default:
                return {
                    color: '#808080', // Grey color for default link
                    fontWeight: 'normal', // Regular weight for default link
                };
        }
    };

    const { color: linkTextColor, fontWeight: linkFontWeight } = getLinkStyles(link.type);

    const linkSizeStyles = {
        small: { fontSize: '12px' },
        medium: { fontSize: '14px' },
        large: { fontSize: '16px' },
    }[link.size];

    return (
        <div className="container">
            {label && <label style={{ color: error ? '#A8000B' : '#000000' }}>{label}</label>}
            <div className="inputWrapper" style={{ borderColor, backgroundColor }}>
                <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    placeholder={placeholder}
                    style={{ color: textColor, fontWeight: fontWeight, border: 'none', backgroundColor: 'transparent', outline: 'none' }} 
                />
                {hideLinkButton && (
                    <div className="linkTextWrapper" style={{ color: linkTextColor, ...linkSizeStyles, fontWeight: linkFontWeight }}>
                        {link.iconLeft && !['active', 'inactive'].includes(link.type) && (
                            <img src={ArrowIcon} alt="Arrow icon" className="arrow-icon" />
                        )}
                        {link.text}
                        {link.iconRight && !['active', 'inactive'].includes(link.type) && (
                            <img src={ArrowIcon} alt="Arrow icon" className="arrow-icon" />
                        )}
                    </div>
                )}
            </div>
            {helperText && (
                <div className="helperTextContainer">
                    <p style={{ color: error ? '#A8000B' : '#666', textAlign: 'right', margin: '0' }}>
                        {helperText}
                    </p>
                </div>
            )}
        </div>
    );
};

export default DumyComponent;

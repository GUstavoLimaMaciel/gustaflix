import React from 'react';


function FormField ({value, onChange, name, type, label}){
    return (
        <div>
          <label>
            {label}
            {type !== 'textarea' && (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={(onChange)}
                />
            )}
            {type === 'textarea' && (
                <textarea
                    type={type}
                    name={name}
                    value={value}
                    onChange={(onChange)}
              />
            )}
          </label>
        </div>
    );
}

export default FormField;
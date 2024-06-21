import { useState } from 'react';
import styles from './ColorPicker.module.css';

export default function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className={styles.colorPickerContainer}>
            <h1>Color Picker</h1>
            <div className={styles.colorDisplay} style={{backgroundColor: color}}>
                <p className={styles.colorP}>Selected Color: {color}</p>
            </div>
            <label className={styles.colorLabel}>Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}
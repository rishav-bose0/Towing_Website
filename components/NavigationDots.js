// components/NavigationDots.jsx
import styles from './BlogSlider.module.css';

const NavigationDots = ({ count, activeIndex, onClick }) => {
    return (
        <div className={styles.navigationDots}>
            {[...Array(count)].map((_, index) => (
                <input
                    key={index}
                    type="radio"
                    name="dot"
                    className={styles.dot}
                    checked={activeIndex === index}
                    onChange={() => onClick(index)}
                />
            ))}
        </div>
    );
};

export default NavigationDots;

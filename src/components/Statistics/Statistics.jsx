import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  function extToColor(ext) {
    let color = '';
    for (let i = 0; i < 3; i++) {
      color += Math.floor((255 / 74) * (ext.charCodeAt(i) - 48)).toString(16).padStart(2, '0');
    }
    return color;
  }
  // function extToColor(ext) {
  //   return parseInt(ext, 36).toString(16).padStart(6, '0');
  // }
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(item => (
          <li key={item.id} className={s.item} style={{ backgroundColor: `#${extToColor(item.label.slice(1))}` }}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
}

export default Statistics

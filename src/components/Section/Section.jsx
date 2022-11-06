import PropTypes from 'prop-types';
import style from './Section.module.css';

const Section = ({ title, children }) => {
    return (
    <section className={style.section}>
      <h2 className={style.title}>{title}</h2>
      <>{children}</>
    </section>
  )};

  export default Section;

  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
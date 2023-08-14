import clsx from "clsx";
import css from "./Alert.module.css";
import PropTypes from "prop-types";

// export default function Alert({ children, variant, outlined, elevated}) {
// const alertClasses = [variant, 'alert']
//     if (outlined) alertClasses.push('is-outlined');
//     if (elevated) alertClasses.push('is-elevated');
//     console.log(alertClasses)
// console.log(alertClasses.join(' '))
//   return <p className={alertClasses.join(' ')} >{children}</p>;
// }
export default function Alert({ children, variant, outlined, elevated }) {
  return (
    <p
      className={clsx(css[variant],
        {
           [css.isOutlined]: outlined,
           [css.isElevated]: elevated, 
        })}
    >
      {children}
    </p>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string.isRequired,
  outlined: PropTypes.bool,
  elevated: PropTypes.bool,
};

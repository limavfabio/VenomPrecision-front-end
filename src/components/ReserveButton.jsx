import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

function ReserveButton({ className, product }) {
  return (

    <Link to={`/products/${product.id}/reservation`} state={{ data: product }}>
      <button
        type="button"
        className={`flex w-min float-right items-center gap-2  rounded-full bg-[#97BF0F] p-3 font-bold text-white ${className}`}
      >
        <Cog6ToothIcon className="h-8" />
        <span className="mx-3">Reserve</span>
        <IoIosArrowDropright className="text-3xl" />
      </button>
    </Link>
  );
}

ReserveButton.propTypes = {
  className: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    owner_id: PropTypes.number,
    created_at: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    updated_at: PropTypes.string,
  }).isRequired,
};

export default ReserveButton;

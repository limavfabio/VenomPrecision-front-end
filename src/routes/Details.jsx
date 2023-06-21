import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReserveButton from '../components/ReserveButton';
import DetailRow from '../components/DetailRow';
import Header from '../components/layout/Header';
import MobileSidebar from '../components/layout/MobileSidebar';
import Sidebar from '../components/layout/Sidebar';
import { fetchProductWithId } from '../redux/productsSlice';

function Details() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { productId } = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.value);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    dispatch(fetchProductWithId(productId));
  }, [dispatch]);
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex">
        <Sidebar />
        {isSidebarOpen && <MobileSidebar />}
        <div className="flex mt-5 sm:mt-0 flex-col sm:flex-row w-full justify-between items-center">
          {/* Left Side Full Screen Image */}
          <div className="mb-5 sm:mb-0">
            <img
              src={data.image}
              alt={data.name}
            />
          </div>
          {/* Right Side Details Panel */}
          <div className="flex h-full w-full sm:w-1/3 min-w-fit flex-col justify-center px-5 text-end">
            <h2 className="mb-1 text-4xl"> {data.name} </h2>
            <p className="mb-5"> {data.description} </p>
            {/* Table */}
            <div className="mb-5 flex flex-col justify-between">
              <DetailRow
                label="Package price"
                value={data.price}
                isGrayBackground
              />
              <DetailRow label="Date" value={new Date(data.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} />
            </div>
            <p className="flex items-center self-end font-bold">
              DISCOVER MORE MODELS
              {' '}
              <ChevronRightIcon className="h-5 text-[#97BF0F]" />
              {' '}
            </p>
            <ReserveButton className="mt-5" data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

import Footer from '../Footer';

const STLayout = (props) => {
  const { children } = props;

  return (
    <div className='flex flex-col justify-center items-center w-full bg-st-primary'>
        {children}
        <Footer />
    </div>
  );
};

export default STLayout;

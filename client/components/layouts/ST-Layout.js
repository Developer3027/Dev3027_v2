import Footer from '../Footer';

const STLayout = (props) => {
  const { children } = props;

  return (
    <div className='block w-screen bg-st-primary'>
        {children}
        <Footer />
    </div>
  );
};

export default STLayout;

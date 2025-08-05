import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Mehedi Hasan - 404 Not Found</title>
      </Helmet>
      <div className=" font-mono hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="bg-base-200 max-w-md border border-primary/30 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default NotFound;

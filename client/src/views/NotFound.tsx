import React from 'react';
import { Link } from 'react-router-dom';

import PBtn from '@/components/base/PBtn';

const NotFound = () => {
  return (
    <div className="mx-4 mt-8">
      <h1 className="text-2xl font-bold tracking-wider">Not Found 404</h1>
      <div className="mt-4">
        <Link to={{ pathname: '/' }}>
          <PBtn className="border-2 border-gray-500 hover:border-gray-600 hover:bg-gray-400">
            Go Home
          </PBtn>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

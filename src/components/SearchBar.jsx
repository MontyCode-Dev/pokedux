import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div class="bg-white p-5 sm:p-10 bg-slate-700">
        <div className="h-full flex items-center justify-center lg:pr-40">
          <div className="relative">
              <div className="text-violet-500 absolute ml-3 inset-0 m-auto w-4 h-4">
                  <BsSearch />
              </div>
              <input className="bg-violet-50 bg-opacity-10 focus:outline-none focus:border-violet-700 lg:w-96 w-72 rounded text-sm text-violet-50 pl-8 py-2 placeholder-violet-50" type="text" placeholder="Encuentra a tu Pokemón favorito" />
          </div>
      </div>
    </div>
  );
};

export default SearchBar;

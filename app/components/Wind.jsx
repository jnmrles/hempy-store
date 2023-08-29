import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';

export default function Wind({products}) {
  return (
    <div class="flex flex-col bg-white m-auto p-auto">
      <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Example
      </h1>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={products}>
            {({products}) => {}}
            <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
              <div class="inline-block px-3">
                <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div class="inline-block px-3">
                <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div class="inline-block px-3">
                <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div class="inline-block px-3">
                <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div class="inline-block px-3">
                <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div class="inline-block px-3">
                <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div class="inline-block px-3">
                <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div class="inline-block px-3">
                <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
            </div>
            ;
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

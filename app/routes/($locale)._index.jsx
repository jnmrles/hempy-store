import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import Hero from '~/components/Hero';
import Features from '~/components/Features';
import Accordion from '~/components/Accordian';
import {motion} from 'framer-motion';

export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({featuredCollection, recommendedProducts});
}

{
  /* <FeaturedCollection collection={data.featuredCollection} /> */
}

export default function Homepage() {
  const data = useLoaderData();
  return (
    <article className="home w-full">
      <Hero />

      <RecommendedProducts products={data.recommendedProducts} />
      {/* <Wind products={data.recommendedProducts} /> */}
      <section className=" dark:bg-[#0B0c10] mt-2">
        <div className="gap-16 items-center py-18 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-300 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark :text-white">
              One Big <span className="text-[#22d3ee]">HEMPY</span> family
            </h2>
            <p className="mb-4 text-lg">
              Cannabis Product description Cannabis Product description Cannabis
              Product description Cannabis Product description Cannabis Product
              description Cannabis Product description Cannabis Product
              description Cannabis Product description Cannabis Product
              description
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            animate={{x: [0, 100, 0]}}
            transition={{duration: 3}}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </motion.div>
        </div>
      </section>
      <Features />
      <Accordion />
    </article>
  );
}

function FeaturedCollection({collection}) {
  const image = collection.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

function RecommendedProducts({products}) {
  return (
    <div className=" lg:mt-20 text-center bg-white text-slate-200">
      <h2 className="text-4xl mb-14">Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="flex overflow-x-scroll p-6 pb-10 hide-scroll-bar mt-4 justify-around">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="
h-[25rem] w-[20rem]  rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 recommended-product border-indigo-500 border-4 flex-col p-8 items-center text-white shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-nowrap  "
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="4/5"
                    sizes="(max-width: 10em)"
                    className="recommended-product "
                  />
                  {/* <img
                    src={product.images.nodes[0].url}
                    className="recommended-product "
                  /> */}
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

function Wind(props) {
  return (
    <div class="flex flex-col bg-white m-auto p-auto">
      <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Example
      </h1>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={props.products}>
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

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 6, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

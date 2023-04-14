import React from "react";
import { Album } from "../models";

type AlbumProps = {
  album: Album;
};

export default function AlbumCard({ album }: AlbumProps) {
  const handleAddToCart = (album: Album) => {};
  return (
    <>
      {album &&
        album.attributes &&
        album.attributes.artists.data.length > 0 && (
          <div className="max-w-sm px-6 pt-6 pb-2 transition duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105">
            <h3 className="mb-3 text-xl font-bold text-indigo-600 uppercase">
              {album.attributes.mood == "chill" && (
                <span className="bg-purple-100 text-purple-800 text-xl font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  Chill
                </span>
              )}
              {album.attributes.mood == "ngau" && (
                <span className="bg-green-100 text-green-800 text-xl font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Ngầu
                </span>
              )}
              {album.attributes.mood == "rau" && (
                <span className="bg-pink-100 text-pink-800 text-xl font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                  Rầu
                </span>
              )}
              {album.attributes.mood == "gat" && (
                <span className="bg-gray-100 text-gray-800 text-xl font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  Gắt
                </span>
              )}
            </h3>
            <div className="relative">
              <img
                className="w-full rounded-xl"
                src={`http://localhost:1337${album.attributes.image.data[0].attributes.url}`}
                alt="Colors"
              />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-center text-gray-800">
              {album.attributes.name}
            </h1>

            <div className="my-4">
              <p className="text-xl text-center">
                {album.attributes.artists.data[0].attributes.name}
              </p>
              <p className="font-bold text-center">
                {album.attributes.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <button
                onClick={() => handleAddToCart(album)}
                className="w-full py-2 mt-4 text-xl text-black uppercase bg-yellow-300 border border-black shadow-lg"
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
    </>
  );
}

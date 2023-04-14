import AlbumCard from "@/component/Album";
import { Album } from "@/models/album";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";

type PageProp = {
  page: number;
  pageSize: number;
};
export default function AlbumPage(props: any) {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  return (
    <div>
      <Page page={pageIndex} pageSize={pageSize} />
      <button
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
      >
        Previous
      </button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
}

function Page({ page, pageSize }: PageProp) {
  const { data: albumList } = useSWR(
    `/albums?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`
  );
  if (!albumList) return null;
  console.log(albumList);
  return (
    <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
      {albumList.data.map((album: Album) => (
        <AlbumCard key={album.id} album={album}></AlbumCard>
      ))}
    </div>
  );
}

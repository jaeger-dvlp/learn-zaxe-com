import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Images from '@/src/images/Images';
import Content from '@/src/content/Content';
import { getAllPosts } from '@/src/clients';
import { useTranslation } from 'next-i18next';
import PostBlock from '@/src/components/misc/PostBlock';
import NoContent from '@/src/components/misc/NoContent';
import VideoBlock from '@/src/components/misc/VideoBlock';
import { MdArticle, MdVideoLibrary } from 'react-icons/md';
import DownloadBlock from '@/src/components/misc/DownloadBlock';
import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs';
import SearchBar from '@/src/components/categoriespage/SearchBar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Search({ posts: Posts }) {
  const router = useRouter();
  const { t } = useTranslation();
  const [posts] = React.useState(Posts);
  const { q: searchQuery } = router.query;

  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [filteredVideos, setFilteredVideos] = React.useState([]);
  const [filteredDownloads, setFilteredDownloads] = React.useState([]);

  const PostActions = {
    GetQueriedPosts: async ({ queries }) => {
      const queriedPosts = await queries
        .map((query) =>
          posts.filter(({ tags }) =>
            tags.find(
              (tag) =>
                tag.toLowerCase() === query ||
                (query.length > 2 &&
                  tag.length > 2 &&
                  tag.toLowerCase().includes(query))
            )
          )
        )
        .flat();

      return queriedPosts;
    },
    ClearDuplicatedArray: async (DuplicatedArray) => {
      const uniqueArray = [];
      await DuplicatedArray.map((post) => {
        if (uniqueArray.find(({ id }) => id === post.id) === undefined) {
          return uniqueArray.push(post);
        }
        return null;
      });

      return uniqueArray;
    },
    FilterPostsByQuery: async (queries) => {
      const QueriedPosts = await PostActions.GetQueriedPosts({ queries });
      const ClearedPosts = await PostActions.ClearDuplicatedArray(QueriedPosts);
      setFilteredPosts(ClearedPosts);
    },
  };

  const VideoActions = {
    GetVideos: () => {
      const allVideos = Content.productVideos.flat();
      return allVideos;
    },
    ClearDuplicatedArray: (DuplicatedArray) => {
      const uniqueArray = [];
      DuplicatedArray.map((video) => {
        if (uniqueArray.find(({ slug }) => slug === video.slug) === undefined) {
          return uniqueArray.push(video);
        }
        return null;
      });

      return uniqueArray;
    },
    GetQueriedVideos: ({ queries }) => {
      const queriedVideos = queries
        .map((query) =>
          VideoActions.GetVideos().filter(({ tags }) =>
            tags.find(
              (tag) =>
                tag.toLowerCase() === query ||
                (query.length > 2 &&
                  tag.length > 2 &&
                  tag.toLowerCase().includes(query))
            )
          )
        )
        .flat();

      return queriedVideos;
    },
    FilterVideosByQuery: async (queries) => {
      const QueriedVideos = VideoActions.GetQueriedVideos({ queries });
      const ClearedVideos = VideoActions.ClearDuplicatedArray(QueriedVideos);
      setFilteredVideos(ClearedVideos);
    },
  };

  const DownloadsActions = {
    GetDownloads: () => {
      const allDownloads = Content.downloadables;
      return allDownloads;
    },
    ClearDuplicatedArray: (DuplicatedArray) => {
      const uniqueArray = [];
      DuplicatedArray.map((download) => {
        if (
          uniqueArray.find(({ slug }) => slug === download.slug) === undefined
        ) {
          return uniqueArray.push(download);
        }
        return null;
      });

      return uniqueArray;
    },
    GetQueriedDownloads: ({ queries }) => {
      const queriedDownloads = queries
        .map((query) =>
          DownloadsActions.GetDownloads().filter(({ tags }) =>
            tags.find(
              (tag) =>
                tag.toLowerCase() === query ||
                (query.length > 2 &&
                  tag.length > 2 &&
                  tag.toLowerCase().includes(query))
            )
          )
        )
        .flat();

      return queriedDownloads;
    },
    FilterDownloadsByQuery: (queries) => {
      const QueriedDownloads = DownloadsActions.GetQueriedDownloads({
        queries,
      });
      const ClearedDownloads =
        DownloadsActions.ClearDuplicatedArray(QueriedDownloads);
      setFilteredDownloads(ClearedDownloads);
    },
  };

  const FilterContent = () => {
    PostActions.FilterPostsByQuery(searchQuery.toLowerCase().split(' '));
    VideoActions.FilterVideosByQuery(searchQuery.toLowerCase().split(' '));
    DownloadsActions.FilterDownloadsByQuery(
      searchQuery.toLowerCase().split(' ')
    );
  };

  React.useEffect(() => {
    if (searchQuery) {
      FilterContent();
    }
  }, [searchQuery, router]);

  return (
    <>
      <Head>
        <title>{t('meta.title.search')}</title>
        <meta name="description" content={t('meta.content.search')} />
        <meta name="title" content={t('meta.title.search')} />
        <meta
          name="keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta name="description" content={t('meta.content.search')} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://knowledge-base.zaxe.com/search"
        />
        <meta property="og:title" content={t('meta.title.search')} />
        <meta property="og:description" content={t('meta.content.search')} />
        <meta
          property="og:keywords"
          content="Zaxe, Zaxe Knowledge Base, Zaxe 3D, Knowledge, 3D Printer, 3D Printing, Slicer, Filament"
        />
        <meta property="og:image" content={Images.og.home.default.src} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://knowledge-base.zaxe.com/search"
        />
        <meta property="twitter:site" content="@Zaxe3D" />
        <meta property="twitter:site:id" content="@Zaxe3D" />
        <meta property="twitter:creator" content="@Zaxe3D" />
        <meta property="twitter:creator:id" content="@Zaxe3D" />
        <meta property="twitter:title" content={t('meta.title.search')} />
        <meta
          property="twitter:description"
          content={t('meta.content.search')}
        />
        <meta property="twitter:image" content={Images.og.home.default.src} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link
          rel="alternate"
          hrefLang="tr"
          href="https://zaxe-knowledge-base.vercel.app/tr/search"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://zaxe-knowledge-base.vercel.app/en/search"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://zaxe-knowledge-base.vercel.app/search"
        />
      </Head>
      <section className="pt-[20vh] font-zaxe w-full flex flex-wrap justify-center items-start">
        <section className="grid w-full grid-cols-1 p-5 gap-14 max-w-app place-content-start place-items-center">
          <SearchBar className="heading-search-bar" />
          <section className="grid w-full grid-cols-1 pb-10 gap-7 place-content-start place-items-center">
            <h2 className="flex items-center justify-center gap-2 p-1 px-4 text-xl font-semibold text-center text-white shadow-xl shadow-black/30 rounded-xl bg-zaxe">
              <MdArticle />
              <span>{t('common:search.articles')}</span>
            </h2>
            <nav className="relative flex flex-wrap items-center justify-center w-full gap-14">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => {
                  if (post['post-type'] === 'global') {
                    return (
                      <PostBlock
                        key={`post-${post.id}`}
                        props={{
                          type: 'global',
                          postSlug: post.slug,
                          postCategory: post.category,
                          postTitle: { [router.locale]: post.title },
                          postThumbnail: post.thumbnail,
                        }}
                      />
                    );
                  }
                  return (
                    <PostBlock
                      key={`post-${post.id}`}
                      props={{
                        type: 'product',
                        postSlug: post.slug,
                        postCategory: post.category,
                        postTitle: { [router.locale]: post.title },
                        postThumbnail: post.thumbnail,
                        queryProduct: post['product-slug'],
                        queryPCategory: post['product-category'],
                        Categories: Content.products.find(
                          ({ slug }) => slug === post['product-slug']
                        ).content.categories,
                      }}
                    />
                  );
                })
              ) : (
                <NoContent />
              )}
            </nav>
          </section>
          <section className="grid w-full grid-cols-1 pb-10 gap-7 place-content-start place-items-center">
            <h2 className="flex items-center justify-center gap-2 p-1 px-4 text-xl font-semibold text-center text-white shadow-xl shadow-black/30 rounded-xl bg-zaxe">
              <MdVideoLibrary />
              <span>{t('common:search.videos')}</span>
            </h2>
            <nav className="relative flex flex-wrap items-center justify-center w-full gap-14">
              {filteredVideos.length > 0 ? (
                filteredVideos.map(
                  ({ label, slug, product, thumbnail: poster, videoURL }) => (
                    <VideoBlock
                      props={{
                        label,
                        poster,
                        videoURL,
                        productName: Content.products.find(
                          ({ slug: pSlug }) => pSlug === product
                        ).name,
                      }}
                      key={`video-${slug}`}
                    />
                  )
                )
              ) : (
                <NoContent />
              )}
            </nav>
          </section>
          <section className="grid w-full grid-cols-1 pb-10 gap-7 place-content-start place-items-center">
            <h2 className="flex items-center justify-center gap-2 p-1 px-4 text-xl font-semibold text-center text-white shadow-xl shadow-black/30 rounded-xl bg-zaxe">
              <BsFillFileEarmarkArrowDownFill />
              <span>{t('common:search.downloads')}</span>
            </h2>
            <nav className="relative flex flex-wrap items-center justify-center w-full gap-14">
              {filteredDownloads.length > 0 ? (
                filteredDownloads.map((download) => (
                  <DownloadBlock
                    key={`download-${download.slug}`}
                    download={download}
                  />
                ))
              ) : (
                <NoContent />
              )}
            </nav>
          </section>
        </section>
      </section>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, Content.translations)),
    posts: await getAllPosts({ locale }),
  },
});

export default Search;

import React, { FC } from 'react';
import { LastPostPreview } from '@/components/MainPage/LastPostPreview';
import { PostPreview } from '@/components/MainPage/PostPreview';

type Props = {
  previews: PreviewWithID[];
  page: number;
  locale: string;
};

const HomeMain: FC<Props> = ({ previews, page, locale }) => {
  return (
    <main className='loading-animation mx-auto max-w-[85%] font-condensed mb-8'>
      {previews && (
        <>
          {page === 1 && (
            <LastPostPreview
              preview={previews[0].attributes}
              locale={locale}
            />
          )}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:mb-10 max-w-[1224px] mx-auto'>
            {previews.slice(page === 1 ? 1 : 0).map(preview => (
              <PostPreview
                preview={preview.attributes}
                locale={locale}
                key={preview.id}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default HomeMain;

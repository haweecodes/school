import { MetaTag } from '@/constants/types';
import React from 'react';

const MetaTags = ({ metaTags }: {
    metaTags: MetaTag[]
}) => {
    return (
        <>
            {metaTags.map((metaTag: MetaTag, index: number) => (
                <meta
                    key={index}
                    name={metaTag.type === 'name' ? metaTag.meta_name : undefined}
                    property={metaTag.type === 'property' ? metaTag.meta_name : undefined}
                    content={metaTag.meta_value}
                />
            ))}
        </>
    );
};

export default MetaTags;

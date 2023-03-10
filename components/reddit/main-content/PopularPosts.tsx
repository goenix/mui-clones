import React from 'react';
import { Box, Typography } from '@mui/material';

import {
    postSectionWrapper,
    communitiesWrapper,
    postSortWrapper,
    popularPostHeader,
    postSortContainer,
} from '@/styles/reddit/styles';
import { cardContentItems } from '@/data/reddit/app.data';
import PostSort from './PostSort';
import PopularCommunities from './PopularCommunities';
import Policy from './Policy';
import InfoCard from './InfoCard';


const PopularPosts = () => {
    return (
        <React.Fragment>
            <Typography sx={popularPostHeader} variant="h6">
                Popular Posts
            </Typography>
            <Box sx={postSortContainer}>
                <Box sx={postSectionWrapper}>
                    <Box sx={postSortWrapper}>
                        <PostSort />
                    </Box>
                    {cardContentItems.map((item) => {
                        return <InfoCard key={item.id} item={item} /> ;
                    })}
                </Box>
                <Box sx={communitiesWrapper}>
                    <PopularCommunities />
                    <Policy />
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default PopularPosts;

import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImage, ContentContainer, Title, Subtitle } from './menu-item.styles';


const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage className='background-image' imageUrl={imageUrl} />
        <ContentContainer className='content'>
            <Title>{title.toUpperCase()}</Title>
            <Subtitle>SHOP NOW</Subtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);
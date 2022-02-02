import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionPageContainer, Title, Items, CustomCollectionItem } from './collection.styles';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <Title>{ title }</Title>
            <Items>
                {
                    items.map(item => (<CustomCollectionItem key={item.id} item={item} />))
                }
            </Items>
        </CollectionPageContainer>
    )
}

export default CollectionPage;
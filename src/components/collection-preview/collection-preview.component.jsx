import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((_, index) => index < 4)
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionItem key={id} {...otherCollectionProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;

import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="135" cy="136" r="135" />
    <rect x="0" y="305" rx="11" ry="11" width="271" height="25" />
    <rect x="0" y="349" rx="11" ry="11" width="280" height="87" />
    <rect x="0" y="456" rx="5" ry="5" width="95" height="27" />
    <rect x="130" y="442" rx="27" ry="27" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;

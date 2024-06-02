import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const Skeleton = dynamic(() => import('react-skeleton-loader'), { ssr: false });

class SkeletonViewer extends React.PureComponent {

    render() {
        const { size, ...rest } = this.props;
        const skeletonProps = { height: size || '100%', width: size || '100%', widthRandomness: 0, borderRadius: 0, ...rest };
        return <Skeleton {...skeletonProps} />;
    }

}

SkeletonViewer.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    widthRandomness: PropTypes.number,
    heightRandomness: PropTypes.number,
    borderRadius: PropTypes.any,
    color: PropTypes.string,
    count: PropTypes.number,
    duration: PropTypes.number,
    animated: PropTypes.bool,
};

export default SkeletonViewer;
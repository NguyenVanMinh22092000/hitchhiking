const { memo } = require('react');

const fileTypeExts = ['mp4', 'mov', 'avi', 'avchd', 'flv', 'f4v', 'swf', 'mkv', 'mpeg-2', 'webm'];

const VideoViewer = memo(({
    id, srcId, src, name, width, height, autoPlay, controls, playsInline,
    onRef = () => null,
    onEnded = () => null,
    onTimeUpdate = () => null,
}) => {
    let ext = (src || '').split('?')[0].split('.').pop();
    const vProps = {
        id, autoPlay, controls, name, width, height, playsInline,
        onEnded, onTimeUpdate,
        ref: onRef,
    };
    return (
        <video muted={'muted'} {...vProps}>
            <source src={src} type={`video/${fileTypeExts.includes(ext) ? ext : 'mp4'}`} id={srcId} />
        </video>
    )
}, (prevProps, nextProps) => prevProps.src !== nextProps.src);

export default VideoViewer;
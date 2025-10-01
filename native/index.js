import * as React from 'react';
import Svg, { Path, Rect, Circle, G, Defs, ClipPath, LinearGradient, Stop } from 'react-native-svg';

const SvgArrowIcon = (props) => (React.createElement(Svg, { width: 32, height: 32, fill: "none", color: "#010713", viewBox: "0 0 32 32", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M22.998 15.001h-11.86l3.63-4.36a1.002 1.002 0 1 0-1.54-1.28l-5 6a1 1 0 0 0-.09.15c0 .05 0 .08-.07.13a1 1 0 0 0-.07.36 1 1 0 0 0 .07.36c0 .05 0 .08.07.13q.039.078.09.15l5 6a1 1 0 0 0 1.41.13 1 1 0 0 0 .13-1.41l-3.63-4.36h11.86a1 1 0 1 0 0-2" })));

const SvgArrowTriangleIcon = (props) => (React.createElement(Svg, { width: 16, height: 16, fill: "none", color: "#8A95A8", viewBox: "0 0 16 16", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M7.245 5.61a1 1 0 0 1 1.512 0l3.007 3.472a1 1 0 0 1-.756 1.654H4.993a1 1 0 0 1-.756-1.654z" })));

const SvgBasketIcon = (props) => (React.createElement(Svg, { width: 16, height: 16, fill: "none", color: "#8A95A8", viewBox: "0 0 16 16", ...props },
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "M6.9 1.855a1.43 1.43 0 0 1 2.12-.086l.077.086 2.81 3.373h2.134a1.065 1.065 0 0 1 1.061 1.183l-.066.547-.071.53-.059.395-.068.426-.077.446-.087.464-.097.472q-.078.357-.166.714a15 15 0 0 1-.595 1.847l-.158.386-.153.348-.144.31-.068.14-.177.35c-.23.436-.661.693-1.118.73l-.114.005H4.106a1.38 1.38 0 0 1-1.222-.721l-.166-.322-.128-.264-.068-.147-.143-.32a15.4 15.4 0 0 1-.904-2.81l-.101-.463-.091-.453-.08-.439-.072-.42-.062-.395-.053-.367-.064-.488-.047-.398-.012-.109a1.065 1.065 0 0 1 .963-1.172l.097-.005H4.09zm-.359 6.748a.715.715 0 0 0-1.4.233l.008.083.358 2.144.018.082a.715.715 0 0 0 1.4-.233l-.009-.083-.357-2.144zm3.72-.506a.715.715 0 0 0-.805.506l-.018.082-.357 2.144a.715.715 0 0 0 1.392.316l.018-.082.357-2.144a.715.715 0 0 0-.588-.822M7.998 2.77 5.95 5.228h4.096z", clipRule: "evenodd" })));

const SvgBellCroppedIcon = (props) => (React.createElement(Svg, { width: 24, height: 24, fill: "none", color: "#8A95A8", viewBox: "0 0 24 24", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M9.604 23.896c1.721 0 3.161-1.226 3.492-2.852H6.11a3.57 3.57 0 0 0 3.493 2.852M16.804 14.862q-.036.002-.072.004c-4.193 0-7.604-3.412-7.604-7.604a7.55 7.55 0 0 1 1.426-4.415.897.897 0 0 0-.918-.92c-.525 0-.983.608-.983 1.134-3.22.463-5.703 3.232-5.703 6.577v2.65c0 1.88-.824 3.656-2.27 4.879a1.662 1.662 0 0 0 1.083 2.927h15.683c.917 0 1.663-.746 1.663-1.664 0-.486-.212-.947-.59-1.27a6.36 6.36 0 0 1-1.715-2.298" })));

const SvgBellIcon = (props) => (React.createElement(Svg, { width: 24, height: 24, fill: "none", color: "#8A95A8", viewBox: "0 0 24 24", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M11.808 23.896c1.721 0 3.161-1.226 3.492-2.852H8.315a3.57 3.57 0 0 0 3.493 2.852M20.672 17.122a6.33 6.33 0 0 1-2.247-4.842V9.646c0-3.324-2.47-6.137-5.669-6.598V2.87c0-.522-.383-.942-.905-.942-.521 0-.984.42-.984.942v.178c-3.2.461-5.669 3.274-5.669 6.598v2.634c0 1.87-.819 3.635-2.256 4.85a1.655 1.655 0 0 0 1.075 2.909h15.588c.912 0 1.654-.742 1.654-1.654 0-.484-.21-.941-.587-1.263" })));

const SvgCartIcon = (props) => (React.createElement(Svg, { width: 24, height: 24, fill: "none", color: "#8A95A8", viewBox: "0 0 24 24", ...props },
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "M6.227 5.027 5.73 3.613c-.111-.354-.4-1.116-.663-1.337C4.737 2 4.534 2 3.925 2H2.75c-.264 0-.517.1-.703.278a.92.92 0 0 0-.29.667c0 .25.105.49.29.668.186.177.44.278.703.278h1.213l2.856 9.645c.115.44.354.955.66 1.431s.677.908 1.049 1.186c.364.271.845.392 1.306.444.37.041.714.037.965.034l.168-.001h5.718a4.4 4.4 0 0 0 2.66-.882 4.04 4.04 0 0 0 1.5-2.272l.002-.005 1.085-5.266.04-.158c.112-.526.313-1.622.264-2.028l-.012-.066c-.054-.27-.174-.487-.389-.643-.216-.158-.54-.263-1.015-.283z", clipRule: "evenodd" }),
    React.createElement(Path, { fill: "currentColor", d: "M10.11 22a1.818 1.818 0 1 0 0-3.636 1.818 1.818 0 0 0 0 3.636M15.994 22a1.818 1.818 0 1 0 0-3.636 1.818 1.818 0 0 0 0 3.636" })));

const SvgCartOutlineIcon = (props) => (React.createElement(Svg, { width: 22, height: 22, fill: "none", color: "#010713", viewBox: "0 0 22 22", ...props },
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "m5.575 4.678-.467-1.33c-.105-.332-.376-1.048-.624-1.255-.31-.26-.5-.26-1.073-.26H2.308a.96.96 0 0 0-.66.261.87.87 0 0 0-.273.627c0 .235.098.46.272.627a.96.96 0 0 0 .66.262h1.14l2.684 9.064c.108.413.332.897.62 1.344s.636.853.986 1.114c.341.255.794.369 1.227.417.347.039.671.035.907.032h5.531a4.12 4.12 0 0 0 2.5-.829 3.8 3.8 0 0 0 1.41-2.136v-.004l1.02-4.948.037-.149c.106-.494.295-1.524.249-1.905l-.011-.063a.94.94 0 0 0-.366-.604c-.203-.149-.507-.246-.953-.265zm11.957 7.409c-.117.34-.315.752-.602 1.088s-.67.602-1.155.628h-5.746c-.47 0-.871-.016-1.215-.227-.346-.212-.618-.61-.868-1.324v-.004L6.13 6.443l11.476.011h1.11l-1.1 5.344z", clipRule: "evenodd" }),
    React.createElement(Path, { fill: "currentColor", d: "M9.224 20.627a1.708 1.708 0 1 0 0-3.416 1.708 1.708 0 0 0 0 3.416M14.751 20.627a1.708 1.708 0 1 0 0-3.416 1.708 1.708 0 0 0 0 3.416" })));

const SvgCatalogIcon = (props) => (React.createElement(Svg, { width: 24, height: 24, fill: "none", color: "#8A95A8", viewBox: "0 0 24 24", ...props },
    React.createElement(Path, { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.7, d: "m21.76 16.518-4.284-4.283m1.488-3.594a5.082 5.082 0 1 0-10.163 0 5.082 5.082 0 0 0 10.163 0" }),
    React.createElement(Rect, { width: 19, height: 2.7, y: 18.602, fill: "currentColor", rx: 1.35 }),
    React.createElement(Rect, { width: 7.438, height: 2.7, y: 12.901, fill: "currentColor", rx: 1.35 }),
    React.createElement(Rect, { width: 5.545, height: 2.7, y: 7.201, fill: "currentColor", rx: 1.35 })));

const SvgCatalogMenuIcon = (props) => (React.createElement(Svg, { width: 16, height: 16, fill: "none", color: "#fff", viewBox: "0 0 16 16", ...props },
    React.createElement(Rect, { width: 5.5, height: 5.5, x: 1.7, y: 1.7, fill: "currentColor", rx: 1.8 }),
    React.createElement(Rect, { width: 5.5, height: 5.5, x: 8.899, y: 1.7, fill: "currentColor", rx: 1.8 }),
    React.createElement(Rect, { width: 5.5, height: 5.5, x: 8.8, y: 8.9, fill: "currentColor", rx: 1.8 }),
    React.createElement(Rect, { width: 5.5, height: 5.5, x: 1.7, y: 8.9, fill: "currentColor", rx: 1.8 })));

const SvgCheckIcon = (props) => (React.createElement(Svg, { width: 14, height: 14, fill: "none", color: "#fff", viewBox: "0 0 14 14", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M12.707 4.207a1 1 0 0 0-1.414-1.414zM5 10.5l-.707.707a1 1 0 0 0 1.414 0zM2.707 6.793a1 1 0 1 0-1.414 1.414zm8.586-4-7 7 1.414 1.414 7-7zm-10 5.414 3 3 1.414-1.414-3-3z" })));

const SvgChevronIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#010713", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m7 4 6 6-6 6" })));

const SvgClockIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#4485F9", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { stroke: "currentColor", strokeWidth: 2, d: "M10.003 17.337a7.333 7.333 0 1 0 0-14.667 7.333 7.333 0 0 0 0 14.667Z" }),
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "M10.02 6.092h-.049a.584.584 0 0 0-.586.586v3.845c0 .285.146.553.399.7l3.38 2.028a.58.58 0 0 0 .798-.195.58.58 0 0 0-.203-.807l-3.152-1.873V6.678a.584.584 0 0 0-.587-.586", clipRule: "evenodd" }),
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "M10.02 6.092h-.049a.584.584 0 0 0-.586.586v3.845c0 .285.146.553.399.7l3.38 2.028a.58.58 0 0 0 .798-.195.58.58 0 0 0-.203-.807l-3.152-1.873V6.678a.584.584 0 0 0-.587-.586", clipRule: "evenodd" })));

const SvgCloseIcon = (props) => (React.createElement(Svg, { width: 16, height: 16, fill: "none", color: "#010713", viewBox: "0 0 16 16", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M2.597 1.274a.936.936 0 0 0-1.323 1.323L6.677 8l-5.403 5.403a.936.936 0 1 0 1.323 1.323L8 9.323l5.403 5.403a.935.935 0 1 0 1.323-1.323L9.323 8l5.403-5.403a.936.936 0 1 0-1.323-1.323L8 6.677z" })));

const SvgCompleteStepIcon = (props) => (React.createElement(Svg, { width: 12, height: 12, fill: "none", color: "#34A853", viewBox: "0 0 12 12", ...props },
    React.createElement(Circle, { cx: 6, cy: 6, r: 6, fill: "currentColor" }),
    React.createElement(Path, { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.154, d: "m3.71 6.119 1.667 1.666L8.71 4.214" })));

const SvgCreditCardIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#4485F9", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.7, d: "M2.5 7.503v6.667a1.667 1.667 0 0 0 1.667 1.667h11.666A1.666 1.666 0 0 0 17.5 14.17V7.503m-15 0V5.837A1.667 1.667 0 0 1 4.167 4.17h11.666A1.666 1.666 0 0 1 17.5 5.837v1.666m-15 0h15M5.833 10.837H10" })));

const SvgDeliveryCancelledIcon = (props) => (React.createElement(Svg, { width: 88, height: 88, fill: "none", color: "#E6EDFA", viewBox: "0 0 88 88", ...props },
    React.createElement(Path, { fill: "currentColor", d: "m37.233 25.1-5.523 4.235V8.41h12.867v20.923L39.04 25.1a1.45 1.45 0 0 0-.903-.31c-.327 0-.645.11-.903.31m30.442-9.232v-6.53a.923.923 0 0 0-.918-.919L47.54 8.411v8.381l19.218.008a.936.936 0 0 0 .918-.932M28.748 8.41 9.555 8.276a.936.936 0 0 0-.933.918v6.53a.95.95 0 0 0 .933.933l19.193.135zM82.5 58.905c-1.132 27.578-40.448 27.579-41.58 0C40.644 44.723 55.74 34.29 68.892 39.39A20.83 20.83 0 0 1 82.5 58.905m-18.702 0 7.892-7.877a1.482 1.482 0 0 0-2.088-2.103l-7.892 7.893-7.893-7.893a1.474 1.474 0 0 0-2.087 0 1.493 1.493 0 0 0 0 2.103l7.892 7.878-7.892 7.892a1.474 1.474 0 0 0 0 2.088 1.45 1.45 0 0 0 2.087 0l7.893-7.893 7.892 7.893c1.361 1.393 3.447-.732 2.088-2.088zM61.71 35.155c2.019-.003 4.03.256 5.982.77v-16.17H47.54V32.34a1.476 1.476 0 0 1-2.384 1.17l-7.019-5.375-7.019 5.375a1.51 1.51 0 0 1-1.555.163 1.49 1.49 0 0 1-.814-1.333V19.754H8.595v43.298a3.53 3.53 0 0 0 3.687 3.331h26.876c-5.215-14.941 6.657-31.51 22.552-31.23" })));

const SvgDeliveryTrackIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#4485F9", viewBox: "0 0 20 20", ...props },
    React.createElement(G, { stroke: "currentColor", strokeLinecap: "round", clipPath: "url(#deliveryTrackIcon_svg__a)" },
        React.createElement(Path, { strokeLinejoin: "round", strokeMiterlimit: 1.5, strokeWidth: 1.8, d: "M6.667 15.833a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333m8.333 0a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" }),
        React.createElement(Path, { strokeWidth: 1.8, d: "M8.376 14.167H12.5v-9.98c0-.154-.053-.3-.147-.408a.47.47 0 0 0-.353-.169H.834m3.875 10.557H3.001a.44.44 0 0 1-.192-.044.5.5 0 0 1-.162-.125.6.6 0 0 1-.108-.186.7.7 0 0 1-.038-.22V8.888" }),
        React.createElement(Path, { strokeLinejoin: "round", strokeWidth: 2, d: "M1.667 6.155H5" }),
        React.createElement(Path, { strokeWidth: 1.8, d: "M12.5 6.626h4.675a.46.46 0 0 1 .272.091c.081.06.145.145.185.245l1.491 3.796q.043.109.044.23V13.6a.6.6 0 0 1-.038.216.6.6 0 0 1-.109.184.5.5 0 0 1-.162.123.45.45 0 0 1-.191.043h-1.584m-4.583 0h.833" })),
    React.createElement(Defs, null,
        React.createElement(ClipPath, { id: "deliveryTrackIcon_svg__a" },
            React.createElement(Path, { fill: "#fff", d: "M0 0h20v20H0z" })))));

const SvgDocumentIcon = (props) => (React.createElement(Svg, { width: 22, height: 22, fill: "none", color: "#4485F9", viewBox: "0 0 22 22", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M19.527 6.515c0-.046-.046-.092-.046-.184v-.046c-.046-.045-.046-.091-.092-.137L13.614.418c-.046-.045-.092-.09-.137-.09h-.046C13.385.28 13.339.28 13.293.28H4.768a2.3 2.3 0 0 0-2.291 2.292v16.912a2.3 2.3 0 0 0 2.291 2.292h12.467a2.3 2.3 0 0 0 2.292-2.292V6.515m-2.338-.55h-2.43a.92.92 0 0 1-.916-.917V2.573zm.046 14.437H4.768a.92.92 0 0 1-.916-.917V2.527a.92.92 0 0 1 .916-.917h7.654v3.392a2.3 2.3 0 0 0 2.292 2.292h3.392V19.44a.868.868 0 0 1-.871.962" }),
    React.createElement(Path, { fill: "currentColor", d: "M6.875 12.469H5.5v4.583h.917v-1.467h.458c.87 0 1.558-.687 1.558-1.558 0-.825-.687-1.558-1.558-1.558m0 2.2h-.458V13.43h.458c.367 0 .642.275.642.642 0 .32-.275.596-.642.596M10.774 12.469H9.536c-.275 0-.458.183-.458.458v3.62c0 .276.183.46.458.46h1.238a2.3 2.3 0 0 0 2.292-2.292c0-1.284-1.009-2.246-2.292-2.246m0 3.666h-.78v-2.704h.78c.733 0 1.375.596 1.375 1.375 0 .78-.596 1.33-1.375 1.33M13.656 12.927v4.125h.917V15.22h1.742v-.917h-1.742v-.917h1.925v-.916h-2.43c-.228 0-.412.229-.412.458" })));

const SvgEmptyBoxIcon = (props) => (React.createElement(Svg, { width: 88, height: 88, fill: "none", color: "#E6EDFA", viewBox: "0 0 88 88", ...props },
    React.createElement(Path, { fill: "currentColor", d: "m39.275 44.117 4.158-5.413v36.267l-30.148-11.32a1.51 1.51 0 0 1-.953-1.407V37.6l20.76 7.636.135.045.817.303a4.3 4.3 0 0 0 1.648.317 4.53 4.53 0 0 0 3.583-1.784M76.302 38.236v23.542c0 .62-.378 1.179-.952 1.406L45.82 75.625V40.171l3.463 4.52a4.55 4.55 0 0 0 3.643 1.845c.575 0 1.134-.105 1.648-.317z" }),
    React.createElement(Path, { fill: "currentColor", d: "m81.744 30.873-7.74-9.344a.3.3 0 0 0-.092-.06 1.6 1.6 0 0 0-.302-.257l-.181-.091c-.046-.015-.091-.045-.136-.06l-28.53-8.982a1.38 1.38 0 0 0-.923 0L15.31 21.06c-.046.016-.091.046-.137.06l-.181.092a2.4 2.4 0 0 0-.303.241c-.03.03-.06.046-.09.076l-7.741 9.344a1.497 1.497 0 0 0 .635 2.374l27.653 10.16c.166.076.348.106.53.106.453 0 .907-.212 1.194-.605l7.439-9.692 7.423 9.692c.287.393.741.605 1.195.605.181 0 .362-.03.529-.106l27.653-10.16c.469-.167.817-.545.938-1.013.136-.484.03-.983-.303-1.361M44.31 29.149l-23.284-6.713 23.284-7.333 23.284 7.333z" })));

const SvgFilterIcon = (props) => (React.createElement(Svg, { width: 32, height: 32, fill: "none", color: "#010713", viewBox: "0 0 32 32", ...props },
    React.createElement(Circle, { cx: 18.761, cy: 19.948, r: 2.139, stroke: "currentColor", strokeWidth: 1.827 }),
    React.createElement(Rect, { width: 7.088, height: 0.879, x: 14.055, y: 20.387, stroke: "currentColor", strokeWidth: 0.879, rx: 0.439, transform: "rotate(-180 14.055 20.387)" }),
    React.createElement(Circle, { cx: 13.257, cy: 12.054, r: 2.175, stroke: "currentColor", strokeWidth: 1.758 }),
    React.createElement(Rect, { width: 7.086, height: 0.879, x: 17.949, y: 11.546, fill: "currentColor", stroke: "currentColor", strokeWidth: 0.879, rx: 0.439 }),
    React.createElement(Rect, { width: 3.857, height: 0.879, x: 6.967, y: 11.546, fill: "currentColor", stroke: "currentColor", strokeWidth: 0.879, rx: 0.439 }),
    React.createElement(Rect, { width: 3.857, height: 0.879, x: 21.176, y: 19.508, fill: "currentColor", stroke: "currentColor", strokeWidth: 0.879, rx: 0.439 })));

const SvgHeartIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#FF3C6B", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M14.41 1.46a5.26 5.26 0 0 0-2.557.704 5.03 5.03 0 0 0-1.847 1.847 5.03 5.03 0 0 0-1.848-1.847 5.26 5.26 0 0 0-2.557-.704 5.53 5.53 0 0 0-3.768 1.689A5.15 5.15 0 0 0 .395 6.91c0 4.356 9.17 11.544 9.17 11.544a.755.755 0 0 0 .88 0s9.172-7.173 9.172-11.544a5.15 5.15 0 0 0-1.439-3.761 5.53 5.53 0 0 0-3.767-1.689" })));

const SvgHeartOutlineIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#010713", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "M14.656 1.46c-2.984 0-4.297 1.698-4.6 2.162a.085.085 0 0 1-.141-.002C8.662 1.572 6.652 1.46 5.412 1.46 4.15 1.46.342 2.63.392 6.97c.042 3.78 7.292 9.935 9.159 11.453.273.223.595.222.87 0 1.877-1.521 9.2-7.694 9.2-11.47 0-3.759-3.253-5.493-4.965-5.493m3.286 5.501c-.023 2.98-6.756 8.732-7.816 9.62a.21.21 0 0 1-.28 0c-1.062-.9-7.849-6.757-7.849-9.62 0-3.605 2.935-3.888 3.554-3.888 2.032-.005 3.36 1.45 3.996 2.368.188.27.672.262.853-.013.603-.92 1.892-2.363 4.036-2.363.612 0 3.53.662 3.506 3.896", clipRule: "evenodd" })));

const SvgHomeIcon = (props) => (React.createElement(Svg, { width: 24, height: 24, fill: "none", color: "#8A95A8", viewBox: "0 0 24 24", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M2 19.714V9.43q0-.543.266-1.029.267-.486.734-.8l7.5-5.143A2.56 2.56 0 0 1 12 2a2.56 2.56 0 0 1 1.5.457L21 7.6q.47.315.735.8.267.486.265 1.029v10.285q0 .943-.735 1.615T19.5 22h-3.75q-.53 0-.89-.33-.36-.329-.36-.813v-5.265q0-.486-.36-.814a1.28 1.28 0 0 0-.89-.33h-2.5q-.53 0-.89.33t-.36.813v5.266q0 .486-.36.815-.36.33-.89.328H4.5q-1.031 0-1.765-.67-.734-.672-.735-1.616" })));

const SvgImagePlaceholderIcon = (props) => (React.createElement(Svg, { width: 140, height: 140, fill: "none", color: "#F4F6FA", viewBox: "0 0 140 140", ...props },
    React.createElement(Path, { fill: "#fff", d: "M0 0h140v140H0z" }),
    React.createElement(Rect, { width: 112, height: 96.727, x: 14.75, y: 21.137, fill: "currentColor", rx: 8.485 }),
    React.createElement(Rect, { width: 95.03, height: 79.758, x: 23.234, y: 29.621, fill: "#fff", rx: 6.788 }),
    React.createElement(Path, { fill: "currentColor", d: "M92.153 70.665a3.91 3.91 0 0 0-5.878 0l-3.853 4.382a3.913 3.913 0 0 1-5.974-.113L63.869 59.479c-1.569-1.927-4.507-1.927-6.07 0l-34.565 42.465v11.169h96.344v-11.26zM97.683 61.167c5.431 0 9.833-4.403 9.833-9.834 0-5.43-4.402-9.833-9.833-9.833-5.43 0-9.833 4.403-9.833 9.833s4.402 9.834 9.833 9.834" })));

const SvgInfoIcon = (props) => (React.createElement(Svg, { width: 16, height: 16, fill: "none", color: "#FF3C6B", viewBox: "0 0 16 16", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M8 6.834a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0v-3.5a.5.5 0 0 1 .5-.5M8 6a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 6" }),
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "M8 14.666A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.333m0-1A5.667 5.667 0 1 0 8 2.333a5.667 5.667 0 0 0 0 11.333", clipRule: "evenodd" })));

const SvgLocationArrowIcon = (props) => (React.createElement(Svg, { width: 16, height: 16, fill: "none", color: "#575E71", viewBox: "0 0 16 16", ...props },
    React.createElement(Path, { fill: "currentColor", d: "m13.928 1.337.07-.004.087.005.06.011.082.023.071.031.067.038.06.045.054.05.035.039.055.077.034.064a.7.7 0 0 1 .06.211l.004.07q0 .076-.016.147l-.024.082-4.354 12.052a1.034 1.034 0 0 1-1.826.104l-.043-.085L6.17 9.829 1.723 7.605a1.03 1.03 0 0 1-.599-.84l-.004-.099c0-.373.2-.714.56-.913l.094-.047L13.785 1.37l.071-.02z" })));

const SvgLocationIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#4485F9", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M10 9.554a2.232 2.232 0 1 1 0-4.464 2.232 2.232 0 0 1 0 4.464m0-8.482a6.25 6.25 0 0 0-6.25 6.25c0 4.687 6.25 11.607 6.25 11.607s6.25-6.92 6.25-11.607A6.25 6.25 0 0 0 10 1.072" })));

const SvgLocationOutlineIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#4485F9", viewBox: "0 0 20 20", ...props },
    React.createElement(Circle, { cx: 10.016, cy: 7.188, r: 2.163, stroke: "currentColor", strokeWidth: 1.7 }),
    React.createElement(Path, { stroke: "currentColor", strokeWidth: 1.7, d: "M10 1.92a5.4 5.4 0 0 1 5.4 5.4c0 1-.338 2.185-.902 3.444-.56 1.248-1.313 2.508-2.078 3.642a41 41 0 0 1-2.104 2.831q-.17.21-.316.383-.146-.173-.316-.383c-.575-.708-1.34-1.7-2.104-2.83-.765-1.135-1.519-2.395-2.078-3.643C4.938 9.504 4.6 8.32 4.6 7.32a5.4 5.4 0 0 1 5.132-5.393z" })));

const SvgLockIcon = (props) => (React.createElement(Svg, { width: 88, height: 88, fill: "none", color: "#F0F5FF", viewBox: "0 0 88 88", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M66 29.334h-3.667v-3.667c0-10.109-8.225-18.333-18.334-18.333s-18.333 8.224-18.333 18.333v3.667h-3.667a7.333 7.333 0 0 0-7.333 7.333v36.667a7.333 7.333 0 0 0 7.333 7.333h44a7.333 7.333 0 0 0 7.334-7.333V36.667a7.333 7.333 0 0 0-7.334-7.333m-33-3.667c0-6.064 4.935-11 11-11 6.064 0 11 4.936 11 11v3.667H33zm14.666 31.985V66h-7.333v-8.35c-2.182-1.268-3.667-3.607-3.667-6.317a7.333 7.333 0 0 1 14.667 0c0 2.706-1.485 5.045-3.667 6.318" })));

const SvgLogoIcon = (props) => (React.createElement(Svg, { width: 260, height: 52, fill: "none", viewBox: "0 0 260 52", ...props },
    React.createElement(Path, { fill: "#010713", d: "M11.567 41.634q-2.968 0-5.215-1.127-2.247-1.155-3.523-3.164-1.248-2.035-1.248-4.648v-.028q0-2.695 1.36-4.594 1.358-1.925 3.938-3.025 2.607-1.128 6.297-1.348l11.566-.715v4.978l-10.346.66q-2.358.139-3.606 1.101-1.22.935-1.22 2.53v.028q0 1.65 1.248 2.586 1.276.907 3.384.907 1.803 0 3.217-.687 1.443-.715 2.275-1.953a4.82 4.82 0 0 0 .832-2.751v-9.022q0-1.953-1.276-3.08-1.248-1.129-3.633-1.128-2.275 0-3.606.907-1.332.908-1.665 2.338l-.055.248H2.885l.028-.33q.249-2.723 1.83-4.814 1.61-2.118 4.438-3.3 2.857-1.21 6.796-1.211 3.855 0 6.685 1.238t4.382 3.466q1.582 2.228 1.582 5.198v20.273h-8.1V36.82h-.194a9.1 9.1 0 0 1-2.164 2.585 9.6 9.6 0 0 1-2.967 1.65q-1.665.579-3.634.578m22.495 9.188V11.596h8.1v5.116h.194q.831-1.788 2.136-3.053a9.4 9.4 0 0 1 3.078-1.953q1.775-.687 3.884-.687 3.772 0 6.49 1.843 2.718 1.815 4.189 5.253 1.47 3.438 1.47 8.252v.028q0 4.786-1.47 8.224-1.443 3.438-4.161 5.309-2.691 1.843-6.407 1.843-2.136 0-3.94-.688a9.9 9.9 0 0 1-3.133-1.925 9.8 9.8 0 0 1-2.136-2.998h-.194v14.66zm14.701-15.707q2.053 0 3.523-1.073t2.274-2.998q.804-1.953.804-4.648v-.028q0-2.723-.804-4.676t-2.302-2.97q-1.47-1.047-3.495-1.046-1.969 0-3.467 1.073-1.499 1.045-2.358 2.998-.832 1.953-.832 4.649v.027q0 2.64.832 4.594.86 1.953 2.358 3.025 1.498 1.074 3.467 1.073m31.177 6.602q-4.993 0-7.378-2.036-2.386-2.035-2.386-6.739V17.65h-4.188v-6.052h4.188V4.418h8.183v7.18h5.52v6.05h-5.52V31.98q0 2.035.916 2.86.942.825 2.8.825.555 0 .972-.027.444-.055.832-.11v5.886q-.693.11-1.692.193-.97.11-2.247.11m21.719.055q-4.55 0-7.85-1.843-3.273-1.87-5.048-5.309-1.748-3.465-1.748-8.17v-.027q0-4.704 1.748-8.17 1.775-3.465 4.993-5.363 3.217-1.898 7.572-1.898 4.383 0 7.545 1.843 3.19 1.843 4.909 5.199 1.748 3.328 1.748 7.784v2.476h-24.52v-5.061H111.7l-3.856 4.73v-3.108q0-2.586-.804-4.318-.804-1.761-2.247-2.64-1.415-.909-3.328-.909-1.887 0-3.357.936-1.442.907-2.274 2.668t-.832 4.263v3.136q0 2.448.832 4.209.832 1.732 2.358 2.668 1.525.907 3.633.907 1.692 0 2.913-.495 1.22-.522 1.969-1.32.777-.798 1.054-1.595l.056-.166h7.461l-.083.303q-.333 1.596-1.304 3.246-.971 1.623-2.635 2.998-1.637 1.375-4.022 2.2t-5.575.826m18.529-.605V1.282h8.099v39.885zm18.75 0-9.181-13.039 5.187-5.996 13.369 19.035zm-11.594-8.747-.028-8.995h1.165l10.069-11.828h9.181l-13.619 15.349-2.025.302zm32.065 9.214q-2.968 0-5.215-1.127-2.247-1.155-3.523-3.164-1.248-2.035-1.248-4.648v-.028q0-2.695 1.359-4.594 1.359-1.925 3.939-3.025 2.607-1.128 6.296-1.348l11.567-.715v4.978l-10.346.66q-2.358.139-3.606 1.101-1.221.935-1.221 2.53v.028q0 1.65 1.249 2.586 1.275.907 3.384.907 1.803 0 3.217-.687 1.443-.715 2.275-1.953a4.83 4.83 0 0 0 .832-2.751v-9.022q0-1.953-1.276-3.08-1.249-1.129-3.634-1.128-2.274 0-3.606.907-1.33.908-1.664 2.338l-.055.248h-7.406l.027-.33q.25-2.723 1.831-4.814 1.61-2.118 4.438-3.3 2.857-1.21 6.796-1.211 3.855 0 6.685 1.238t4.382 3.466q1.581 2.228 1.581 5.198v20.273h-8.099V36.82h-.194a9.1 9.1 0 0 1-2.164 2.585 9.6 9.6 0 0 1-2.968 1.65q-1.663.579-3.633.578m55.946.138q-2.135 0-3.938-.688a9.6 9.6 0 0 1-3.107-1.925 9.6 9.6 0 0 1-2.108-2.971h-.194v4.979h-8.099V1.282h8.099v15.431h.194q.804-1.788 2.136-3.053a9.1 9.1 0 0 1 3.134-1.953q1.776-.687 3.883-.687 3.772 0 6.462 1.843 2.72 1.815 4.189 5.253 1.47 3.438 1.47 8.252v.028q0 4.786-1.47 8.224-1.443 3.438-4.189 5.309-2.716 1.843-6.462 1.843m-2.718-6.657q2.053 0 3.523-1.045 1.498-1.073 2.274-3.026.805-1.953.805-4.648v-.028q0-2.723-.805-4.648-.804-1.953-2.302-2.999-1.47-1.045-3.495-1.045-1.969 0-3.467 1.073-1.499 1.045-2.358 2.998-.832 1.953-.832 4.621v.028q0 2.668.832 4.62.86 1.954 2.358 3.026 1.498 1.074 3.467 1.073m22.744 15.844q-1.137 0-2.218-.11a25 25 0 0 1-1.802-.193V44.66q.442.083 1.108.165.695.083 1.553.083 1.859 0 2.941-.633 1.081-.606 1.582-2.118l.36-.99-10.54-29.57h8.904l6.766 24.811-1.136-1.76h1.58l-1.136 1.76 6.769-24.81h8.542l-10.207 30.064q-1.194 3.494-2.967 5.529-1.777 2.063-4.274 2.915-2.466.853-5.825.853" }),
    React.createElement(Path, { fill: "#FF3C6B", d: "M187.035 41.706q-2.177 0-3.681-1.492-1.504-1.49-1.504-3.65 0-2.157 1.504-3.65 1.504-1.491 3.681-1.491t3.68 1.492q1.504 1.49 1.504 3.65 0 2.157-1.504 3.65-1.504 1.491-3.68 1.491" })));

const SvgLogoutIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#8A95A8", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "M10.707 12.829a.706.706 0 0 0-.707-.707H6.464a2.123 2.123 0 0 1 0-4.243H10a.706.706 0 0 0 .707-.707V4.697c0-.563-.222-1.102-.622-1.5a2.12 2.12 0 0 0-1.5-.622H4.698c-.563 0-1.104.224-1.5.621-.399.399-.622.938-.622 1.5v10.608c0 .562.223 1.102.622 1.5.396.398.937.621 1.5.621h3.889c.562 0 1.103-.223 1.499-.621.4-.398.622-.938.622-1.5zm4.657-3.536h-8.9a.708.708 0 0 0 0 1.414h8.9l-2.327 2.329a.71.71 0 0 0 0 1 .704.704 0 0 0 .997 0l2.935-2.932c.293-.293.456-.69.456-1.104s-.163-.81-.456-1.103l-2.935-2.932a.704.704 0 0 0-.997 0 .71.71 0 0 0 0 1z", clipRule: "evenodd" })));

const SvgMenuUnevenIcon = (props) => (React.createElement(Svg, { width: 22, height: 22, fill: "none", color: "#010713", viewBox: "0 0 22 22", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M1 4.476a.94.94 0 0 1 .938-.938h13.125a.938.938 0 0 1 0 1.875H1.938A.94.94 0 0 1 1 4.476m0 12.5a.937.937 0 0 1 .938-.938h11.875a.938.938 0 0 1 0 1.875H1.938A.94.94 0 0 1 1 16.976m.938-7.188a.937.937 0 1 0 0 1.875h18.125a.938.938 0 0 0 0-1.875z" })));

const SvgMinusIcon = (props) => (React.createElement(Svg, { width: 22, height: 22, fill: "none", color: "#010713", viewBox: "0 0 22 22", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M17.11 11.573H4.888a.573.573 0 0 1 0-1.146h12.223a.573.573 0 0 1 0 1.146" })));

const SvgMinusIconBold = (props) => (React.createElement(Svg, { width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", ...props },
    React.createElement(Path, { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.8, d: "M1.8 8h12.55" })));

const SvgOptionsIcon = (props) => (React.createElement(Svg, { width: 32, height: 32, fill: "none", color: "#010713", viewBox: "0 0 32 32", ...props },
    React.createElement(Path, { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M16 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M16 16.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M16 23.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" })));

const SvgPackageIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#4485F9", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { stroke: "currentColor", strokeLinecap: "round", strokeWidth: 1.7, d: "m17.5 5.988-7.01-3.86c-.31-.17-.68-.17-.98 0L6.5 3.848m11 2.14v7.63c0 .38-.22.73-.57.9 0 0-4.23 2.04-6.93 3.34m7.5-11.87-3.89 2.01M10 17.857c-2.73-1.5-6.98-3.84-6.98-3.84-.32-.18-.52-.51-.52-.88v-7.15m7.5 11.87v-8m3.61-1.86L10 9.858m3.61-1.86a1 1 0 0 0-.37-.36L6.5 3.858l-4 2.13m11.11 2.01c.09.15.14.33.14.51v1.35M2.5 5.988l7.5 3.87" })));

const SvgPhoneIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#8A95A8", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { fill: "currentColor", d: "m17.073 14.284-3.388-3.08a.833.833 0 0 0-1.159.036l-1.994 2.05c-.48-.09-1.445-.392-2.438-1.382-.994-.995-1.295-1.962-1.384-2.439l2.05-1.995a.833.833 0 0 0 .035-1.159L5.716 2.928a.833.833 0 0 0-1.16-.072L2.75 4.406a.83.83 0 0 0-.242.542c-.013.208-.25 5.143 3.576 8.971 3.338 3.338 7.52 3.582 8.671 3.582.169 0 .272-.005.3-.007a.83.83 0 0 0 .54-.242l1.55-1.81a.83.83 0 0 0-.071-1.158" })));

const SvgPhoneOutlineIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#4485F9", viewBox: "0 0 20 20", ...props },
    React.createElement(G, { clipPath: "url(#phoneOutlineIcon_svg__a)" },
        React.createElement(Path, { stroke: "currentColor", strokeWidth: 1.7, d: "M13.888 11.666c-1.11 1.111-1.11 2.222-2.222 2.222s-2.222-1.11-3.333-2.222S6.11 9.444 6.11 8.333 7.222 7.222 8.333 6.11C9.443 5 6.11 1.666 4.999 1.666c-1.11 0-3.333 3.333-3.333 3.333 0 2.223 2.283 6.728 4.444 8.89 2.162 2.16 6.667 4.444 8.89 4.444 0 0 3.333-2.223 3.333-3.334 0-1.11-3.334-4.444-4.445-3.333Z" })),
    React.createElement(Defs, null,
        React.createElement(ClipPath, { id: "phoneOutlineIcon_svg__a" },
            React.createElement(Path, { fill: "#fff", d: "M0 0h20v20H0z" })))));

const SvgPlusIcon = (props) => (React.createElement(Svg, { width: 22, height: 22, fill: "none", color: "#010713", viewBox: "0 0 22 22", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M17.11 10.428h-5.538V4.889a.573.573 0 0 0-1.145 0v5.539H4.888a.573.573 0 0 0 0 1.145h5.539v5.538a.573.573 0 1 0 1.145 0v-5.538h5.538a.573.573 0 0 0 0-1.146" })));

const SvgPlusIconBold = (props) => (React.createElement(Svg, { width: 16, height: 16, fill: "none", viewBox: "0 0 16 16", ...props },
    React.createElement(G, { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.8, clipPath: "url(#plusIconBold_svg__a)" },
        React.createElement(Path, { d: "M8.074 1.8v12.55M1.8 8.074h12.55" })),
    React.createElement(Defs, null,
        React.createElement(ClipPath, { id: "plusIconBold_svg__a" },
            React.createElement(Path, { fill: "#fff", d: "M0 0h16v16H0z" })))));

const SvgProfileIcon = (props) => (React.createElement(Svg, { width: 24, height: 24, fill: "none", color: "#8A95A8", viewBox: "0 0 24 24", ...props },
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "M21.775 11.589c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10m-6.437-3.014a3.564 3.564 0 1 1-7.127 0 3.564 3.564 0 0 1 7.127 0m2.67 6.591a.65.65 0 0 1-.05.596c-1.004 1.623-3.883 2.949-6.183 2.949a7.75 7.75 0 0 1-6.031-2.866.73.73 0 0 1-.099-.798c.547-1.04 1.696-2.048 2.496-2.5.241-.137.532-.1.769.044.822.5 1.865 1.032 2.865 1.032.984 0 2.02-.514 2.83-1.007.257-.157.576-.186.835-.034.832.488 2.105 1.493 2.567 2.584", clipRule: "evenodd" })));

const SvgRadioCheckedIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#4485F9", viewBox: "0 0 20 20", ...props },
    React.createElement(Circle, { cx: 9.999, cy: 9.999, r: 7.917, stroke: "currentColor", strokeWidth: 0.833 }),
    React.createElement(Circle, { cx: 9.999, cy: 9.999, r: 5.833, fill: "currentColor" })));

const SvgRadioIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#8A95A8", viewBox: "0 0 20 20", ...props },
    React.createElement(Circle, { cx: 9.999, cy: 9.999, r: 7.917, stroke: "currentColor", strokeWidth: 0.833 })));

const SvgRoundCloseIcon = (props) => (React.createElement(Svg, { width: 16, height: 16, fill: "none", color: "#D2D3DE", viewBox: "0 0 16 16", ...props },
    React.createElement(Path, { fill: "currentColor", fillRule: "evenodd", d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m3.544-11.544a.753.753 0 0 1 0 1.065L9.064 8l2.48 2.48a.753.753 0 0 1-1.065 1.064L8 9.064l-2.48 2.48a.753.753 0 1 1-1.064-1.065L6.936 8l-2.48-2.48A.753.753 0 0 1 5.52 4.457L8 6.936l2.48-2.48a.753.753 0 0 1 1.064 0", clipRule: "evenodd" })));

const SvgSearchIcon = (props) => (React.createElement(Svg, { width: 20, height: 20, fill: "none", color: "#8A95A8", viewBox: "0 0 20 20", ...props },
    React.createElement(Path, { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m17.5 17.5-4.958-4.958m1.723-4.16a5.882 5.882 0 1 0-11.765 0 5.882 5.882 0 0 0 11.765 0" })));

const SvgShortLogoIcon = (props) => (React.createElement(Svg, { width: 192, height: 192, fill: "none", color: "#fff", viewBox: "0 0 192 192", ...props },
    React.createElement(G, { clipPath: "url(#shortLogoIcon_svg__a)" },
        React.createElement(Path, { fill: "currentColor", d: "M192 0H0v192h192z" }),
        React.createElement(Path, { fill: "#010713", d: "M75.104 141.696q-8.46.001-15.075-2.941-6.618-2.996-10.472-8.821-3.801-5.88-3.8-14.648c0-4.917.901-9.055 2.702-12.396 1.806-3.346 4.26-6.033 7.366-8.071q4.658-3.056 10.583-4.614 5.984-1.56 12.545-2.19 7.711-.809 12.425-1.5 4.72-.754 6.844-2.191c1.417-.963 2.13-2.383 2.13-4.269v-.345c0-3.65-1.148-6.48-3.45-8.477q-3.392-2.996-9.667-2.996-6.619-.001-10.528 2.94c-2.605 1.922-4.335 4.345-5.175 7.266l-22.668-1.846c1.148-5.38 3.415-10.033 6.789-13.952 3.374-3.96 7.73-6.997 13.057-9.111q8.057-3.231 18.64-3.23 7.363.001 14.095 1.73 6.79 1.727 12.024 5.363c3.531 2.424 6.309 5.537 8.342 9.34q3.051 5.649 3.051 13.551v59.735h-23.245v-12.28h-.693c-1.417 2.769-3.314 5.207-5.697 7.322-2.377 2.073-5.235 3.711-8.574 4.902q-5.001 1.728-11.564 1.729zm7.016-16.954c3.602 0 6.79-.71 9.551-2.135q4.142-2.191 6.5-5.881 2.36-3.69 2.358-8.36v-9.4c-.769.502-1.821.963-3.167 1.384a56 56 0 0 1-4.431 1.095c-1.65.31-3.299.593-4.948.867q-2.475.343-4.487.634c-2.878.421-5.387 1.095-7.537 2.018q-3.225 1.383-5.008 3.747-1.783 2.304-1.781 5.764.001 5.018 3.622 7.671 3.679 2.595 9.323 2.596z" }),
        React.createElement(Path, { fill: "#FF3C6B", d: "M153.381 141.646c8.696 0 15.745-7.05 15.745-15.745s-7.049-15.745-15.745-15.745-15.744 7.049-15.744 15.745 7.049 15.745 15.744 15.745" })),
    React.createElement(Defs, null,
        React.createElement(ClipPath, { id: "shortLogoIcon_svg__a" },
            React.createElement(Path, { fill: "currentColor", d: "M0 0h192v192H0z" })))));

const SvgSortingIcon = (props) => (React.createElement(Svg, { width: 32, height: 32, fill: "none", color: "#010713", viewBox: "0 0 32 32", ...props },
    React.createElement(Path, { fill: "#fff", stroke: "currentColor", strokeWidth: 0.875, d: "M11.624 9.438c.116 0 .228.045.31.127l3.494 3.495a.438.438 0 0 1-.62.619l-2-2.001-.746-.747v11.194a.438.438 0 1 1-.875 0V10.931l-2.749 2.748a.437.437 0 0 1-.619-.62l3.496-3.494a.44.44 0 0 1 .309-.127Zm8.75 0a.44.44 0 0 1 .438.437v11.194l.747-.747 2-2.002v.001a.437.437 0 0 1 .619.618l-3.494 3.496a.44.44 0 0 1-.62 0L16.57 18.94h.001a.438.438 0 0 1 .619-.62l2 2.002.747.747V9.875a.44.44 0 0 1 .438-.437Z" })));

const SvgSpecialOfferIcon = (props) => (React.createElement(Svg, { width: 73, height: 18, fill: "none", viewBox: "0 0 73 18", ...props },
    React.createElement(Rect, { width: 73, height: 18, fill: "url(#specialOfferIcon_svg__a)", rx: 4 }),
    React.createElement(G, { clipPath: "url(#specialOfferIcon_svg__b)" },
        React.createElement(Path, { fill: "#fff", d: "M8.5 7.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75m3 2.25a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75M15.25 9c0 .49-.352.856-.663 1.18-.176.185-.36.375-.428.543-.064.153-.068.407-.072.653-.006.458-.014.976-.374 1.337-.361.36-.88.368-1.337.375-.246.003-.5.007-.653.07-.168.07-.358.253-.543.43-.324.31-.69.662-1.18.662s-.856-.352-1.18-.663c-.185-.176-.375-.36-.543-.428-.153-.064-.407-.068-.653-.072-.458-.006-.976-.014-1.336-.374-.361-.361-.368-.88-.376-1.337-.003-.246-.007-.5-.07-.653-.07-.168-.252-.358-.43-.543-.31-.324-.662-.69-.662-1.18s.352-.856.663-1.18c.177-.185.36-.375.428-.543.064-.153.068-.407.071-.653.008-.458.015-.976.375-1.336.361-.361.88-.368 1.337-.376.246-.003.5-.007.653-.07.168-.07.358-.252.543-.43.324-.31.69-.662 1.18-.662s.856.352 1.18.663c.185.177.375.36.543.428.153.064.407.068.653.071.458.008.976.015 1.337.375.36.361.368.88.375 1.337.003.246.007.5.07.653.07.168.253.358.43.543.31.324.662.69.662 1.18M8.5 8.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m3.64-1.235a.373.373 0 0 0 0-.53.375.375 0 0 0-.53 0l-3.75 3.75a.375.375 0 1 0 .53.53zm.485 3.11a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0" })),
    React.createElement(Path, { fill: "#fff", d: "M19.87 13v-1.19h2.507q.832 0 1.26-.333.433-.34.433-.985v-.012q0-.427-.199-.714a1.2 1.2 0 0 0-.592-.434q-.387-.146-.96-.146h-2.45V8.102h2.21q.802 0 1.212-.3.416-.303.416-.878v-.012q0-.557-.38-.867-.375-.31-1.056-.31H19.87v-1.19h2.778q.809 0 1.382.258.575.252.885.726.31.47.31 1.12v.011q0 .445-.204.832a1.9 1.9 0 0 1-.54.645 1.7 1.7 0 0 1-.761.328v.105q.568.047.996.323.434.274.674.714.246.44.246.985v.011q0 .739-.352 1.278-.351.54-1.002.832-.645.287-1.547.287zm-.768 0V4.545h1.529V13zm7.538 0V6.596h1.477v1.927h1.265q1.125 0 1.787.61.669.603.668 1.623v.012q0 1.02-.668 1.628-.661.604-1.787.604zm2.543-3.34h-1.066v2.197h1.066q.54 0 .85-.298.31-.306.31-.797v-.012q0-.492-.316-.791-.31-.3-.844-.299M32.886 13V6.596h1.483V13zm7.094-5.268h-2.854V13H35.65V6.596h4.33zm3.449 5.397q-.962 0-1.659-.399a2.7 2.7 0 0 1-1.066-1.148q-.37-.744-.37-1.781v-.012q0-1.031.376-1.775.375-.744 1.066-1.143.698-.404 1.652-.404.956 0 1.647.398.69.399 1.066 1.149.375.744.375 1.775v.012q0 1.037-.375 1.781-.37.744-1.06 1.148-.691.399-1.653.399m0-1.195q.503 0 .85-.252.35-.258.538-.733.188-.474.188-1.148v-.012q0-.668-.188-1.143-.187-.48-.539-.732a1.42 1.42 0 0 0-.85-.252q-.502 0-.855.252-.351.252-.539.732-.182.476-.182 1.143v.012q0 .674.182 1.154.188.474.539.727.352.252.855.252m4.603 2.736h-1.354v-2.824h.504q.351-.21.516-.733.17-.52.21-1.166l.23-3.351h4.839v5.25h.984v2.824h-1.353V13h-4.576zm3.468-2.824V7.75h-2.103l-.164 2.273a5 5 0 0 1-.152.973 2.2 2.2 0 0 1-.323.744v.106zM58.764 13v-2.73H56.08V13h-1.477V6.596h1.477v2.531h2.684V6.596h1.476V13zm5.54.129q-.96 0-1.658-.399a2.7 2.7 0 0 1-1.066-1.148q-.37-.744-.37-1.781v-.012q0-1.031.376-1.775.375-.744 1.066-1.143.698-.404 1.652-.404.955 0 1.647.398.69.399 1.066 1.149.375.744.375 1.775v.012q0 1.037-.375 1.781-.37.744-1.06 1.148-.692.399-1.653.399m0-1.195q.505 0 .85-.252.351-.258.539-.733.188-.474.188-1.148v-.012q0-.668-.188-1.143-.187-.48-.54-.732a1.42 1.42 0 0 0-.849-.252q-.503 0-.855.252-.351.252-.54.732-.18.476-.18 1.143v.012q0 .674.18 1.154.189.474.54.727.352.252.855.252" }),
    React.createElement(Defs, null,
        React.createElement(LinearGradient, { id: "specialOfferIcon_svg__a", x1: -4.525, x2: 80.541, y1: 9, y2: 9, gradientUnits: "userSpaceOnUse" },
            React.createElement(Stop, { stopColor: "#6B75FE" }),
            React.createElement(Stop, { offset: 1, stopColor: "#FF3C6B" })),
        React.createElement(ClipPath, { id: "specialOfferIcon_svg__b" },
            React.createElement(Path, { fill: "#fff", d: "M4 3h12v12H4z" })))));

const SvgSplashCirclesIcon = (props) => (React.createElement(Svg, { width: 467, height: 467, fill: "none", viewBox: "0 0 467 467", ...props },
    React.createElement(Circle, { cx: 233.5, cy: 233.5, r: 233.5, fill: "#D0E1FE" }),
    React.createElement(Circle, { cx: 233.5, cy: 233.5, r: 183.965, fill: "#fff" }),
    React.createElement(Circle, { cx: 233.499, cy: 233.5, r: 145.173, fill: "#A0C2FC" }),
    React.createElement(Circle, { cx: 233.5, cy: 233.5, r: 113.841, fill: "#4485F9" })));

const SvgTrashIcon = (props) => (React.createElement(Svg, { width: 21, height: 20, fill: "none", color: "#8A95A8", viewBox: "0 0 21 20", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M3.11 3.792a.72.72 0 1 0 0 1.44zm14.8 1.44a.72.72 0 0 0 0-1.44zM9.43 8.237a.72.72 0 1 0-1.44 0zM7.99 14a.72.72 0 0 0 1.44 0zm5.038-5.763a.72.72 0 0 0-1.44 0zM11.588 14a.72.72 0 1 0 1.44 0zM3.11 4.512v.72h14.8v-1.44H3.11zm4.991-.69h.72v-1.53H7.38v1.53zm4.818-1.53h-.72v1.53h1.44v-1.53zM12.83 2.2v.72a.63.63 0 0 1-.63-.626h1.44a.81.81 0 0 0-.81-.814zM8.1 2.293h.72a.63.63 0 0 1-.63.626V1.48a.81.81 0 0 0-.81.813zM5.018 5.23h-.72v12.376h1.44V5.23zm.089 12.47v.72h10.805v-1.44H5.107zM16 17.605h.72V5.23h-1.44v12.376zm-.089.093v.72c.478 0 .81-.396.81-.813h-1.44c0-.315.25-.627.63-.627zm-10.894-.093h-.72c0 .417.33.813.809.813v-1.44c.38 0 .63.313.63.627zm3.693-9.37h-.72V14h1.44V8.237zm3.597 0h-.72V14h1.44V8.237zM8.19 2.2v.72h2.32V1.48H8.19zm2.32 0v.72h2.32V1.48h-2.32z" })));

const SvgUpdateAppIcon = (props) => (React.createElement(Svg, { width: 88, height: 88, fill: "none", color: "#F0F5FF", viewBox: "0 0 88 88", ...props },
    React.createElement(Path, { fill: "currentColor", d: "M60.332 59.87v3.642a4.06 4.06 0 0 1-4.047 4.047h-31.29a4.06 4.06 0 0 1-4.048-4.047v-48.13a4.06 4.06 0 0 1 4.047-4.046h31.291a4.06 4.06 0 0 1 4.047 4.047v3.642a20 20 0 0 1 2.66-.173c.563 0 1.127.029 1.676.072v-3.541C64.668 10.758 60.91 7 56.285 7h-31.29c-4.626 0-8.384 3.758-8.384 8.383v57.234c0 4.625 3.758 8.383 8.383 8.383h31.291c4.625 0 8.383-3.758 8.383-8.383V59.971a21 21 0 0 1-1.677.072 23 23 0 0 1-2.659-.173M44 76.664h-6.72a2.394 2.394 0 0 1-2.342-2.457 2.4 2.4 0 0 1 2.341-2.341H44a2.394 2.394 0 0 1 2.457 2.341 2.394 2.394 0 0 1-2.341 2.457z" }),
    React.createElement(Path, { fill: "currentColor", d: "M62.98 21.034c-10.175 0-18.414 8.239-18.414 18.414S52.805 57.86 62.98 57.86s18.413-8.238 18.413-18.413-8.238-18.414-18.413-18.414m0 28.979a10.56 10.56 0 0 1-10.565-10.565c0-.636.52-1.157 1.156-1.157s1.156.52 1.156 1.157c0 4.567 3.7 8.267 8.253 8.267 4.552 0 8.267-3.7 8.267-8.253 0-4.567-3.7-8.267-8.253-8.267a8.24 8.24 0 0 0-6.056 2.645h1.648c.636 0 1.156.52 1.156 1.156a1.16 1.16 0 0 1-1.156 1.156h-4.148a1.16 1.16 0 0 1-1.156-1.156v-4.061c0-.636.52-1.157 1.156-1.157s1.156.52 1.156 1.157v.968c4.163-4.09 10.854-4.018 14.945.145 4.09 4.162 4.018 10.854-.145 14.944a10.6 10.6 0 0 1-7.414 3.02" })));

const SvgVerificationIcon = (props) => (React.createElement(Svg, { width: 14, height: 14, fill: "none", color: "#4485F9", viewBox: "0 0 14 14", ...props },
    React.createElement(G, { clipPath: "url(#verificationIcon_svg__a)" },
        React.createElement(Path, { fill: "currentColor", d: "M13.563 7c0 .56-.689 1.022-.826 1.538-.143.534.217 1.277-.053 1.744-.274.475-1.1.532-1.485.917s-.442 1.21-.917 1.485c-.467.27-1.21-.09-1.744.053-.516.137-.978.825-1.538.825s-1.022-.687-1.538-.825c-.534-.143-1.277.217-1.744-.053-.475-.274-.532-1.1-.917-1.485s-1.21-.442-1.485-.917c-.27-.467.09-1.21-.053-1.744C1.125 8.022.438 7.56.438 7s.687-1.022.825-1.538c.142-.534-.217-1.277.053-1.744.274-.475 1.1-.532 1.485-.917s.442-1.21.917-1.485c.467-.27 1.21.09 1.744-.053C5.978 1.125 6.44.438 7 .438s1.022.687 1.538.825c.534.142 1.277-.217 1.744.053.475.274.532 1.1.917 1.485s1.21.442 1.485.917c.27.467-.09 1.21.053 1.744.137.516.825.978.825 1.538" }),
        React.createElement(Path, { fill: "#FFFCEE", d: "M8.897 5.044 6.399 7.542 5.104 6.25a.72.72 0 0 0-1.019 1.018l1.817 1.817a.7.7 0 0 0 .991 0l3.02-3.021a.72.72 0 0 0-1.016-1.019" })),
    React.createElement(Defs, null,
        React.createElement(ClipPath, { id: "verificationIcon_svg__a" },
            React.createElement(Path, { fill: "#fff", d: "M0 0h14v14H0z" })))));

const SvgWarningIcon = (props) => (React.createElement(Svg, { width: 50, height: 50, fill: "none", color: "#FF6F42", viewBox: "0 0 50 50", ...props },
    React.createElement(Rect, { width: 50, height: 50, fill: "currentColor", fillOpacity: 0.2, rx: 25 }),
    React.createElement(Circle, { cx: 25.005, cy: 24.999, r: 20, fill: "currentColor" }),
    React.createElement(Path, { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.8, d: "M25 31.986V32m0-14v9.8" })));

export { SvgArrowIcon as ArrowIcon, SvgArrowTriangleIcon as ArrowTriangleIcon, SvgBasketIcon as BasketIcon, SvgBellCroppedIcon as BellCroppedIcon, SvgBellIcon as BellIcon, SvgCartIcon as CartIcon, SvgCartOutlineIcon as CartOutlineIcon, SvgCatalogIcon as CatalogIcon, SvgCatalogMenuIcon as CatalogMenuIcon, SvgCheckIcon as CheckIcon, SvgChevronIcon as ChevronIcon, SvgClockIcon as ClockIcon, SvgCloseIcon as CloseIcon, SvgCompleteStepIcon as CompleteStepIcon, SvgCreditCardIcon as CreditCardIcon, SvgDeliveryCancelledIcon as DeliveryCancelledIcon, SvgDeliveryTrackIcon as DeliveryTrackIcon, SvgDocumentIcon as DocumentIcon, SvgEmptyBoxIcon as EmptyBoxIcon, SvgFilterIcon as FilterIcon, SvgHeartIcon as HeartIcon, SvgHeartOutlineIcon as HeartOutlineIcon, SvgHomeIcon as HomeIcon, SvgImagePlaceholderIcon as ImagePlaceholderIcon, SvgInfoIcon as InfoIcon, SvgLocationArrowIcon as LocationArrowIcon, SvgLocationIcon as LocationIcon, SvgLocationOutlineIcon as LocationOutlineIcon, SvgLockIcon as LockIcon, SvgLogoIcon as LogoIcon, SvgLogoutIcon as LogoutIcon, SvgMenuUnevenIcon as MenuUnevenIcon, SvgMinusIcon as MinusIcon, SvgMinusIconBold as MinusIconBold, SvgOptionsIcon as OptionsIcon, SvgPackageIcon as PackageIcon, SvgPhoneIcon as PhoneIcon, SvgPhoneOutlineIcon as PhoneOutlineIcon, SvgPlusIcon as PlusIcon, SvgPlusIconBold as PlusIconBold, SvgProfileIcon as ProfileIcon, SvgRadioCheckedIcon as RadioCheckedIcon, SvgRadioIcon as RadioIcon, SvgRoundCloseIcon as RoundCloseIcon, SvgSearchIcon as SearchIcon, SvgShortLogoIcon as ShortLogoIcon, SvgSortingIcon as SortingIcon, SvgSpecialOfferIcon as SpecialOfferIcon, SvgSplashCirclesIcon as SplashCirclesIcon, SvgTrashIcon as TrashIcon, SvgUpdateAppIcon as UpdateAppIcon, SvgVerificationIcon as VerificationIcon, SvgWarningIcon as WarningIcon };

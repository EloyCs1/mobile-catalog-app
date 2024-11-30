import React from 'react';

import { IconProps, IconName } from './types';
import './styles.scss';

const Icon: React.FC<IconProps> = ({
  testId = 'icon',
  name,
  width = 24,
  height = 24,
  onClick,
}) => {
  const getSvgIcon = () => {
    switch (name) {
      case IconName.MBST_LOGO:
        return (
          <svg
            width="77"
            height="30"
            viewBox="0 0 77 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-testid={testId}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.8454 9.23917C11.485 7.857 9.59259 7 7.5 7C3.35786 7 0 10.3579 0 14.5C0 18.6421 3.35786 22 7.5 22C9.50619 22 11.3284 21.2123 12.6742 19.9293C11.6202 18.4554 11 16.6501 11 14.7C11 12.6465 11.6877 10.7536 12.8454 9.23917Z"
              fill="black"
            />
            <path
              d="M18.4365 7.42969H21.5798V22.0011H18.4365V7.42969Z"
              fill="black"
            />
            <path
              d="M27.2939 13.1445L27.2939 16.2878L12.7225 16.2878L12.7225 13.1445L27.2939 13.1445Z"
              fill="black"
            />
            <path
              d="M24.0488 8.45312L26.2715 10.6757L15.9679 20.9793L13.7453 18.7567L24.0488 8.45312Z"
              fill="black"
            />
            <path
              d="M26.2715 18.7578L24.0489 20.9804L13.7453 10.6769L15.9679 8.45426L26.2715 18.7578Z"
              fill="black"
            />
            <g clip-path="url(#clip0_20765_19976)">
              <path
                d="M33.3506 21.8555H30.4363V7.28404H35.4739L37.3057 14.1951C37.7845 15.9853 38.1592 17.5673 38.3882 18.8163H38.4298C38.6796 17.5673 39.1376 15.6314 39.5122 14.2367L41.3441 7.28404H46.3192V21.8555H43.4049V13.4873C43.4049 12.9253 43.4465 10.8228 43.4882 9.51139H43.4257C42.9886 11.2391 42.4682 13.1751 42.26 13.9036L40.0951 21.8555H36.6396L34.4747 13.8204C34.2873 13.1126 33.7253 10.9685 33.3298 9.51139H33.2673C33.2882 10.8228 33.3506 13.0085 33.3506 13.5706V21.8555ZM52.7383 14.3824C54.3203 14.9444 55.2987 16.0477 55.2987 17.7963C55.2987 21.3351 52.426 21.8555 49.1578 21.8555H43.3709V7.28404H48.8664C51.6974 7.28404 54.7366 7.80445 54.7366 11.2183C54.7366 12.7587 53.9664 13.7996 52.7383 14.3824ZM48.7207 9.74037H46.5142V13.1959H48.6999C50.4068 13.1959 51.6558 13.1542 51.6558 11.4681C51.6558 9.84445 50.4068 9.74037 48.7207 9.74037ZM46.5142 19.3991H49.0121C50.9897 19.3991 52.2178 19.2951 52.2178 17.5673C52.2178 15.7147 50.6774 15.6522 49.1162 15.6522H46.5142V19.3991ZM59.8752 22.1053C56.5237 22.1053 53.6927 20.544 53.5886 17.0261L56.7943 16.6722C56.7943 18.7122 58.085 19.6906 59.9584 19.6906C61.5821 19.6906 62.8311 19.1493 62.8311 17.6922C62.8311 16.2767 61.3531 16.2142 59.1466 15.7355C56.2323 15.111 53.9841 14.091 53.9841 11.3016C53.9841 8.32486 56.8568 7.03424 59.667 7.03424C62.8311 7.03424 65.225 8.28322 65.5788 11.6971L62.3939 12.1967C62.3107 10.2608 61.3323 9.42812 59.6462 9.42812C58.1474 9.42812 57.169 10.011 57.169 11.1559C57.169 12.2383 58.3348 12.6547 60.4164 13.0293C63.5805 13.5914 66.0368 14.4657 66.0368 17.6089C66.0368 21.1061 62.9143 22.1053 59.8752 22.1053ZM71.3996 21.8555H68.2563V9.92771H63.6143V7.28404H76.0416V9.92771H71.3996V21.8555Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_20765_19976">
                <rect
                  width="48"
                  height="29"
                  fill="white"
                  transform="translate(29 0.855469)"
                />
              </clipPath>
            </defs>
          </svg>
        );
      case IconName.BAG_ACTIVE:
        return (
          <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.4706 4H9.76471V7.76471H6V20H18.2353V7.76471H14.4706V4ZM13.5294 7.76471V11.0588H14.4706V7.76471H13.5294ZM10.7059 7.76471V11.0588H9.76471V7.76471H10.7059ZM10.7059 7.76471H13.5294V4.94118H10.7059V7.76471Z"
              fill="black"
            />
          </svg>
        );
      case IconName.BAG_INACTIVE:
        return (
          <svg
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.4706 4.99609H9.76471V8.7608H6V20.9961H18.2353V8.7608H14.4706V4.99609ZM13.5294 9.70198V12.0549H14.4706V9.70198H17.2941V20.0549H6.94118V9.70198H9.76471V12.0549H10.7059V9.70198H13.5294ZM13.5294 8.7608V5.93727H10.7059V8.7608H13.5294Z"
              fill="black"
            />
          </svg>
        );
    }
  };

  const SvgIcon = getSvgIcon();
  return onClick ? (
    <button
      className="buttonIcon"
      onClick={onClick}
      data-testid={`${testId}-button`}
    >
      {SvgIcon}
    </button>
  ) : (
    SvgIcon
  );
};
export default Icon;
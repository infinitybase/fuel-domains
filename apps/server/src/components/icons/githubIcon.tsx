'use client';

import { createIcon } from '@chakra-ui/react';

export const GithubIcon = createIcon({
  displayName: 'GithubIcon',
  viewBox: '0 0 21 20',
  path: (
    <path
      d="M10.5 0C7.84784 0 5.3043 1.05357 3.42893 2.92893C1.55357 4.8043 0.5 7.34784 0.5 10C0.5 12.6522 1.55357 15.1957 3.42893 17.0711C5.3043 18.9464 7.84784 20 10.5 20C13.1522 20 15.6957 18.9464 17.5711 17.0711C19.4464 15.1957 20.5 12.6522 20.5 10C20.5 7.34784 19.4464 4.8043 17.5711 2.92893C15.6957 1.05357 13.1522 0 10.5 0ZM13.1358 18.1525H13.0583C13.0001 18.1558 12.9419 18.1471 12.8871 18.1271C12.8324 18.107 12.7823 18.076 12.74 18.0358C12.7009 17.9945 12.6705 17.9458 12.6504 17.8926C12.6304 17.8394 12.6212 17.7827 12.6233 17.7258V16.5542C12.6283 16.165 12.6317 15.7708 12.6317 15.3742C12.6303 15.0841 12.5879 14.7957 12.5058 14.5175C12.4281 14.2363 12.2713 13.9832 12.0542 13.7883C12.635 13.7323 13.206 13.6003 13.7525 13.3958C14.2135 13.2205 14.6305 12.9463 14.9742 12.5925C15.3133 12.2367 15.5658 11.8067 15.7117 11.3375C15.8891 10.7629 15.9735 10.1637 15.9617 9.5625C15.9649 9.14273 15.8915 8.72589 15.745 8.3325C15.5961 7.936 15.3711 7.57249 15.0825 7.2625C15.1448 7.10615 15.1901 6.94355 15.2175 6.7775C15.245 6.61083 15.2592 6.4425 15.2592 6.27417C15.2592 6.0575 15.2342 5.84083 15.1842 5.63C15.1387 5.41375 15.0772 5.20121 15 4.99417C14.9705 4.98267 14.9391 4.97701 14.9075 4.9775H14.8158C14.6242 4.97917 14.4358 5.01083 14.2542 5.07C14.0541 5.12841 13.8583 5.20081 13.6683 5.28667C13.4794 5.37134 13.2955 5.46678 13.1175 5.5725C12.9383 5.67833 12.78 5.78 12.64 5.87417C11.2381 5.48344 9.75606 5.48344 8.35417 5.87417C8.19782 5.76964 8.03888 5.66906 7.8775 5.5725C7.69697 5.4659 7.50994 5.37071 7.3175 5.2875C7.12805 5.1988 6.93154 5.12605 6.73 5.07C6.55192 5.01117 6.36587 4.97997 6.17833 4.9775H6.08667C6.05532 4.97706 6.02419 4.98272 5.995 4.99417C5.91672 5.2015 5.85268 5.41394 5.80333 5.63C5.75833 5.84167 5.73667 6.0575 5.73583 6.27417C5.73583 6.4425 5.75 6.61083 5.77833 6.7775C5.80583 6.94333 5.85 7.10583 5.91167 7.2625C5.62382 7.5729 5.3996 7.9367 5.25167 8.33333C5.1044 8.72659 5.03013 9.14341 5.0325 9.56333C5.02084 10.1613 5.10295 10.7574 5.27583 11.33C5.42667 11.7992 5.67833 12.23 6.0125 12.5933C6.35833 12.945 6.775 13.2183 7.23417 13.3967C7.77833 13.605 8.34833 13.7383 8.92833 13.7933C8.76639 13.9401 8.63793 14.12 8.55167 14.3208C8.46961 14.5194 8.41359 14.7278 8.385 14.9408C8.07923 15.0872 7.74483 15.1641 7.40583 15.1658C7.09101 15.1784 6.78029 15.0909 6.51833 14.9158C6.26703 14.7296 6.05422 14.4964 5.89167 14.2292C5.81892 14.1169 5.73756 14.0105 5.64833 13.9108C5.5542 13.806 5.45041 13.7103 5.33833 13.625C5.22787 13.5425 5.10678 13.4752 4.97833 13.425C4.85196 13.3696 4.71549 13.3409 4.5775 13.3408C4.54417 13.3417 4.51083 13.345 4.4775 13.3492C4.43198 13.349 4.38662 13.3546 4.3425 13.3658C4.30372 13.376 4.26705 13.3929 4.23417 13.4158C4.21922 13.4241 4.20672 13.4361 4.19793 13.4508C4.18915 13.4654 4.1844 13.4821 4.18417 13.4992C4.18767 13.5393 4.19993 13.5781 4.22009 13.613C4.24025 13.6478 4.26781 13.6778 4.30083 13.7008C4.37833 13.7625 4.4425 13.81 4.49417 13.8433L4.51917 13.8608C4.63 13.9467 4.73667 14.0392 4.8375 14.1383C4.93083 14.22 5.015 14.3125 5.0875 14.4133C5.1625 14.5125 5.2275 14.6183 5.28 14.7308C5.34083 14.8425 5.405 14.9708 5.4725 15.1167C5.62917 15.5117 5.9075 15.8458 6.2675 16.0708C6.645 16.2733 7.06833 16.3742 7.4975 16.3633C7.6425 16.3633 7.78833 16.355 7.9325 16.3383C8.07583 16.315 8.21833 16.2908 8.36167 16.2625V17.715C8.36426 17.7736 8.35447 17.832 8.33293 17.8865C8.31139 17.9411 8.27858 17.9904 8.23666 18.0314C8.19474 18.0724 8.14464 18.104 8.08965 18.1243C8.03465 18.1446 7.97599 18.1531 7.9175 18.1492H7.86583C5.92253 17.5214 4.26722 16.2204 3.19797 14.4805C2.12873 12.7406 1.7158 10.6761 2.03357 8.65881C2.35133 6.6415 3.3789 4.80392 4.93123 3.47697C6.48356 2.15002 8.45865 1.42089 10.5008 1.42089C12.543 1.42089 14.5181 2.15002 16.0704 3.47697C17.6228 4.80392 18.6503 6.6415 18.9681 8.65881C19.2859 10.6761 18.8729 12.7406 17.8037 14.4805C16.7344 16.2204 15.0791 17.5214 13.1358 18.1492V18.1525Z"
      fill="currentColor"
    />
  ),
});

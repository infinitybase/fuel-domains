import { type NextRequest, NextResponse } from 'next/server';

const svgTemplate = `
<svg width="2000" height="2000" viewBox="5 1 204 204" fill="none" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
    <g filter="url(#filter0_d_14609_8503)">
        <rect x="5.97611" y="1.97611" width="202.048" height="202.048" rx="6.48464"
              stroke="url(#paint0_linear_14609_8503)" stroke-width="2.04778" shape-rendering="crispEdges"/>
        <path d="M201.539 3H12.4608C9.44486 3 7 5.44486 7 8.46075V197.539C7 200.555 9.44486 203 12.4608 203H201.539C204.555 203 207 200.555 207 197.539V8.46075C207 5.44486 204.555 3 201.539 3Z"
              fill="#201F1D"/>
        <rect x="7" y="3" width="200" height="200" rx="5.46075" fill="url(#pattern0_14609_8503)" fill-opacity="0.16"/>
        <rect x="7" y="3" width="200" height="200" rx="5.46075" fill="url(#paint1_linear_14609_8503)"
              fill-opacity="0.5"/>
        <text fill="#F6F5F5" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16"
              font-weight="600" letter-spacing="0em" text-anchor="middle" x="51%" y="174.589"><tspan>@{{name}}</tspan></text>
        <g filter="url(#filter1_i_14609_8503)">
            <path d="M84.1338 81.1186L130.237 104.061L107.19 67.8196L84.1338 81.1186Z"
                  fill="url(#paint2_linear_14609_8503)"/>
            <path d="M124.256 74.0197L107.181 64.168V41.2253L84.1338 54.5237V81.1186L107.181 67.8202V90.7629L84.1338 104.061L107.181 117.36L130.228 104.061V84.3578C130.228 80.0926 127.951 76.1523 124.256 74.0197Z"
                  fill="#F6F5F5"/>
        </g>
    </g>
    <defs>
        <filter id="filter0_d_14609_8503" x="0.856586" y="0.952148" width="212.287" height="213.652"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                           result="hardAlpha"/>
            <feOffset dy="5.46075"/>
            <feGaussianBlur stdDeviation="2.04778"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14609_8503"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14609_8503" result="shape"/>
        </filter>
        <pattern id="pattern0_14609_8503" patternContentUnits="objectBoundingBox" width="0.161" height="0.161">
            <use xlink:href="#image0_14609_8503" transform="scale(0.000101641)"/>
        </pattern>
        <filter id="filter1_i_14609_8503" x="84.1338" y="41.2253" width="47.4687" height="77.4995"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                           result="hardAlpha"/>
            <feOffset dx="1.36519" dy="1.36519"/>
            <feGaussianBlur stdDeviation="1.36519"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14609_8503"/>
        </filter>
        <linearGradient id="paint0_linear_14609_8503" x1="7" y1="3" x2="216.314" y2="192.724"
                        gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFC010"/>
            <stop offset="0.48" stop-color="#EBA312"/>
            <stop offset="0.71" stop-color="#D38015"/>
            <stop offset="0.99" stop-color="#B24F18"/>
        </linearGradient>
        <linearGradient id="paint1_linear_14609_8503" x1="107" y1="3" x2="107" y2="203" gradientUnits="userSpaceOnUse">
            <stop stop-color="#151413" stop-opacity="0"/>
            <stop offset="1" stop-color="#151413"/>
        </linearGradient>
        <linearGradient id="paint2_linear_14609_8503" x1="84.1338" y1="85.9401" x2="130.237" y2="85.9401"
                        gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFC010"/>
            <stop offset="0.99" stop-color="#B24F18"/>
        </linearGradient>
        <image id="image0_14609_8503" width="1584" height="1584"
               xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABjAAAAYwCAYAAADcZwb+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAADQvSURBVHgB7NsxauRQEEXR0qCFNR1pyYqE1jXB9BjbGGOMA+GGG5yzB71A99cMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA31uGV9v99hh4tx+nb4MP9oHP7AOf2QcAAACewf+HN38GAAAAAAAgRsAAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIGcdAAAu2Y9zGQAAAOApXGAAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOesAAHDJdr89BgAAAH7ZfpzL4AIDAAAAAADoETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyFkHAIBL9uNcBgAAAHgKFxgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAzjoAAFyy3W+PAYCfPfbj9HiQV9t2W+bv/Bt4Yx/4YB/46mUflsEFBgAAAAAA0CNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJCzDgAAl+zHuQwAAADwFC4wAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgKkRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAA+N++HaRICAQBEOwBHyaefLIn8We94Hl3DzIDORDxiKIgqwAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAABylgEAwCP7ts4BAP+bx3k5HgQAeMASBQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQsg9txXq8B8AvzAfiL+QAAAACf4wMDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyBEwAAAAAACAHAEDAAAAAADIETAAAAAAAIAcAQMAAAAAAMgRMAAAAAAAgBwBAwAAAAAAyFkGt31b5wAAAID3msd5OR4EAHjAEgUAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkCBgAAAAAAECOgAEAAAAAAOQIGAAAAAAAQI6AAQAAAAAA5AgYAAAAAABAjoABAAAAAADkLIPbcV6vAQAAAAAAJPjAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHIEDAAAAAAAIEfAAAAAAAAAcgQMAAAAAAAgR8AAAAAAAAByBAwAAAAAACBHwAAAAAAAAHKWwW3f1jkAAADgveZxXo4HAQAesEQBAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAOQIGAAAAAACQI2AAAAAAAAA5AgYAAAAAAJAjYAAAAAAAADkCBgAAAAAAkCNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfI0fS6dJ7RBG0gEAAAAASUVORK5CYII="/>
    </defs>
</svg>
`;

export function GET(req: NextRequest) {
  const [, name] = req.nextUrl.pathname.split('/').filter((a) => !!a);

  return new NextResponse(svgTemplate.replace('{{name}}', name), {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
}
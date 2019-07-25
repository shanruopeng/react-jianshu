import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyle =  createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1563850451153'); /* IE9 */
    src: url('./iconfont.eot?t=1563850451153#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPIAAsAAAAAB9gAAAN6AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDFIJ6ATYCJAMQCwoABCAFhG0HSBvsBsgOJUHBwAAAYABgPHwNc+/v7l02e6ld9WL7+KjEV6owCAcKlEUoMBaH6kZk+N9mD1iCy+aq0EUHclGoD4Y2vqtgF/UVlXFxqJppEZgPFJc5xnkoF8Dw1oCNPdtigVuQCnqHsSsvYjWBZklH2HVRRQPwUBidAvFeEnngkVIoNemhCt2SkUV8Aa5q+oSfAcBn//fjP4gLD5JOZvS8eS40gJxfqmdJxPD/w0F3FwGY4+nAxpGxDSjE61LDPSIMbCM0pb6LU0BVJcaqCnqW9P8/Yu1FUM1/eWRJEF1G6gA4RsHML5XNiIVBUCZBYRJk3UBqARUmfQB8BQZuwa2LJNU6SfnMBKt82q2qgTRRXbpOiybnhHbmd1MTAGjRvpPjz2EKxyn+jhnslhVg+EpqwmEMu+NENacopHbaFNAwYWBntHTvu+RUeHC3WRFiCDd79fatrdidVzsOCtTuv45du6a9cqXh6lV2wvVsNpCtH3j9Opei5b/ZtWsHhOKLbQsuQu//uvxrxqxqFs/TSVnXXX5nOdHRFDXmesHY2mklrx5UeU7ak54cOh0W9Du81cdW0eCvap4d3z8hoSuGx8cq4BvhVwSEPb8/bnPp7dmObZGDQkKp4M3hL0rjuy78buwTNqayKKiqEGh+rrgL4bxOKB+feOjQJMKkulJiIqXHs+Qj5gaEdzZuYBMnfsCVtWsUAlOxDVfwJkTzqLAhsAN4+Z8PED5BIboQQ0IH8n4i5wf+jaMlXVMvn4yvHlQBP7pPvwztL4oLaM/8C0yF+buYLbOKyjaUpcgcm6EZi/1EJwlNw0+KMObeGKZJINaFypkQkj6LkFXLyILdho6eY+iqzqDZUjy+Z5yMEKUfm0YBCCPWQzLkG2QjziIL9i50THkLXSNBQHMbATP2rIZE5suQR9BA6wbQkt5mFSw1IoP0Oij2MfNyku3jtVB2Sm46ltFkw8XQCuUx+jj7inEICbQg2yx0EVgPms022i7bjFCPmEaE7GlqtVD2JEZvswDSFRnEQyADms4ANImejZXg5kfI3M/XgUR9mPHkmowKpRYkc5Jqp8ViaFogiwXWVhnXco5TX6I4CCKgCWQ2FrQioIPMZsCGZi9vZgTpIYzGHj67NGqUS2grYOYXWZ5wATTGgBIpcpToSBe86uh7d9I3Qr1JspICbxUNvFFy5QAAAAA=') format('woff2'),
    url('./iconfont.woff?t=1563850451153') format('woff'),
    url('./iconfont.ttf?t=1563850451153') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1563850451153#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

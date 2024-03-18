/* eslint-disable max-len */
'use client';
import './Footer.css';
import { SubscribeForm } from '../SubscribeForm';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Footer = (): JSX.Element => {
  const t = useTranslations('Footer');

  return (
    <footer className='min-h-[300px] bg-accent_background'>
      <div className='min-h-[300px] max-w-[85%] xxl:max-w-[1224px] mx-auto py-6 lg:pt-10 flex flex-col justify-between'>
        <div className='grid grid-cols-1 gap-9 mb-9 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-15'>
          <div className='max-w-[600px] lg:max-w-[450px] sm:col-span-2 lg:col-span-1'>
            <SubscribeForm className='grid grid-cols-1 gap-5 sm:grid-cols-[2fr_1fr] sm:gap-1' />
          </div>

          <ul className='flex flex-col gap-2' role='list'>
            <li role='menuitem'>
              <Link
                href='/about'
                data-link-alt={t('about')}
                className='font-condensed text-lg font-bold text-text_color uppercase link'
              >
                <span className='link-text'>{t('about')}</span>
              </Link>
            </li>
            <li role='menuitem'>
              <Link
                href='/contact'
                data-link-alt={t('contact')}
                className='font-condensed text-lg font-bold text-text_color uppercase link'
              >
                <span className='link-text'>{t('contact')}</span>
              </Link>
            </li>
            <li role='menuitem'>
              <Link
                href='/contact'
                data-link-alt={t('policy')}
                className='font-condensed text-lg font-bold text-text_color uppercase link'
              >
                <span className='link-text'>{t('policy')}</span>
              </Link>
            </li>
          </ul>

          <div className=''>
            <p className='font-condensed text-lg font-bold text-text_color uppercase mb-2'>{t('follow')}</p>

            <ul className='flex gap-3 mb-6' role='list'>
              <li role='menuitem'>
                <Link
                  href='https://www.linkedin.com/in/pavlo-reutskyi-294657278/'
                  target='_blank'
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="social-icon"
                  >
                    <path
                      d="M11.6079 9.88983C11.6076 10.3908 11.4084 10.8711 11.0539 11.2252C10.6995 11.5793 10.219 11.778 9.71802 11.7778C9.21706 11.7775 8.73671 11.5783 8.38265 11.2239C8.02859 10.8695 7.82983 10.3889 7.83008 9.88794C7.83033 9.38698 8.02958 8.90663 8.38399 8.55258C8.7384 8.19852 9.21895 7.99975 9.71991 8C10.2209 8.00025 10.7012 8.1995 11.0553 8.55391C11.4093 8.90832 11.6081 9.38887 11.6079 9.88983ZM11.6645 13.1765H7.88674V25.0009H11.6645V13.1765ZM17.6334 13.1765H13.8745V25.0009H17.5956V18.7959C17.5956 15.3393 22.1006 15.0182 22.1006 18.7959V25.0009H25.8312V17.5115C25.8312 11.6843 19.1634 11.9015 17.5956 14.7632L17.6334 13.1765Z"
                      fill="currentColor"
                    />
                    <circle
                      cx="17"
                      cy="17"
                      r="16.5"
                      stroke="currentColor"
                    />
                  </svg>
                </Link>
              </li>
              <li role='menuitem'>
                <Link
                  href='https://dev.to/pavloreutskiy'
                  target='_blank'
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="social-icon"
                  >
                    <path
                      d="M9.32926 22.3846H9.32846H6.78223V12.5H9.39276C10.403 12.5 11.0347 12.8978 11.4261 13.3987C11.8325 13.9189 12.0025 14.5827 12.0028 15.1106L12.0034 19.7763C12.0034 19.7763 12.0034 19.7763 12.0034 19.7763C12.0034 20.306 11.8375 20.9682 11.4284 21.486C11.0348 21.9841 10.3883 22.3863 9.32926 22.3846ZM10.5662 13.923L10.5657 13.9226C10.2462 13.6833 9.88822 13.5367 9.50114 13.5367H8.3562H7.8562V14.0367V20.9091V21.4091H8.3562H9.50175C9.88883 21.4091 10.2468 21.2625 10.5663 21.0232L10.5665 21.0231C10.9733 20.7184 11.1486 20.2679 11.1486 19.7638L11.1486 15.182L11.1486 15.1813C11.148 14.6776 10.9713 14.2271 10.5662 13.923Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                    <path
                      d="M14.7443 12.502H18.3856L18.3853 13.4439H15.3872H14.8872V13.9439V16.4713V16.9713H15.3872H17.0255V17.9165H15.3872H14.8872V18.4165V20.9433V21.4433H15.3872H18.3858V22.3885H14.8035V22.3884L14.7905 22.3887C14.337 22.4005 13.9577 22.0426 13.9433 21.5863V13.363H13.9434L13.9431 13.351C13.9321 12.8948 14.2912 12.5163 14.7443 12.502ZM24.618 19.6092L26.4621 12.5027H27.5645L25.2157 21.3638C24.8241 22.2569 24.3779 22.4192 24.1108 22.3962C23.795 22.3689 23.3602 22.069 23.0484 21.3633L20.6953 12.5027H21.7971L23.6502 19.6098L24.1352 21.4698L24.618 19.6092Z"
                      fill="currentColor"
                      stroke="currentColor"
                    />
                    <circle
                      cx="17"
                      cy="17"
                      r="16.5"
                      stroke="currentColor"
                    />
                  </svg>
                </Link>
              </li>
              <li role='menuitem'>
                <Link
                  href='https://github.com/PavloReutskiy'
                  target='_blank'
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="social-icon"
                  >
                    <circle
                      cx="17"
                      cy="17"
                      r="16.5"
                      stroke="currentColor"
                    />
                    <path
                      d="M17 5C10.37 5 5 10.37 5 17C5 22.31 8.435 26.795 13.205 28.385C13.805 28.49 14.03 28.13 14.03 27.815C14.03 27.53 14.015 26.585 14.015 25.58C11 26.135 10.22 24.845 9.98 24.17C9.845 23.825 9.26 22.76 8.75 22.475C8.33 22.25 7.73 21.695 8.735 21.68C9.68 21.665 10.355 22.55 10.58 22.91C11.66 24.725 13.385 24.215 14.075 23.9C14.18 23.12 14.495 22.595 14.84 22.295C12.17 21.995 9.38 20.96 9.38 16.37C9.38 15.065 9.845 13.985 10.61 13.145C10.49 12.845 10.07 11.615 10.73 9.965C10.73 9.965 11.735 9.65 14.03 11.195C14.99 10.925 16.01 10.79 17.03 10.79C18.05 10.79 19.07 10.925 20.03 11.195C22.325 9.635 23.33 9.965 23.33 9.965C23.99 11.615 23.57 12.845 23.45 13.145C24.215 13.985 24.68 15.05 24.68 16.37C24.68 20.975 21.875 21.995 19.205 22.295C19.64 22.67 20.015 23.39 20.015 24.515C20.015 26.12 20 27.41 20 27.815C20 28.13 20.225 28.505 20.825 28.385C23.2073 27.581 25.2775 26.05 26.744 24.0076C28.2106 21.9653 28.9996 19.5144 29 17C29 10.37 23.63 5 17 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </li>
              <li role='menuitem'>
                <Link
                  href='https://www.buymeacoffee.com/pavloreutskiy'
                  target='_blank'
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="social-icon"
                  >
                    <path
                      d="M25.2161 11.415L25.0841 10.749C24.9651 10.151 24.6961 9.58596 24.0831 9.36996C23.8861 9.30096 23.6631 9.27196 23.5131 9.12896C23.3611 8.98596 23.3171 8.76296 23.2821 8.55696C23.2171 8.17896 23.1571 7.80096 23.0901 7.42396C23.0331 7.09896 22.9881 6.73396 22.8401 6.43696C22.6451 6.03696 22.2431 5.80296 21.8441 5.64896C21.6393 5.57239 21.4303 5.50762 21.2181 5.45496C20.2181 5.19196 19.1681 5.09496 18.1411 5.03896C16.9078 4.97115 15.6713 4.99187 14.4411 5.10096C13.5261 5.18396 12.5611 5.28496 11.6911 5.60096C11.3731 5.71696 11.0451 5.85696 10.8031 6.10196C10.5061 6.40396 10.4101 6.87196 10.6261 7.24796C10.7801 7.51496 11.0411 7.70396 11.3181 7.82796C11.6781 7.98996 12.0551 8.11196 12.4411 8.19396C13.5161 8.43196 14.6301 8.52496 15.7281 8.56396C16.9461 8.61396 18.1651 8.57396 19.3781 8.44596C19.6771 8.41296 19.9761 8.37296 20.2741 8.32696C20.6261 8.27296 20.8521 7.81396 20.7481 7.49296C20.6241 7.10996 20.2911 6.96196 19.9141 7.01996C19.4481 7.09396 18.9541 7.12796 18.5321 7.16596C17.3551 7.24596 16.1741 7.24796 14.9961 7.17196C14.6095 7.14638 14.2237 7.1107 13.8391 7.06496C13.7531 7.05496 13.6591 7.03996 13.5811 7.02896C13.3381 6.99296 13.0971 6.94896 12.8571 6.89896C12.7461 6.87196 12.7461 6.71396 12.8571 6.68696H12.8621C13.1391 6.62696 13.4191 6.57896 13.7001 6.53996H13.7021C13.8331 6.53096 13.9651 6.50796 14.0961 6.49196C15.234 6.37386 16.3787 6.33376 17.5221 6.37196C18.1961 6.39096 18.8691 6.43896 19.5391 6.51596L19.7671 6.54696C20.0341 6.58696 20.3001 6.63496 20.5651 6.69196C20.9571 6.77696 21.4601 6.80496 21.6351 7.23396C21.6901 7.37096 21.7151 7.52196 21.7461 7.66496L22.0651 9.14896C22.0718 9.18078 22.072 9.21365 22.0655 9.24553C22.059 9.27741 22.046 9.30761 22.0273 9.33425C22.0087 9.36089 21.9847 9.3834 21.957 9.40038C21.9292 9.41737 21.8983 9.42846 21.8661 9.43296H21.8631C21.8261 9.43896 21.7881 9.44296 21.7511 9.44796C20.1781 9.64865 18.5938 9.74719 17.0081 9.74296C15.4369 9.74134 13.8674 9.6398 12.3091 9.43896C12.1691 9.42196 12.0161 9.39696 11.8921 9.37896C11.5661 9.33096 11.2431 9.27096 10.9191 9.21796C10.5261 9.15296 10.1511 9.18596 9.79605 9.37896C9.50605 9.53896 9.26905 9.78296 9.12105 10.08C8.96705 10.396 8.92205 10.74 8.85405 11.08C8.78505 11.42 8.67805 11.787 8.71905 12.136C8.80605 12.889 9.33205 13.501 10.0891 13.638C13.8325 14.306 17.6526 14.4326 21.4321 14.014C21.5039 14.0058 21.5766 14.0138 21.6449 14.0375C21.7131 14.0612 21.7752 14.0999 21.8266 14.1507C21.8779 14.2016 21.9172 14.2633 21.9415 14.3314C21.9658 14.3994 21.9745 14.4721 21.9671 14.544L21.8961 15.241L20.8781 25.148C20.8371 25.558 20.8311 25.98 20.7531 26.385C20.6311 27.022 20.2001 27.413 19.5711 27.556C18.9941 27.687 18.4061 27.756 17.8151 27.761C17.1591 27.765 16.5051 27.736 15.8491 27.739C15.1501 27.743 14.2931 27.679 13.7541 27.159C13.2791 26.701 13.2141 25.985 13.1491 25.366L12.4181 18.353L12.0961 15.259C12.0591 14.908 11.8101 14.564 11.4181 14.581C11.0821 14.596 10.7001 14.881 10.7401 15.26L10.9681 17.445L11.9171 26.557C12.0641 27.901 13.0911 28.625 14.3631 28.829C15.1051 28.949 15.8661 28.973 16.6201 28.985C17.5861 29.001 18.5621 29.038 19.5121 28.863C20.9201 28.605 21.9771 27.665 22.1281 26.206C22.4681 22.874 22.8111 19.543 23.1521 16.211L23.3671 14.124C23.3776 14.0205 23.4213 13.9231 23.4915 13.8464C23.5618 13.7697 23.6549 13.7176 23.7571 13.698C24.1591 13.62 24.5441 13.486 24.8311 13.18C25.2861 12.692 25.3771 12.057 25.2161 11.415ZM23.7381 12.187C23.5931 12.324 23.3751 12.388 23.1601 12.42C20.7441 12.779 18.2941 12.96 15.8521 12.88C14.1041 12.82 12.3751 12.626 10.6451 12.382C10.4751 12.358 10.2921 12.327 10.1751 12.202C9.95505 11.966 10.0641 11.492 10.1211 11.207C10.1731 10.947 10.2731 10.598 10.5841 10.561C11.0681 10.504 11.6301 10.709 12.1101 10.781C12.6871 10.869 13.2661 10.94 13.8471 10.993C16.3271 11.219 18.8491 11.183 21.3191 10.853C21.7691 10.793 22.2181 10.723 22.6641 10.643C23.0631 10.571 23.5041 10.437 23.7441 10.849C23.9101 11.13 23.9321 11.506 23.9061 11.823C23.8982 11.9614 23.8377 12.0916 23.7371 12.187H23.7381ZM17.5791 16.087C16.7171 16.457 15.7391 16.875 14.4701 16.875C13.9397 16.8737 13.4119 16.8007 12.9011 16.658L13.7781 25.662C13.8431 26.442 14.4951 27.042 15.2781 27.042C15.2781 27.042 16.5211 27.107 16.9361 27.107C17.3831 27.107 18.7221 27.042 18.7221 27.042C19.5051 27.042 20.1561 26.442 20.2211 25.662L21.1611 15.712C20.737 15.5586 20.29 15.4781 19.8391 15.474C19.0131 15.474 18.3481 15.758 17.5791 16.087Z"
                      fill="currentColor"/>
                    <circle
                      cx="17"
                      cy="17"
                      r="16.5"
                      stroke="currentColor"
                    />
                  </svg>
                </Link>
              </li>
            </ul>

            <p className='font-condensed text-lg font-bold text-text_color uppercase mb-2'>{t('support')}</p>
            <Link
              href='https://u24.gov.ua/'
              target='_blank'
            >
              <svg
                width="154"
                height="20"
                viewBox="0 0 154 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="united-icon"
              >
                <path
                  d="M45.4167 3.13369H53.1283V19.7628H45.4167V3.13369ZM13.5872 10.1652C13.5872 12.5406 12.6506 13.6584 10.6494 13.6584C8.64812 13.6584 7.71046 12.542 7.71046 10.1652V3.13369H0V10.5698C0 17.53 2.78489 20 10.6494 20C18.5139 20 21.2988 17.5257 21.2988 10.5698V3.13369H13.5872V10.1652ZM53.9431 9.31085H60.3952V19.7628H68.1068V9.31085H74.5592V3.13369H53.9431V9.31085ZM36.8228 11.7575L30.793 3.13369H22.2874V19.7628H29.8959V11.1389L35.9205 19.7628H44.4302V3.13369H36.8228V11.7575ZM134.298 6.65164C134.298 2.11484 131.428 0 125.381 0C118.859 0 116.108 2.42341 116.108 8.21921H122.171C122.171 6.2237 123.173 5.51054 125.161 5.51054C127.096 5.51054 127.708 5.98646 127.708 6.72292C127.708 7.69668 127.487 7.69668 122.609 9.28755C117.209 11.0691 115.532 14.5856 115.532 17.9827V19.7642H133.859V14.3658H123.14C123.786 13.5099 125.619 13.2727 129.679 12.1825C132.379 11.4722 134.298 10.1652 134.298 6.65164ZM75.3781 19.7628H92.9231V14.8024H82.7514V13.4008H89.9873V9.50007H82.7514V8.09842H92.9253V3.13369H75.3781V19.7628ZM153.846 10.9264V16.485H151.094V19.7628H144.829V16.485H134.485V10.8726L141.907 0.657888H151.096V10.9206L153.846 10.9264ZM144.828 5.46251L140.873 10.9264H144.828V5.46251ZM115.785 11.4548C115.785 17.0366 113.271 19.7686 108.09 19.7686H93.9089V3.13369H108.09C113.271 3.13369 115.785 5.86567 115.785 11.4548ZM108.261 11.4548C108.261 9.57716 107.513 8.69808 105.95 8.69808H101.433V14.21H105.95C107.513 14.2042 108.261 13.3251 108.261 11.4548Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

        </div>

        <p className='text-label_color mx-auto text-center text-sm'>{t('rights')}</p>
      </div>
    </footer>
  );
};

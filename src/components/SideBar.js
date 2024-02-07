import React from 'react'
import { useState } from 'react';

const SideBar = ({setContent,setToggle}) => {
    const itemList=[
        { 
            id: 1,
            svgContent: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.53991 2H7.91991C9.32991 2 10.4599 3.15 10.4599 4.561V7.97C10.4599 9.39 9.32991 10.53 7.91991 10.53H4.53991C3.13991 10.53 1.99991 9.39 1.99991 7.97V4.561C1.99991 3.15 3.13991 2 4.53991 2ZM4.53991 13.4697H7.91991C9.32991 13.4697 10.4599 14.6107 10.4599 16.0307V19.4397C10.4599 20.8497 9.32991 21.9997 7.91991 21.9997H4.53991C3.13991 21.9997 1.99991 20.8497 1.99991 19.4397V16.0307C1.99991 14.6107 3.13991 13.4697 4.53991 13.4697ZM19.46 2H16.08C14.67 2 13.54 3.15 13.54 4.561V7.97C13.54 9.39 14.67 10.53 16.08 10.53H19.46C20.86 10.53 22 9.39 22 7.97V4.561C22 3.15 20.86 2 19.46 2ZM16.08 13.4697H19.46C20.86 13.4697 22 14.6107 22 16.0307V19.4397C22 20.8497 20.86 21.9997 19.46 21.9997H16.08C14.67 21.9997 13.54 20.8497 13.54 19.4397V16.0307C13.54 14.6107 14.67 13.4697 16.08 13.4697Z" fill="currentColor"/></svg>',
            text: 'Dashboard'
        },
        { 
            id: 2,
            svgContent: '<svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.33003 0H14.669C18.07 0 19.99 2.1243 20 5.86962V16.1552C20 19.8994 18.07 22.0248 14.669 22.0248H5.33003C1.92903 22.0248 3.05176e-05 19.8994 3.05176e-05 16.1552V5.86962C3.05176e-05 2.1243 1.92903 0 5.33003 0ZM10.049 17.4657C10.48 17.4657 10.839 17.1133 10.879 16.6398V5.41811C10.919 5.07672 10.77 4.73424 10.5 4.54813C10.219 4.36092 9.87903 4.36092 9.61003 4.54813C9.33903 4.73424 9.19003 5.07672 9.21903 5.41811V16.6398C9.27003 17.1133 9.62903 17.4657 10.049 17.4657ZM14.65 17.4657C15.07 17.4657 15.429 17.1133 15.48 16.6398V13.0277C15.509 12.6742 15.36 12.3449 15.089 12.1577C14.82 11.9705 14.48 11.9705 14.2 12.1577C13.929 12.3449 13.78 12.6742 13.82 13.0277V16.6398C13.86 17.1133 14.219 17.4657 14.65 17.4657ZM6.21902 16.6398C6.17902 17.1133 5.82002 17.4657 5.38902 17.4657C4.95902 17.4657 4.59902 17.1133 4.56002 16.6398V9.03018C4.53002 8.6877 4.67902 8.34741 4.95002 8.1602C5.21902 7.97299 5.56002 7.97299 5.83002 8.1602C6.09902 8.34741 6.25002 8.6877 6.21902 9.03018V16.6398Z" fill="currentColor"/></svg>',
            text: 'Upload'
        },
        { 
            id: 3,
            svgContent: '<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7872 7.47423C19.6518 7.61908 19.4681 7.70185 19.2747 7.70185C18.559 7.70185 17.9787 8.32263 17.9787 9.07792C17.9787 9.83838 18.5522 10.4561 19.2611 10.4643C19.6605 10.4685 20 10.7664 20 11.1938V13.8476C20 16.0814 18.3075 17.893 16.2186 17.893H13.0658C12.7398 17.893 12.4758 17.6106 12.4758 17.2619V15.0271C12.4758 14.5925 12.1567 14.2511 11.7505 14.2511C11.354 14.2511 11.0251 14.5925 11.0251 15.0271V17.2619C11.0251 17.6106 10.7611 17.893 10.4362 17.893H3.78143C1.70213 17.893 0 16.0824 0 13.8476V11.1938C0 10.7664 0.339458 10.4685 0.738878 10.4643C1.44874 10.4561 2.02128 9.83838 2.02128 9.07792C2.02128 8.34333 1.46035 7.78462 0.725339 7.78462C0.531915 7.78462 0.348162 7.70185 0.212766 7.557C0.0773694 7.41215 0 7.21557 0 7.00865V4.32894C0 2.09826 1.706 0.273159 3.7911 0.273159H10.4362C10.7611 0.273159 11.0251 0.555615 11.0251 0.904288V3.55296C11.0251 3.97716 11.354 4.32894 11.7505 4.32894C12.1567 4.32894 12.4758 3.97716 12.4758 3.55296V0.904288C12.4758 0.555615 12.7398 0.273159 13.0658 0.273159H16.2186C18.3075 0.273159 20 2.08377 20 4.31859V6.92587C20 7.1328 19.9226 7.32938 19.7872 7.47423ZM11.7505 12.2439C12.1567 12.2439 12.4758 11.8921 12.4758 11.4679V7.32938C12.4758 6.90518 12.1567 6.55341 11.7505 6.55341C11.354 6.55341 11.0251 6.90518 11.0251 7.32938V11.4679C11.0251 11.8921 11.354 12.2439 11.7505 12.2439Z" fill="currentColor"/></svg>',
            text: 'Invoice'
        },
        { 
            id: 4,
            svgContent: '<svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.81 0.475647H13.191C16.28 0.475647 18 2.43586 18 5.79464V17.1705C18 20.5843 16.28 22.5005 13.191 22.5005H4.81C1.77 22.5005 0 20.5843 0 17.1705V5.79464C0 2.43586 1.77 0.475647 4.81 0.475647ZM5.07999 5.60743V5.59642H8.06899C8.49999 5.59642 8.84999 5.98185 8.84999 6.45429C8.84999 6.93993 8.49999 7.32537 8.06899 7.32537H5.07999C4.64899 7.32537 4.29999 6.93994 4.29999 6.4664C4.29999 5.99287 4.64899 5.60743 5.07999 5.60743ZM5.07999 12.303H12.92C13.35 12.303 13.7 11.9176 13.7 11.444C13.7 10.9705 13.35 10.5839 12.92 10.5839H5.07999C4.64899 10.5839 4.29999 10.9705 4.29999 11.444C4.29999 11.9176 4.64899 12.303 5.07999 12.303ZM5.07999 17.3357H12.92C13.319 17.2916 13.62 16.9161 13.62 16.4767C13.62 16.0252 13.319 15.6508 12.92 15.6067H5.07999C4.77999 15.5737 4.48999 15.7278 4.32999 16.0142C4.16999 16.2895 4.16999 16.6529 4.32999 16.9392C4.48999 17.2145 4.77999 17.3797 5.07999 17.3357Z" fill="currentColor"/></svg> ',
            text: 'Schedule'
        },
        {
            id: 5,
            svgContent: '<svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.4"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4109 3.75186L16.4119 4.57738C19.1665 4.81513 20.9862 6.88222 20.9891 10.0522L21 19.331C21.0039 22.7872 19.0322 24.9137 15.8718 24.9192L8.15188 24.9302C5.01119 24.9346 3.01482 22.7575 3.01087 19.2914L3.00001 10.1216C2.99606 6.93065 4.75153 4.86906 7.50617 4.59059L7.50518 3.76507C7.5042 3.28076 7.83001 2.91644 8.26444 2.91644C8.69886 2.91533 9.02468 3.27856 9.02567 3.76287L9.02666 4.53335L14.8914 4.52454L14.8904 3.75406C14.8894 3.26976 15.2152 2.90653 15.6497 2.90543C16.0742 2.90433 16.4099 3.26756 16.4109 3.75186ZM4.52146 10.4617L19.4696 10.4396V10.0544C19.4272 7.68792 18.349 6.44634 16.4138 6.26143L16.4148 7.10896C16.4148 7.58226 16.0801 7.95759 15.6556 7.95759C15.2211 7.95869 14.8943 7.58446 14.8943 7.11116L14.8933 6.2196L9.02862 6.22841L9.0296 7.11887C9.0296 7.59326 8.70477 7.9675 8.27035 7.9675C7.83592 7.9686 7.50912 7.59547 7.50912 7.12107L7.50813 6.27354C5.58284 6.48597 4.51751 7.73195 4.52048 10.1193L4.52146 10.4617ZM15.2399 15.4643V15.4764C15.2498 15.9827 15.625 16.3669 16.0801 16.3559C16.5244 16.3438 16.8789 15.9244 16.869 15.4181C16.8483 14.9338 16.4918 14.5386 16.0485 14.5397C15.5943 14.5507 15.2389 14.958 15.2399 15.4643ZM16.0554 20.4064C15.6013 20.3954 15.235 19.9782 15.234 19.4719C15.2241 18.9656 15.5884 18.5462 16.0426 18.5341H16.0525C16.5165 18.5341 16.8927 18.9513 16.8927 19.4686C16.8937 19.9859 16.5185 20.4053 16.0554 20.4064ZM11.1721 15.4819C11.1919 15.9882 11.568 16.3834 12.0222 16.3614C12.4665 16.3382 12.821 15.92 12.8012 15.4137C12.7903 14.9184 12.425 14.5331 11.9807 14.5342C11.5266 14.5562 11.1711 14.9756 11.1721 15.4819ZM12.0261 20.3569C11.572 20.3789 11.1968 19.9837 11.176 19.4774C11.176 18.9711 11.5305 18.5528 11.9847 18.5297C12.429 18.5286 12.7953 18.9139 12.8051 19.4081C12.8259 19.9155 12.4704 20.3338 12.0261 20.3569ZM7.1043 15.5204C7.12405 16.0268 7.50022 16.423 7.95439 16.3999C8.39869 16.3779 8.75314 15.9585 8.73241 15.4522C8.72253 14.9569 8.35722 14.5716 7.91194 14.5727C7.45777 14.5948 7.10332 15.0141 7.1043 15.5204ZM7.95836 20.3624C7.50419 20.3855 7.12901 19.9892 7.10827 19.4829C7.10728 18.9766 7.46272 18.5572 7.91689 18.5352C8.36119 18.5341 8.72749 18.9194 8.73736 19.4147C8.7581 19.921 8.40365 20.3404 7.95836 20.3624Z" fill="currentColor"/></g></svg>',
            text: 'Calendar'
        },
        {
            id: 6,
            svgContent: '<svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 7.81964C15.7071 9.20272 16.039 10.0179 16.7695 10.9574C17.3231 11.6495 17.5 12.5379 17.5 13.5017C17.5 14.4644 17.2128 15.3784 16.6373 16.1204C15.884 17.0099 14.8215 17.5778 13.7372 17.6765C12.1659 17.824 10.5937 17.9482 9.0005 17.9482C7.40634 17.9482 5.83505 17.8739 4.26375 17.6765C3.17846 17.5778 2.11602 17.0099 1.36367 16.1204C0.78822 15.3784 0.5 14.4644 0.5 13.5017C0.5 12.5379 0.677901 11.6495 1.23049 10.9574C1.98384 10.0179 2.29392 9.20272 2.29392 7.81964V7.35048C2.29392 5.49823 2.71333 4.28706 3.577 3.1014C4.86106 1.37227 6.91935 0.335236 8.95577 0.335236H9.04522C11.1254 0.335236 13.2502 1.42218 14.5125 3.22563C15.3314 4.38688 15.7071 5.54703 15.7071 7.35048V7.81964ZM6.07367 20.2246C6.07367 19.67 6.53582 19.416 6.96318 19.3073C7.46309 19.1909 10.5093 19.1909 11.0092 19.3073C11.4365 19.416 11.8987 19.67 11.8987 20.2246C11.8738 20.7525 11.5926 21.2206 11.204 21.5178C10.7001 21.9504 10.1087 22.2243 9.49057 22.323C9.14868 22.3718 8.81275 22.3729 8.48279 22.323C7.86361 22.2243 7.27227 21.9504 6.76937 21.5167C6.37978 21.2206 6.09852 20.7525 6.07367 20.2246Z" fill="currentColor"/></svg>',
            text: 'Notification'
        },
        {
            id: 7,
            svgContent: '<svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.4"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4023 15.5175C20.7599 15.7268 21.0359 16.0572 21.23 16.3875C21.6082 17.0703 21.5775 17.9072 21.2096 18.6451L20.4942 19.9666C20.1161 20.6714 19.411 21.1119 18.6854 21.1119C18.3277 21.1119 17.9291 21.0017 17.6021 20.7815C17.3364 20.5943 17.0298 20.5282 16.7028 20.5282C15.691 20.5282 14.8428 21.4422 14.8121 22.5325C14.8121 23.7989 13.8719 24.79 12.6967 24.79H11.3068C10.1214 24.79 9.18116 23.7989 9.18116 22.5325C9.16072 21.4422 8.3125 20.5282 7.30076 20.5282C6.96351 20.5282 6.65693 20.5943 6.40144 20.7815C6.07441 21.0017 5.66563 21.1119 5.31816 21.1119C4.58235 21.1119 3.8772 20.6714 3.49908 19.9666L2.79393 18.6451C2.4158 17.9293 2.39536 17.0703 2.77349 16.3875C2.937 16.0572 3.24359 15.7268 3.59106 15.5175C3.8772 15.3634 4.06116 15.1101 4.23489 14.8128C4.74587 13.8657 4.43928 12.6213 3.57062 12.0596C2.55888 11.4319 2.23185 10.0334 2.81437 8.94313L3.49908 7.64367C4.09181 6.55344 5.35904 6.168 6.381 6.80672C7.2701 7.33532 8.42491 6.98292 8.94611 6.04687C9.10962 5.73852 9.2016 5.40815 9.18116 5.07777C9.16072 4.64829 9.27314 4.24083 9.46731 3.91046C9.84543 3.22769 10.5301 2.78719 11.2762 2.76517H12.7171C13.4734 2.76517 14.1581 3.22769 14.5362 3.91046C14.7202 4.24083 14.8428 4.64829 14.8121 5.07777C14.7917 5.40815 14.8837 5.73852 15.0472 6.04687C15.5684 6.98292 16.7232 7.33532 17.6225 6.80672C18.6343 6.168 19.9117 6.55344 20.4942 7.64367L21.1789 8.94313C21.7717 10.0334 21.4447 11.4319 20.4227 12.0596C19.554 12.6213 19.2474 13.8657 19.7686 14.8128C19.9322 15.1101 20.1161 15.3634 20.4023 15.5175ZM9.10962 13.7886C9.10962 15.5176 10.4075 16.8941 12.012 16.8941C13.6165 16.8941 14.8837 15.5176 14.8837 13.7886C14.8837 12.0597 13.6165 10.6721 12.012 10.6721C10.4075 10.6721 9.10962 12.0597 9.10962 13.7886Z" fill="currentColor"/></g></svg>',
            text: 'Settings'
        },
    ]
    const [clickedItemId, setClickedItemId] = useState(null);
    const handleDivClick = (itemId) => {
        setClickedItemId(itemId);
        const item = itemList.find(item => item.id === itemId);
        setContent(item.text)
    };

  return (
    <div class="flex-col w-[300px] h-[800px] shadow-lg rounded-t-xl rounded-b-xl lg:w-[214px] lg:h-[1047px] lg:left-0 lg:top--1 bg-white">
        
       <div className='flex justify-between items-center h-30 m-4 p-5 gap-10'>
            <div className='flex gap-6'>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF"/>
                </svg>
                <div className='mt-1 font-nunito font-[600] text-[24px]'>
                    Base
                </div>
            </div>
            <button className="lg:hidden flex" onClick={()=>setToggle(false)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3424 1.65682L6.68552 7.31375M6.68552 7.31375L1.0287 1.65685M6.68552 7.31375L1.02872 12.9706M6.68552 7.31375L12.3424 12.9706" stroke="#999CA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
       </div>
       <div className='flex-col'>
            {itemList.map((item)=>{
                return(
                    <button key={item.id} onClick={() => handleDivClick(item.id)} className={`flex justify-start align-items-center my-4 p-4 gap-3 ${clickedItemId === item.id ? 'bg-gradient-to-r from-violet-300 via-violet-100 to-white w-1/4' : ''}`}>
                        <div dangerouslySetInnerHTML={{ __html: item.svgContent }} className={`ml-5 ${clickedItemId === item.id? 'text-primary' : 'text-greyicon'}`}/>
                        <div className={`ml-3 font-nunito font-semibold text-[16px] ${clickedItemId === item.id ? 'text-primary' : 'text-greyicon'}`}>
                            {item.text}
                        </div>
                    </button>
                )
            })}
        </div> 
       
    </div>
  )
}

export default SideBar
import { HomeGameList } from "../../models/home-game-list-model";
import { HomeBanner } from "../../models/home-banner";


export const HomePageGamesList: HomeGameList[] = [
    { id: 1, name: 'Euro Millions', imgSrc:"../../assets/imgs/Euromillions.png" },
    { id: 2, name: 'Western Splash', imgSrc:"../../assets/imgs/WesternSplash.png" },
    { id: 3, name: 'Western Power', imgSrc:"../../assets/imgs/WesternPower.png" },
    { id: 4, name: 'Western Million', imgSrc:"../../assets/imgs/westernmillion.png" } ,
    { id: 5, name: 'Keno', imgSrc:"../../assets/imgs/Keno.png" }, 
    { id: 6, name: 'Western Extra', imgSrc:"../../assets/imgs/WesternExtra.png" } 
  ];

  export const HomePageBannerList: HomeBanner[] = [
    { id:1, BannerSrc:"../../assets/imgs/bannertwo.png"},
    { id:2, BannerSrc:"../../assets/imgs/bannerthree.png"},
    { id:3, BannerSrc:"../../assets/imgs/bannerfour.png"},
    { id:4, BannerSrc:"../../assets/imgs/bannerfive.png"}

  ]
  
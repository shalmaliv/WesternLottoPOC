import { LotteryModel } from "./lottery-model";
import { LotteryMainModel } from "./lottery-main-model";

export const LotteryRapidGames: LotteryModel[] = [
  { id: 11, name: 'Lotto 5/11', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/pick5.png" },
  { id: 12, name: 'Keno', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/Keno.png" },
  { id: 13, name: 'Joker', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/Joker-left-logo.png" },
  { id: 14, name: 'Lucky 6', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/default.png" } 
];

export const LotteryDailyGames1: LotteryModel[] = [
  { id: 15, name: 'Western Million', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/westernmillion.png" },
];

export const LotteryDailyGames2: LotteryModel[] = [
  { id: 16, name: 'UK Lotto', description: 'Next Draw : Thursday, August 16, 2018',logoSrc:"../../assets/imgs/UK_Lotto.png" },
];

export const LotteryDailyGames3: LotteryModel[] = [
  { id: 17, name: 'Euro Million', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/Euromillions.png" },
];

export const LotteryDailyGames4: LotteryModel[] = [
  { id: 18, name: 'MSP', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/default.png" },
  { id: 19, name: 'National', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/default.png" },
];

export const LotteryDailyGames5: LotteryModel[] = [
  { id: 20, name: 'Western Gold', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/default.png" },
  { id: 21, name: 'Western Kashman', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/default.png" },
  { id: 22, name: 'Western Max', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/default.png" },
  { id: 23, name: 'Western Option', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/WesternExtra.png" },
  { id: 24, name: 'Western Power', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/WesternPower.png" },
  { id: 25, name: 'Western Splash', description: 'Next Draw : Friday, August 17, 2018',logoSrc:"../../assets/imgs/WesternSplash.png" },
];


export const LotteryDailyGamesMain: LotteryMainModel[] = [
  { id: 26, name: 'Lotto 5/11', lotteryList: LotteryDailyGames1},
  { id: 27, name: 'UK Lotto', lotteryList: LotteryDailyGames2},
  { id: 28, name: 'EUROMILLION', lotteryList: LotteryDailyGames3},
  { id: 29, name: 'Lotto 5/90-GHANA', lotteryList: LotteryDailyGames4},
  { id: 30, name: 'Lotto 5/90-INHOUSE', lotteryList: LotteryDailyGames5},
];
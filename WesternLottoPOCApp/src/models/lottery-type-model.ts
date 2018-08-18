import { LotteryMainModel } from "./lottery-main-model";

export class LotteryTypeModel {
  id: number;
  name: string;
  logoSrc: string;
  lotteryList : LotteryMainModel[];
}
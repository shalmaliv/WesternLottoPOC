import {VirtualSportsDetailModel} from '../../models/virtual-sports-detail-Model'
import {VirtualSingleGame} from '../../models/virtual-sports-list-model'

export const VirtualDetailList: VirtualSportsDetailModel[] = [
    { id: 11, name: '7-0', value: '55.0' },
    { id: 12, name: '7-2', value: '36.00'},
    { id: 13, name: '0-5', value: '41.00' },
    { id: 14, name: '8-6', value: '66.00'} 
  ];

export const VirtualGameSingleItem : VirtualSingleGame[]=[
    {id:12,  name:'CORRECT SCORE', gamedetailsublist: VirtualDetailList},
    {id:12,  name:'GAME RESULT', gamedetailsublist: VirtualDetailList},
    {id:12,  name:'TOTAL POINTS ', gamedetailsublist: VirtualDetailList},
    {id:12,  name:'WIN POINTS', gamedetailsublist: VirtualDetailList}
]

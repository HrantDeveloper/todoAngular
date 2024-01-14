export  interface itemDataType {
    id:number,
    completed:{
        boolean:boolean,
        date:string
    },
    date:string,
    important:boolean,
    name:string |undefined,
    type:string
} ;
export interface PostedItemDataType {
    id:number,
    completed:{
        boolean:boolean,
        date:string
    }
    date:string,
    important:boolean,
    name:string,
    type:string
};

// export interface navBarDataItemType{
//     id:string,
//     title:string,
//     icon:React.ReactNode,
//     path:string
// }

// export interface DateChangerType{
//     data:itemDataType,
//     updateItem:any,
//     calendarIsOpen:boolean,
//     setCalendarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
//  }

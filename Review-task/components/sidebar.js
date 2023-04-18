// import { tableData } from "../main";
let deleteevent = new Event('delete');

class SideBar extends BaseTable {
    render() {
        super.render(this.getRenderData.bind(this))
    }
    
    getRenderData() {
        //  const categories  = [{name:"Hello",count:20}];
        // return table;
        //logic of count of categories using tableData

        let categories = [];
        let flag = true;

        for (let tableObj of tableData){
            for(let obj of categories){
                if (obj.name == tableObj.category){
                    obj.count += tableObj.price;
                    flag = false;
                    break;
                }
                
            }
            if(flag){
                let newObj = {
                    name: tableObj.category,
                    count: tableObj.price
                }
                categories.push(newObj);
            }
            else{
                flag = true;
            }
        }
        // console.log(categories);
        return categories
    }
    getCellData(data) {
        return [
            {text:data.name , elementName:'td', handleClick:''},
            {text:data.count, elementName:'td', handleClick: ''},
        ]
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }

}
// let deleteevent = new Event('delete');



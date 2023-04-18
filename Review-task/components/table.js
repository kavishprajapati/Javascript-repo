class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        const deleteClick = () => {
            const index  = tableData.findIndex(tdata => data.productName === tdata.productName);
            tableData.splice(index,1);
            this.render()
            document.dispatchEvent(deleteevent);
        }
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''}, //k
            {text:data.btn, elementName:'button', handleClick: deleteClick} //k
        ]
    }
}



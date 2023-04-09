function createTable(rows, columns) {
    
    const table = document.createElement('table');
    
    for (let i = 0; i < rows; i++) {
      
      const row = document.createElement('tr');
      
      for (let j = 0; j < columns; j++) {
        
        const cell = document.createElement('td');
        
        cell.textContent = `Row-${i} Column-${j}`;
        
        row.appendChild(cell);
      }

      table.appendChild(row);
    }
    
    return table;
  }

const myTable = createTable(2, 2); // create a 3x4 table
document.body.appendChild(myTable);
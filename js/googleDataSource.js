
  function getParsedGoogleData(sheet) {
  
    var keys = [];
    var records = [];
    
    for (var r = 0; r < sheet.length; r++) {

      var cell = sheet[r]["gs$cell"];
      var row = +cell.row - 2; //zero based row index, -1 is the key row 
      var col = +cell.col - 1; //zero based col index
      var value = cell["$t"];
      
      if (row < 0) 
        keys[col] = value;
      else {
        if (records[row] === undefined)
          records[row] = {};
        records[row][keys[col]] = value;
      }
    }
    return records;
  }

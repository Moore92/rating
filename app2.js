var express = require('express');
var Excel = require('exceljs');
var app = express();
var mysql = require('mysql');



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database : 'test'
});


function getData(cb) {
	
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		con.query('SELECT * FROM `table1`', function (err, result) {
			if (err) throw err;
			var length1=result.length;
			if(length1 > 0) {
				data = result;
				con.end();
				cb(err, result);
			}			
		});
	});

}



//app.listen(3000, function() {
	console.log('Trying to read a xls file on port 3000...');
	
	var workbook = new Excel.Workbook();
	var filename = '/form1.xlsx';
	
	// Reading excel file
	workbook.xlsx.readFile(__dirname + filename).then(function() {

		var worksheet = workbook.getWorksheet(1);

		
		
			getData(function(err, result){
				var col = worksheet.getColumn('F');
				col.eachCell(function(cell, rowNumber) {
					// cell=cell.rowNumber;
					if(err) throw err;
					

					if(rowNumber >= 2) {
						cell.value= result[rowNumber-2].ID;
						console.log(cell.value);
					}

				
			
				})

				var col = worksheet.getColumn('G');
				col.eachCell(function(cell, rowNumber) {
					// cell=cell.rowNumber;
					if(err) throw err;
					

					if(rowNumber >= 2) {
						cell.value= result[rowNumber-2].Name;
						console.log(cell.value);
					} 

				
			
				})

				var col = worksheet.getColumn('H');
				col.eachCell(function(cell, rowNumber) {
					// cell=cell.rowNumber;
					if(err) throw err;
					

					if(rowNumber >= 2) {
						cell.value= result[rowNumber-2].Password;
						console.log(cell.value);
					}

				
			
				})


				
					workbook.xlsx.writeFile(__dirname + '/published.xlsx').then(function() {
					console.log('file duplicated');
			 	});
			})
	});




		
		// col.eachCell(function(cell, rowNumber) {
		// 	// if (rowNumber == 2) {
		// 	// 	getData(function(err, result) {
		// 	// 		if (err) throw err;
		// 	// 		console.log(result);
		// 	// 		cell.value = result[1].Name +" "+ result[1].Password;
			
		// 	// 		workbook.xlsx.writeFile(__dirname + '/published.xlsx').then(function() {
		// 	// 			console.log('file duplicated');
		// 	// 		});
		// 	// 	});
				
		// 	//  }
				
		// 	console.log("AAAAAAAAAAAAAAAAAAA");
		// 		// getData(function(err, result){
		// 		// 	// for (rowNumber=2;rowNumber<10;rowNumber++){
		// 		// 	// if(err) throw err;
		// 		// 	// for(i=0;i<result.length;i++){
		// 		// 	// 	cell.value= result[i].ID;
		// 		// 	// }
		// 		// 	// }
		// 		// 	console.log("BBBBBBBBBBBBBBB");
		// 		// 	workbook.xlsx.writeFile(__dirname + '/published.xlsx').then(function() {
		// 		// 	console.log('file duplicated');
		// 		// 	});
		// 		// })
			
		// });
		
		
	
//});


	// var i = 0;
					// while(rowNumber >= 2 && rowNumber <= result.length+1){
					// 	cell.value= result[i].ID;
					// 	console.log(cell.value);
					// 	i++;
					// 	console.log("I " + i);
					// 	rowNumber++;
					// 	console.log("row:"+ rowNumber);
					// }
					//cell.value = result[1].Name +" "+ result[1].Password;
					// if(rowNumber >= 2){
					// 	for(i=0;i<result.length;i++){
							
					// 			cell.value= result[i].ID;
					// 			var temp = i;
								
					// 		}
					// 	}
					
					
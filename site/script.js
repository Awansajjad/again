var names = new Array();
names[0]="Mohsin";
names[1]="Juanid";
names[2]="Raza";
names[3]="jamshad";
names[4]="umer";
names[5]="javeria";
names[6]="eissa";
names[7]="sara";
names[8]="jameila";
names[9]="Naheem";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])	
	}
}


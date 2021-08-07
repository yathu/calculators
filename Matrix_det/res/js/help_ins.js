
// help determinant 3x3	
function draw3x3(){	
		var help_dit_3x3_in = new Vivus('help_dit_3x3_in', {
            type: 'scenario-sync',
            duration: 35,
            start: 'autostart',
            dashGap: 20,
            forceRender: false
        });
}
// help determinant 4x4	
function draw4x4(){	
		var help_dit_4x4_in = new Vivus('help_dit_4x4_in', {
            type: 'scenario-sync',
            duration: 35,
            start: 'autostart',
            dashGap: 20,
            forceRender: false
        });
}

// hover dit +-+ indicate arrow		
$("#add").click(function(){
if($ori_rows == 3){
$("#help_dit_3x3").show();
draw3x3();
help_dit_3x3.reset().play();
}
else if($ori_rows == 4){
	$("#help_dit_4x4").show();
draw4x4();
help_dit_4x4_in.reset().play();
}

});
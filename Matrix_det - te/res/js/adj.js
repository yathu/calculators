cofactor_of_a = [];

$("#C").css({
    "background-image": 'url(res/img/A.png)',
    "background-repeat": "no-repeat"
});
dyn_load();
$("#adda,#dela").click(function () {
    dyn_load();
    $("#finda_in_steps").prop("disabled", true);
    $("#final_a").hide();//A in
    $("#a_inhelp").hide();//help
});

$(".dittbl").delegate("td", "blur", function () {
    dyn_load();
    $("#final_a").hide();
    $("#a_inhelp").hide();
    $("#finda_in_steps").prop("disabled", true);
});

function dyn_load() {
    cadj = 0;
    cadjr = 0;
    //  $ori_table = $.trim($("#C").html());
    // $temp_table = $.trim($("#C").html());
    // $ori_rows = $("#C table").find("tr").length;
    $ori_column = $("#C table").find("tr:eq(0) td").length;
    //  $adjfinal2_arr = [];
    $adjfinal_arr = [];
    signca_num = 1;
    signca_num_stat = 1;
    transposeTable_Aft = []; // After transpose
    temp = [];
    $notimes = Math.pow(parseInt($ori_rows), 2);

    if ($ori_column > 3) {
        $("#finda_in").prop("disabled", true);
    } else {
        $("#finda_in").prop("disabled", false);
    }
}


// alert($notimes);
//  alert($notimes);
function adjoint_start() {
        for (var $i = 0; $i < $notimes; $i++) {
            if (cadj === $ori_rows) {
                cadj = 0;
                cadjr++;
            }
            adjremove($temp_table, cadjr, cadj);
            cadj++;
        }
    }
    //alert($adjfinal2_arr);
    // signca();

function adjremove($table, $r, $c) {
    $("#DD").html($.trim($table));

    // alert(rlength);

    //remove row
    $("#DD").find("tr:eq(" + $r + ")").remove();

    var rlength = $ori_rows - 1;
    //remove columns
    for (var $ii = 0; $ii < rlength; $ii++) {
        $("#DD").find("tr:eq(" + $ii + ") td:eq(" + $c + ")").remove();

    }
    var nrow = $("#DD").find("tr").length;
    //if <=2 find diterminant
    if (nrow <= 2) {
        adjointMe($("#DD").html(), nrow);
    }

    $("#V").append($("#DD").html() + "<br>");
}


function adjointMe($tadj, $a_nrow) {
    if ($a_nrow === 1) {
        $get_2_tr = $($tadj + "table").find("td").html();
        //alert($get_2_tr);
        $adjfinal_arr.push(parseInt($get_2_tr));
    } else if ($a_nrow === 2) {
        find_ditfor_adj3($tadj);
    }

}

// craeate dyn matrix 
function createTable($norow, $nocolums, $id, $class) {
        $table = '<table id=' + $id + ' class=' + $class + ' border=1>';
        for ($rows = 0; $rows < $norow; $rows++) {
            $table += '<tr>';
            for ($colums = 0; $colums < $nocolums; $colums++) {
                $table += '<td></td>';
            }
            $table += '</tr>';
        }
        $table += '</table>';

        return $table;
    }
    // cofactor sign and put to matrix
    //signca();

function signca() {
    cofactor_of_a = [];
    $("#ca").html(createTable($ori_rows, $ori_column, "adjMat", "ca"));

    for (var sc = 0; sc < $adjfinal_arr.length; sc++) {

        //alert(signca_num);
        //  alert(signca_num_stat);

        $("#ca").find("tr td:eq(" + sc + ")").html(signca_num * $adjfinal_arr[sc]);
        cofactor_of_a.push(signca_num * $adjfinal_arr[sc]);
        // alert(signca_num + "*" + $adjfinal_arr[sc]);
        /*if(signca_num_stat==$ori_rows){
                
        }*/
        if (signca_num_stat == $ori_column) {
            signca_num = -1;
            // alert("got")
        } else {
            signca_num = (signca_num === 1) ? -1 : 1;
        }
        signca_num_stat++;
    }

}


function find_ditfor_adj3($tbl_adja) {
        var ac_adj = parseInt($($tbl_adja + "table").find("td:eq(0)").html()) * parseInt($($tbl_adja + "table").find("td:eq(3)").html());

        var bd_adj = parseInt($($tbl_adja + "table").find("td:eq(1)").html()) * parseInt($($tbl_adja + "table").find("td:eq(2)").html());

        $adjfinal_arr.push(ac_adj - bd_adj);
    }
    //transpose();


// to array 
//$x = 0;
/*  $(".tbl_C tr").each(function () {
      $($(this).find("td")).each(function () {
          transposeTable[$x] = (parseInt($(this).html()));
          $x++;
      });

  });*/
dynRCTranspose();

function dynRCTranspose() {
    noRow_C = $("#ca").find("tr").length;
    nocolumn_C = $("#ca tr:eq(0)").find("td").length;
    //  alert(noRow_C + " +++++ " + nocolumn_C);
    transposeTable_Bet = $.trim($("#ca").html()); // before transpose
}

function insert_array(tblName, arrName) {
    $x = 0;
    $("." + tblName + " tr").each(function () {
        $($(this).find("td")).each(function () {
            arrName[$x] = (parseInt($(this).html()));
            $x++;
        });

    });

}

function transpose() {
    dynRCTranspose();
    //alert(transposeTable_Bet);
    //   insert_array("tbl_C", transposeTable_Aft);

    for ($i = 0; $i < noRow_C; $i++) {
        $count = 0;
        $(transposeTable_Bet).find("tr:eq(" + $i + ")").find("td").each(function () {
            // alert($count);
            temp[$count] = parseInt($(this).html());
            $count++;
        });

        fillTrasnspose(temp, $i);
    }

}

function fillTrasnspose(temp, $i) {
    // alert(temp + "" + $i);
    for ($k = 0; $k < noRow_C; $k++) {

        for ($l = 0; $l < nocolumn_C; $l++) {
            $("#ca tr:eq(" + $l + ")").find("td:eq(" + $i + ")").html(temp[$l]);
            //  alert(temp[$l]);
        }
    }
}

function a_all_final() {
	$(".help-det").hide();
	
    $("#a_inhelp").hide(); //hide the help
    dyn_load();
    finddeterminant_final();
    adjoint_start();
    signca();
    transpose();
    $("#final_a").show();
    Anim("final_a", 1);
    $("#finda_in_steps").prop("disabled", false);
    $("#dit_ans").html("<span style='color:green;'>A<sup>-1</sup> =</span>" + 1 + "/" + $("#anshoweq").text().split(":")[1] + " *");
   
	if (parseInt($("#anshoweq").text().split(":")[1]) == 0) {
		$("#infobox_det .message_det").html('In this [<span class="glyphicon glyphicon-thumbs-up glyphicon-hand-up"></span>] |A|=0 <br> Hence this is <span class="big">Not Invertible</span> ');
		$("#infobox_det").css({
		"width":"300px",
		"height": "25px",
		"left": "70.5%",
		"right": "10px",
		"top": "385px",
		"display":"block",
		"color":"red",
		"font-size":"1.5em",
		"padding": "5px",
		"height": "85px"
		});
		
    Anim("infobox_det", 62,1.5,1);
       // $("#cline").hide();
       // $("#dit_ans").hide();
    } else {
		$("#infobox_det .message_det").html('In this [<span class="glyphicon glyphicon-thumbs-up glyphicon-hand-up"></span>] |A|&ne;0 <br> Hence this is Invertible');
		$("#infobox_det").css({
		"width":"300px",
		"height": "25px",
		"left": "70.5%",
		"right": "10px",
		"top": "385px",
		"display":"block",
		"color":"green",
		"font-size":"1.5em",
		"padding": "5px",
		"height": "85px"
		});
		 Anim("infobox_det", 62,1.5,1);
    }
}

function fill($tbl_use, $arr) {
    // alert($tbl_use);
    for (var xt = 0; xt < $notimes; xt++) {
        $("#a_inhelp_m").delegate("#" + $tbl_use).find("td:eq(" + xt + ")").html($arr[xt]);
    }
}

function show_ca_other() {
    $("#a_inhelp_m").html("");
    //create table
    $("#a_inhelp_m").append(createTable($ori_rows, $ori_column, "CAof", "help_tbl"));

    $("#CAof").css({
        "background-image": 'url(res/img/CA.png)',
        "background-repeat": "no-repeat",
        "margin-top": "30px"
    });
    fill("CAof", cofactor_of_a);
    $("#next").hide();
    // alert(cofactor_of_a);

}

function showhow_ain() {
	$(".help-det").hide();
	
    $("#next").show(1000);
    // $("#a_inhelp_m").parent().show()
    //first
    $("#a_inhelp").show();
    Anim("a_inhelp_m", 1, 1.5, 1);
    $("#a_inhelp_m").html("<img src='res/img/help.png' width='300px'  height='300px'>");
    Anim("a_inhelp_n", 10, 1.5, 1);

}